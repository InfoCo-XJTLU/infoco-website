'use client';

import { useEffect, useMemo, useState } from 'react';
import type { EventRecord } from '../content';
import { getEventHref } from '../lib/event-links.mjs';
import { DIRECTIONS, createLevel, hasSignal, rotateCell, traceSignal } from '../lib/signal-route.mjs';

const eventGlyphs: Record<EventRecord['type'], string> = {
  '课程': '</>',
  '比赛': '48H',
  '招新': 'HELLO',
  '分享': 'LIVE',
  '会议': 'MEET',
  '文化节': 'FEST',
};

export function EventExplorer({ events }: { events: EventRecord[] }) {
  const [status, setStatus] = useState<'upcoming' | 'past'>('upcoming');
  const [type, setType] = useState('全部');
  const filtered = useMemo(() => events.filter((event) => event.status === status && (type === '全部' || event.type === type)), [events, status, type]);
  return (
    <div className="event-explorer">
      <div className="event-controls">
        <div className="segmented" aria-label="活动状态">
          <button className={status === 'upcoming' ? 'active' : ''} onClick={() => setStatus('upcoming')}>即将举行 <span>UPCOMING</span></button>
          <button className={status === 'past' ? 'active' : ''} onClick={() => setStatus('past')}>往期活动 <span>ARCHIVE</span></button>
        </div>
        <div className="filter-row"><span>FILTER:</span>{['全部', '课程', '比赛', '招新', '会议', '文化节'].map((item) => <button key={item} onClick={() => setType(item)} className={type === item ? 'active' : ''}>{item}</button>)}</div>
      </div>
      <div className="event-grid">
        {filtered.length ? filtered.map((event) => (
          <a href={event.href ?? getEventHref(event.slug)} className={`event-card ${event.tone}`} id={event.slug} key={event.slug}>
            <div className="event-visual"><span>{event.eyebrow}</span><b>{eventGlyphs[event.type]}</b><i /></div>
            <div className="event-card-body"><span className="card-kicker">{event.status === 'upcoming' ? 'UPCOMING' : 'ARCHIVE'} · {event.type}</span><h2>{event.title}</h2><p>{event.summary}</p><dl><div><dt>DATE</dt><dd>{event.date}</dd></div><div><dt>PLACE</dt><dd>{event.place}</dd></div></dl><span className="text-link">{event.href?.startsWith('/events#') ? '日程待确认' : '查看活动 →'}</span></div>
          </a>
        )) : <div className="empty-state"><span>NO EVENTS</span><h2>当前分类暂无活动</h2><p>请选择其他分类。</p></div>}
      </div>
    </div>
  );
}

export function FAQ({ items }: { items: Array<[string, string]> }) {
  const [active, setActive] = useState<number | null>(0);
  return <div className="faq-list">{items.map(([q, a], index) => <div className={`faq-item ${active === index ? 'open' : ''}`} key={q}><button onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index}><span>0{index + 1}</span><strong>{q}</strong><i>{active === index ? '−' : '+'}</i></button><div className="faq-answer"><p>{a}</p></div></div>)}</div>;
}

export function ShareButton({ label = '复制页面链接' }: { label?: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return <button className="share-button" onClick={copy}>{copied ? '已复制 ✓' : `${label} ↗︎`}</button>;
}

const faqJoin: Array<[string, string]> = [
  ['没有编程基础，可以加入吗？', '可以。社课覆盖基础内容，项目组接受零基础成员。'],
  ['只能参与编程项目吗？', '不限编程。设计、写作、视觉、运营与组织均可参与。'],
  ['需要投入多少时间？', '常规活动按兴趣参加；项目组按约定投入固定时间。'],
  ['现在如何加入？', '9 月 2 日前往百团大战学术类社团区 8 号展位；最新入口同步官网。'],
];

export function JoinFAQ() { return <FAQ items={faqJoin} />; }

type SignalTile = {
  mask: number;
  kind: 'source' | 'server' | 'wire';
  locked: boolean;
};

type SignalLevel = {
  id: number;
  title: string;
  subtitle: string;
  timeLimit: number;
  size: number;
  startIndex: number;
  targetIndex: number;
  board: SignalTile[];
};

type SignalPhase = 'intro' | 'playing' | 'cleared' | 'lost' | 'complete';

export function SignalRouteGame() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [level, setLevel] = useState<SignalLevel>(() => createLevel(0, () => 0) as SignalLevel);
  const [phase, setPhase] = useState<SignalPhase>('intro');
  const [time, setTime] = useState(level.timeLimit);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const powered = useMemo(() => traceSignal(level.board, level.size, level.startIndex) as Set<number>, [level]);

  useEffect(() => {
    if (phase !== 'playing') return;
    const timer = window.setTimeout(() => {
      if (time <= 1) {
        setTime(0);
        setPhase('lost');
      } else {
        setTime(time - 1);
      }
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [phase, time]);

  function loadLevel(nextIndex: number, resetScore = false) {
    const nextLevel = createLevel(nextIndex) as SignalLevel;
    setLevelIndex(nextIndex);
    setLevel(nextLevel);
    setTime(nextLevel.timeLimit);
    setMoves(0);
    if (resetScore) setScore(0);
    setPhase('playing');
  }

  function rotate(index: number) {
    if (phase !== 'playing') return;
    const nextBoard = rotateCell(level.board, index) as SignalTile[];
    if (nextBoard === level.board) return;
    const nextMoves = moves + 1;
    setMoves(nextMoves);
    setLevel({ ...level, board: nextBoard });

    if (hasSignal(nextBoard, level.size, level.startIndex, level.targetIndex)) {
      setScore((current) => current + Math.max(100, 500 + time * 20 - nextMoves * 5));
      setPhase(levelIndex === 2 ? 'complete' : 'cleared');
    }
  }

  return (
    <div className="game-machine signal-machine">
      <div className="game-statusbar"><span>INFOCO.EXE / SIGNAL ROUTE</span><span>LEVEL {String(level.id).padStart(2, '0')} / 03</span><span className={time <= 8 && phase === 'playing' ? 'danger' : ''}>T− {String(time).padStart(2, '0')}s</span><span>SCORE {String(score).padStart(4, '0')}</span></div>
      <div className="game-screen signal-screen">
        <div className="route-mission"><span>{level.title}</span><strong>{level.subtitle}</strong><span>{moves} ROTATIONS</span></div>
        <div className="signal-grid" aria-label={`信号链路第 ${level.id} 关`}>
          {level.board.map((tile, index) => {
            const row = Math.floor(index / level.size) + 1;
            const column = index % level.size + 1;
            const active = powered.has(index);
            const label = tile.kind === 'source' ? '信号源' : tile.kind === 'server' ? '目标服务器' : '线路模块';
            return (
              <button type="button" key={index} className={`${tile.kind} ${active ? 'powered' : ''}`} disabled={phase !== 'playing' || tile.locked} onClick={() => rotate(index)} aria-label={`${label}，第 ${row} 行第 ${column} 列${tile.locked ? '，固定' : '，点击顺时针旋转'}`}>
                {tile.mask & DIRECTIONS.north ? <i className="wire-arm north" /> : null}
                {tile.mask & DIRECTIONS.east ? <i className="wire-arm east" /> : null}
                {tile.mask & DIRECTIONS.south ? <i className="wire-arm south" /> : null}
                {tile.mask & DIRECTIONS.west ? <i className="wire-arm west" /> : null}
                <b>{tile.kind === 'source' ? 'TX' : tile.kind === 'server' ? 'RX' : ''}</b>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </button>
            );
          })}
        </div>
        {phase === 'intro' ? <div className="game-overlay"><span>NORMAL MODE · 三段链路</span><h2>信号路径已中断</h2><p>旋转线路，连接 TX 与 RX。用更少步骤完成三关。</p><button onClick={() => loadLevel(0, true)}>接入系统 →</button></div> : null}
        {phase === 'cleared' ? <div className="game-overlay success" aria-live="polite"><span>UPLINK STABLE</span><h2>第 {level.id} 段链路已恢复</h2><p>剩余 {time} 秒，完成 {moves} 次旋转。下一段会出现更多干扰节点。</p><button onClick={() => loadLevel(levelIndex + 1)}>进入下一段 →</button></div> : null}
        {phase === 'lost' ? <div className="game-overlay fail" aria-live="polite"><span>CONNECTION TIMEOUT</span><h2>数据包未能送达</h2><p>已完成 {moves} 次旋转。线路仍然有解，可以立即重试。</p><button onClick={() => loadLevel(levelIndex)}>重新路由 ↻</button></div> : null}
        {phase === 'complete' ? <div className="game-overlay success" aria-live="polite"><span>ALL SYSTEMS ONLINE</span><h2>校园链路已全部恢复</h2><p>最终得分 {score}。三段链路均已接通。</p><button onClick={() => loadLevel(0, true)}>再次挑战 ↻</button></div> : null}
      </div>
      <div className="game-footer"><span>INPUT: POINTER / TOUCH / KEYBOARD</span><span>NETWORK: NOT REQUIRED</span><span>PRIZE CODE: DISABLED</span></div>
    </div>
  );
}

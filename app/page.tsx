import Image from 'next/image';
import { Shell } from './components/SiteChrome';
import { events } from './content';

const tracks = [
  ['01', '编程学习', '从第一行代码开始，练习独立理解并解决问题。', '</>'],
  ['02', '创意开发', '把游戏、网站与工具，从想法做成可用的作品。', 'MAKE'],
  ['03', '协作实践', '在 Hackathon 与项目组中，练习沟通、分工与发布。', '48H'],
  ['04', '校园科技', '让技术走出屏幕，成为校园文化的一部分。', 'LIVE'],
];

const bulletinItems = [
  ['NOW RECRUITING', '面向 2026 新生与转专业同学', 'green'],
  ['BOOTH 08', '南校区 · 学术类社团区', 'blue'],
  ['QUICK QUIZ', '现场扫码，答题挑战开放中', 'orange'],
];

const activityLogs = [
  ['WORKSHOP / 01', '<CODE\\nTOGETHER>', '社课打底', '从基础概念到小型练习，把问题拆开再写出来。'],
  ['HACK NIGHT / 02', 'MAKE\\nIT\\nREAL', '共创夜', '把想法推进到可运行版本，现场找队友、拆任务。'],
  ['SHOW & TELL / 03', 'SHIP IT!', '作品分享', '展示阶段成果，也记录踩坑、复盘和下一步。'],
];

const openHouse = events.find((event) => event.slug === 'new-member-open-house')!;

export default function Home() {
  return (
    <Shell>
      <main id="top">
        <section className="hero-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> COMPUTER SCIENCE SOCIETY · 2026</div>
            <h1 className="hero-title"><span>CODE</span><span>THE <em>CULTURE.</em></span></h1>
            <p className="hero-lead">用代码，编译想法。</p>
            <p className="hero-body">从第一行代码，到第一个作品。</p>
            <div className="hero-actions"><a className="btn btn-primary" href="/join">加入 InfoCo <span>→</span></a><a className="btn btn-ghost" href="/projects">查看项目 <span>↗︎</span></a></div>
          </div>
          <div className="hero-console" aria-label="InfoCo 社团概况">
            <div className="console-top"><span>CLUB NOTICEBOARD</span><span className="console-status">● LIVE ON CAMPUS</span></div>
            <div className="console-body">
              <div className="hero-emblem" aria-hidden="true"><span /></div>
              <div className="console-copy"><span className="command">OUR MISSION</span><strong>BUILD TOGETHER.</strong><p>LEARN · MAKE · SHIP · SHARE</p></div>
              <div className="bulletin-list">
                {bulletinItems.map(([label, copy, tone]) => <div className={`bulletin-item ${tone}`} key={label}><span>{label}</span><strong>{copy}</strong></div>)}
              </div>
            </div>
            <div className="console-foot"><span>04 CORE TRACKS</span><span>05 DIVISIONS</span><span>BOOTH 08</span></div>
          </div>
          <a className="signal-card" href="#recruitment"><span className="signal-label">NEXT EVENT / 下一场活动</span><span className="signal-title">9 月 2 日百团大战</span><span className="signal-desc">09:00–20:00 · 学术类社团区 8 号展位</span><span className="signal-arrow">↓</span></a>
        </section>

        <section className="home-statement section-pad">
          <div className="section-index">01 / ABOUT THE CLUB</div>
          <div className="statement-grid"><h2>项目驱动，<br /><em>持续学习。</em></h2><div><p>社课打基础，项目练协作，发布验结果。</p><a className="text-link" href="/about">认识 InfoCo →</a></div></div>
          <div className="stats-grid"><div><strong>04</strong><span>CORE TRACKS<br />核心方向</span></div><div><strong>05</strong><span>DIVISIONS<br />协作部门</span></div><div><strong>01</strong><span>GAME ONLINE<br />在线游戏</span></div><div><strong>∞</strong><span>IDEAS WELCOME<br />创意容量</span></div></div>
        </section>

        <section className="home-event section-pad" id="recruitment">
          <div className="section-index light">02 / UPCOMING EVENT</div>
          <div className="event-feature-copy"><span className="status-pill">● SCHEDULED · 9.2 百团大战</span><h2>{openHouse.title}</h2><p>了解社团方向、在研项目与加入方式；现场开放“快问快答”。</p><div className="feature-meta"><div><span>DATE / TIME</span><strong>2026.09.02 · 09:00–20:00</strong></div><div><span>LOCATION</span><strong>西交利物浦大学南校区<br />学术类社团区 8 号展位</strong></div><div><span>ENTRY</span><strong>现场免费参与</strong></div></div><div className="venue-route" aria-label="百团大战展位路线"><span>SOUTH CAMPUS</span><i /> <span>ACADEMIC CLUBS</span><i /> <strong>BOOTH 08</strong></div><div className="event-actions"><a className="btn btn-dark" href={openHouse.href}>查看活动 <span>→</span></a><a className="map-link" href="/games/quick-quiz">进入快问快答 ↗︎</a><a className="map-link" href="/recruitment/academic-clubs-map.png" target="_blank" rel="noreferrer">查看地图 ↗︎</a></div></div>
          <figure className="event-map"><a href="/recruitment/academic-clubs-map.png" target="_blank" rel="noreferrer" aria-label="打开学术类社团完整地图"><Image src="/recruitment/academic-clubs-map.png" width={2560} height={1499} sizes="(max-width: 1080px) 100vw, 55vw" alt="学校学术类社团地图，InfoCo 计算机科学类编程社团位于 8 号展位" /></a><figcaption><span>ACADEMIC CLUBS MAP</span><strong>INFOCO · BOOTH 08</strong><small>点击查看学校宣传地图原图</small></figcaption></figure>
        </section>

        {/* <section className="section-pad project-showcase">
          <div className="section-heading"><div><span className="section-index">03 / FUTURE CONCEPTS</span><h2>概念预告</h2></div><p>方向性概念；完成后替换为真实项目与游戏。</p></div>
          <div className="project-grid home-project-grid">{conceptProjects.map((project, index) => <article className={`project-card concept-card ${project.tone}`} key={project.name}><div className="project-card-top"><span>0{index + 1}</span><span className={`status-tag status-${project.status}`}>{project.status}</span></div><div className="project-icon" aria-hidden="true">{project.icon}</div><span className="card-kicker">FUTURE CONCEPT / 方向占位</span><h3>{project.name}</h3><p>{project.summary}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="card-link">CONCEPT ONLY / 尚未发布</div></article>)}</div>
        </section> */}

        <section className="track-section section-pad">
          <div className="section-heading"><div><span className="section-index light">03 / WHAT WE DO</span><h2>学习、协作、发布。</h2></div><p>四条方向可独立参与，<br />也会在项目中交叉。</p></div>
          <div className="track-grid">{tracks.map(([index, name, copy, icon]) => <div className="track-card" key={index}><span>{index}</span><b>{icon}</b><h3>{name}</h3><p>{copy}</p></div>)}</div>
        </section>

        <section className="visual-log section-pad">
          <div className="section-heading"><div><span className="section-index">04 / ACTIVITY LOG</span><h2>课程、项目、<br /><em>现场。</em></h2></div><p>记录社课、共创夜与作品分享。</p></div>
          <div className="log-grid">
            {activityLogs.map(([label, title, tag, copy], index) => <div className={`log-frame log-${['a', 'b', 'c'][index]}`} key={label}><span>{label}</span><b>{title.split('\\n').map((line) => <span key={line}>{line}</span>)}</b><p><strong>{tag}</strong>{copy}</p><i /></div>)}
          </div>
        </section>
        <section className="closing-cta"><span className="section-index">05 / NEXT MOVE</span><h2>带上想法，<br />找到队友。</h2><div><a className="btn btn-primary" href={openHouse.href}>查看百团大战 <span>→</span></a><a className="btn btn-ghost" href="/join">加入 InfoCo <span>↗︎</span></a></div></section>
      </main>
    </Shell>
  );
}

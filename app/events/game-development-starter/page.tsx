import type { Metadata } from 'next';
import { ShareButton } from '../../components/Interactive';
import { Shell } from '../../components/SiteChrome';

export const metadata: Metadata = {
  title: '从零开始的游戏开发入门',
  description: 'InfoCo 编程入门系列：完成玩法设计、程序实现与可操作原型。',
  openGraph: {
    title: '从零开始的游戏开发入门 — InfoCo',
    description: '从玩法设计到可操作原型，用一次课程完成你的第一个小游戏。',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: '从零开始的游戏开发入门 — InfoCo',
    description: '完成玩法设计、程序实现与可操作原型。',
    images: [],
  },
};

export default function GameDevStarterPage() {
  return (
    <Shell>
      <main id="top">
        <section className="detail-hero acid">
          <div className="detail-breadcrumb"><a href="/events">活动 EVENTS</a><span>/</span><span>GAME DEV 101</span></div>
          <span className="status-pill">UPCOMING · 从零开始的游戏开发入门</span>
          <h1>Game Dev<br />Starter.</h1>
          <p>从玩法设计到程序实现，做出第一个能玩的游戏原型。</p>
          <div className="detail-actions">
            <ShareButton />
          </div>
        </section>

        <section className="detail-info section-pad">
          <aside>
            <div><span>DATE</span><strong>时间待确认</strong></div>
            <div><span>PLACE</span><strong>地点待确认</strong></div>
            <div><span>FORMAT</span><strong>WORKSHOP · HANDS-ON</strong></div>
            <div><span>LEVEL</span><strong>零基础友好</strong></div>
          </aside>
          <article>
            <span className="section-index">ABOUT THIS EVENT</span>
            <h2>课程内容</h2>
            <p>从玩法设计开始，完成程序实现与可操作原型。</p>
            <h3>你将学到</h3>
            <p>游戏开发入门路径：玩法拆解、引擎基础操作、原型验证与迭代。</p>
            <div className="detail-callout">
              <span>COURSE STATUS</span>
              <strong>时间地点待确认</strong>
              <p>确认后将在此页更新上课时间与地点。</p>
            </div>
          </article>
        </section>
      </main>
    </Shell>
  );
}
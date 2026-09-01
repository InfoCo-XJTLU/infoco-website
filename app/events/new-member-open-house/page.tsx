import type { Metadata } from 'next';
import { ShareButton } from '../../components/Interactive';
import { Shell } from '../../components/SiteChrome';

export const metadata: Metadata = {
  title: '百团大战 · 新成员开放日',
  description: 'InfoCo 2026 百团大战 · 新成员开放日：9 月 2 日 09:00–20:00，西交利物浦大学南校区学术类社团区 8 号展位。',
  openGraph: {
    title: '百团大战 · 新成员开放日 — InfoCo',
    description: '到 8 号展位认识 InfoCo，并参加现场“快问快答”挑战。',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: '百团大战 · 新成员开放日 — InfoCo',
    description: '9 月 2 日 09:00–20:00，学术类社团区 8 号展位。',
    images: [],
  },
};

export default function NewMemberOpenHousePage() {
  return (
    <Shell>
      <main id="top">
        <section className="detail-hero orange">
          <div className="detail-breadcrumb"><a href="/events">活动 EVENTS</a><span>/</span><span>OPEN HOUSE</span></div>
          <span className="status-pill">SCHEDULED · 百团大战 · 新成员开放日</span>
          <h1>New Member<br />Open House.</h1>
          <p>到 8 号展位了解 InfoCo，并参加“快问快答”挑战。</p>
          <div className="detail-actions">
            <a className="btn btn-primary" href="/games/quick-quiz">进入快问快答 →</a>
            <a className="btn btn-ghost" href="/recruitment/academic-clubs-map.png" target="_blank" rel="noreferrer">查看活动地图 ↗︎</a>
            <ShareButton />
          </div>
        </section>

        <section className="detail-info section-pad">
          <aside>
            <div><span>DATE</span><strong>2026.09.02</strong></div>
            <div><span>TIME</span><strong>09:00–20:00</strong></div>
            <div><span>PLACE</span><strong>西交利物浦大学南校区<br />学术类社团区 8 号展位</strong></div>
            <div><span>ENTRY</span><strong>现场免费参与</strong></div>
          </aside>
          <article>
            <span className="section-index">ABOUT THIS EVENT</span>
            <h2>现场内容</h2>
            <p>展示四条核心方向与在研项目；提供课程、项目与加入咨询。</p>
            <h3>现场体验</h3>
            <p>“快问快答”仅在活动当天 09:00–20:00 开放。完成挑战后，请到展位由现场社员确认并兑奖。</p>
            <div className="detail-callout">
              <span>WHERE TO FIND US</span>
              <strong>学术类社团区 · 8 号展位</strong>
              <p>点击上方“查看活动地图”，即可打开学校宣传地图原图。</p>
            </div>
          </article>
        </section>
      </main>
    </Shell>
  );
}

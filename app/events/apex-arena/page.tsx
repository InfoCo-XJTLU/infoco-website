import type { Metadata } from 'next';
import { ShareButton } from '../../components/Interactive';
import { Shell } from '../../components/SiteChrome';

export const metadata: Metadata = { title: 'Apex Arena · 活动', description: 'InfoCo 48 小时 Hackathon 往期活动。', openGraph: { title: 'Apex Arena — InfoCo', description: '在 48 小时内组队、定义问题并完成原型。', images: [] }, twitter: { card: 'summary', title: 'Apex Arena — InfoCo', description: 'InfoCo 48 小时 Hackathon 往期活动。', images: [] } };
export default function ApexArenaPage() {
  return <Shell><main id="top"><section className="detail-hero violet"><div className="detail-breadcrumb"><a href="/events">活动 EVENTS</a><span>/</span><span>APEX ARENA</span></div><span className="status-pill">ARCHIVE · 往期活动</span><h1>Apex<br />Arena.</h1><p>48 小时内完成组队、选题、原型与路演。</p><div className="detail-actions"><ShareButton /><a className="btn btn-ghost" href="/projects">查看项目成果 ↗︎</a></div></section><section className="detail-info section-pad"><aside><div><span>DATE</span><strong>往期时间待确认</strong></div><div><span>PLACE</span><strong>校内</strong></div><div><span>FORMAT</span><strong>TEAM · 48H</strong></div><div><span>PRIZE</span><strong>以活动规则为准</strong></div></aside><article><span className="section-index">ABOUT THIS EVENT</span><h2>48 小时原型挑战</h2><p>完成组队、选题、原型与路演；核心玩法须可运行、可验证。</p><h3>参与方式</h3><p>下一届报名入口、时间与规则将在本页更新。</p><div className="detail-callout"><span>EVENT STATUS</span><strong>当前不开放报名</strong><p>保留往期记录与下届预告。</p></div></article></section></main></Shell>;
}

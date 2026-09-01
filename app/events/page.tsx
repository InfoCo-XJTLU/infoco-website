import type { Metadata } from 'next';
import { EventExplorer } from '../components/Interactive';
import { PageIntro, Shell } from '../components/SiteChrome';
import { events } from '../content';

export const metadata: Metadata = { title: '活动', description: '查看 InfoCo 即将举行的活动与往期记录。' };
const eventNotes = [['NEXT STOP', '百团大战', '9 月 2 日 09:00–20:00，南校区学术类社团区。'], ['AT BOOTH 08', '现场咨询', '社课、项目、部门分工和加入方式都可以当面聊。'], ['AFTER EVENT', '活动回顾', '结束后保留时间、地点、材料与复盘记录。']];
export default function EventsPage() {
  return <Shell><main id="top"><PageIntro index="02" label="EVENTS / 活动" title="来相聚，点亮现场。" copy="课程、比赛、Hackathon 与社团会议日程。" accent="orange" /><section className="field-board event-field-board section-pad"><div><span className="section-index light">ON SITE / 现场指引</span><h2>先到现场，<br />再一起开工。</h2><p>活动页会保留可参与入口、现场信息和结束后的回顾记录。</p></div><div className="field-board-list">{eventNotes.map(([label, title, copy]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section><section className="events-section section-pad"><EventExplorer events={events} /></section><section className="events-note"><div><span>EVENT ACCESS</span><h2>报名与回顾</h2></div><p>开放报名后显示官方入口；结束后保留活动回顾。</p></section></main></Shell>;
}

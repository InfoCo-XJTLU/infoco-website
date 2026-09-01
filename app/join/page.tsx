import type { Metadata } from 'next';
import { JoinFAQ } from '../components/Interactive';
import { PageIntro, Shell } from '../components/SiteChrome';
import { events } from '../content';

export const metadata: Metadata = { title: '加入我们', description: '了解 InfoCo 招新方向、流程与 9 月 2 日百团大战现场信息。' };
const roles = [['</>', '学习编程', '基础社课与项目实践。'], ['MAKE', '做出作品', '游戏、网站、工具与研究项目。'], ['PIXEL', '设计与表达', '界面、视觉、文案与叙事。'], ['TEAM', '组织与协作', '活动策划、资源协调与外联。']];
const openHouse = events.find((event) => event.slug === 'new-member-open-house')!;

export default function JoinPage() {
  return <Shell><main id="top"><PageIntro index="05" label="JOIN US / 加入我们" title="带热爱，一起出发。" copy="零基础可加入；有项目经验可直接参与开发。" accent="orange" />
    <section className="join-status section-pad"><div><span className="status-pill">● SCHEDULED · 9.2 百团大战</span><h2>来现场，认识 InfoCo。</h2><p>{openHouse.date} · {openHouse.place}。现场提供方向、项目与加入咨询。</p><div className="join-route"><span>SOUTH CAMPUS</span><i /> <span>ACADEMIC CLUBS</span><i /> <strong>BOOTH 08</strong></div></div><a className="btn btn-dark" href={openHouse.href}>查看活动与地图 →</a></section>
    <section className="fit-section section-pad"><div className="section-heading"><div><span className="section-index">WHO FITS HERE</span><h2>参与方向</h2></div><p>编程、设计、内容、运营均可加入。</p></div><div className="role-grid">{roles.map(([icon, title, copy]) => <article key={title}><b>{icon}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="join-flow section-pad"><div className="section-heading"><div><span className="section-index light">RECRUITMENT FLOW</span><h2>加入流程</h2></div><p>现场了解方向，确认后加入项目或活动组。</p></div><div className="flow-grid">{[['01', '查看活动', '确认时间、地点与安排。'], ['02', '来到展位', '了解社课、项目与部门。'], ['03', '选择方向', '选择学习或协作方向。'], ['04', '开始共创', '加入小组，完成首项任务。']].map(([index, title, copy]) => <div key={index}><span>{index}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>
    <section className="join-faq section-pad"><div className="section-heading"><div><span className="section-index">FAQ / 常见问题</span><h2>加入须知</h2></div></div><JoinFAQ /></section>
    <section className="public-channel" id="public-channel"><span>MEET US / 现场见</span><h2>9 月 2 日，来 8 号展位。</h2><p>招新入口与联系方式以官网更新为准。</p><div className="public-channel-actions"><a className="btn btn-primary" href={openHouse.href}>查看百团大战 →</a><a className="btn btn-ghost" href="/events">查看全部活动 ↗︎</a></div></section>
  </main></Shell>;
}

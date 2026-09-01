import type { Metadata } from 'next';
import { FAQ } from '../components/Interactive';
import { PageIntro, Shell } from '../components/SiteChrome';

export const metadata: Metadata = { title: '关于我们', description: '了解 InfoCo 的使命、文化、活动方向和协作团队。' };
const values = [['01', '好奇先于答案', '先提问，再验证。'], ['02', '作品胜过口号', '先完成可运行版本，再迭代。'], ['03', '共享让人变强', '公开过程，复盘方法，共享经验。']];
const directions = [['</>', '编程学习', '基础社课与专题工作坊。'], ['MAKE', '创意开发', '程序、美术、叙事与声音协作。'], ['48H', '协作实践', '限时组队、原型开发与路演复盘。'], ['LIVE', '校园科技', '展览、挑战赛与互动装置。']];
const faqs: Array<[string, string]> = [['InfoCo 是培训机构吗？', '社团以社课、项目与成员协作为主。'], ['社团更偏技术还是游戏？', '项目涵盖游戏、网站、工具与校园活动。'], ['如何联系或了解最新动态？', '活动、项目与招新信息以官网更新为准。']];
const fieldNotes = [['OPEN HOURS', '招新现场', '9 月 2 日在 8 号展位开放咨询。'], ['WORK STYLE', '小组协作', '课程、项目、活动分别推进，也会互相支援。'], ['OUTPUT', '作品留档', '上线项目、活动回顾和成员作品会持续补充。']];
const teamRoles = [
  ['社团负责人', 'PRESIDENT', '定计划，协调各组进度'],
  ['学术与项目', 'ACADEMIC', '排社课，跟进项目'],
  ['活动运营', 'OPERATIONS', '定流程，盯现场'],
  ['品牌传播', 'CREATIVE', '做视觉，写文案，发内容'],
  ['秘书外联', 'PARTNERSHIPS', '管资料，联系校内外伙伴'],
];

export default function AboutPage() {
  return <Shell><main id="top"><PageIntro index="01" label="ABOUT THE CLUB / 关于社团" title="因好奇，走到一起。" copy="InfoCo 是西浦计算机社团，开展社课、项目与校园科技活动。" />
    <section className="manifesto section-pad"><span className="vertical-label">OUR POSITION / 社团定位</span><div><h2>共同学习，<br />共同创作。</h2><p>社课补基础，项目练协作；问题共同排查，成果公开复盘。</p></div></section>
    <section className="field-board section-pad"><div><span className="section-index light">CLUB NOTES / 社团现场</span><h2>有人提问，<br />有人接住。</h2><p>InfoCo 的日常更接近工作台：把想法摊开，找到能一起试的人。</p></div><div className="field-board-list">{fieldNotes.map(([label, title, copy]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="value-section section-pad"><div className="section-heading"><div><span className="section-index light">MISSION / VALUES</span><h2>技术为底，<br />作品为证。</h2></div><p>Build with curiosity.<br />Share with generosity.</p></div><div className="value-grid">{values.map(([index, title, copy]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="directions section-pad"><div className="section-heading"><div><span className="section-index">CORE DIRECTIONS</span><h2>四条核心方向</h2></div><p>从任何一条开始，<br />也可以在项目中跨界。</p></div><div className="direction-list">{directions.map(([icon, title, copy], index) => <article key={title}><span>0{index + 1}</span><b>{icon}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="timeline-section section-pad"><div className="section-heading"><div><span className="section-index light">TIMELINE</span><h2>社团进展</h2></div><p>社课体系、官网与项目记录。</p></div><div className="timeline"><div><span>PAST</span><h3>社课与部门分工成形</h3><p>确立四条主要方向。</p></div><div><span>NOW · 2026</span><h3>官网重新上线</h3><p>集中发布活动、项目、游戏与招新信息。</p></div><div><span>NEXT</span><h3>补齐项目与活动记录</h3><p>招募协作者，补充活动回顾与社员作品。</p></div></div></section>
    <section className="team-section section-pad"><div className="section-heading"><div><span className="section-index">CURRENT TEAM</span><h2>协作分工</h2></div><p>课程、项目、活动、传播与外联。</p></div><div className="team-grid">{teamRoles.map(([role, en, copy], index) => <div key={role}><span>DIV_0{index + 1}</span><h3>{role}</h3><p>{en}</p><b>{copy}</b></div>)}</div></section>
    <section className="faq-section section-pad"><div className="section-heading"><div><span className="section-index">FAQ / 常见问题</span><h2>课程、项目与加入</h2></div></div><FAQ items={faqs} /></section>
    <section className="closing-cta"><span className="section-index">MEET INFOCO / 9.2</span><h2>9 月 2 日，<br />8 号展位见。</h2><div><a className="btn btn-primary" href="/events/new-member-open-house">查看百团大战 <span>→</span></a><a className="btn btn-ghost" href="/join">加入 InfoCo <span>↗︎</span></a></div></section>
  </main></Shell>;
}

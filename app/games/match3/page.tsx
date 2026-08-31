import type { Metadata } from 'next';
import { ShareButton } from '../../components/Interactive';
import { Shell } from '../../components/SiteChrome';

export const metadata: Metadata = {
  title: '宝石迷阵 · GodotMatch3（InfoCo 社课项目）',
  description: 'InfoCo 社员作品：Godot 三消游戏，支持步数/限时/无尽/关卡模式。',
  openGraph: { title: '宝石迷阵 — InfoCo', description: 'Godot 三消社课项目，网页试玩版。', images: [] },
  twitter: { card: 'summary', title: '宝石迷阵 — InfoCo', description: 'Godot 三消社课项目网页试玩版。', images: [] },
};

export default function Match3GamePage() {
  return (
    <Shell>
      <main id="top" className="game-page">
        <section className="game-detail-head">
          <div>
            <a href="/games">← 返回游戏中心</a>
            <span className="status-pill">● NORMAL MODE</span>
          </div>
          <h1>Gem<br />Matrix</h1>
          <p>Godot 三消 · 宝石迷阵社课项目（网页试玩版）</p>
        </section>
        <section className="game-stage section-pad">
          <iframe
            src="/games/match3/Gems.html"
            title="宝石迷阵三消"
            style={{ width: '100%', height: 720, border: '1px solid rgba(199,255,74,.3)', background: '#000' }}
          />
          <div className="game-instructions">
            <div>
              <span>HOW TO PLAY</span>
              <h2>交换宝石，消除连线</h2>
              <ol>
                <li>点击相邻宝石交换位置，三个及以上同色连线即可消除。</li>
                <li>收集特殊宝石触发闪电、魔方与大爆炸。</li>
                <li>支持步数模式、限时模式、无尽模式与关卡模式。</li>
              </ol>
            </div>
            <div>
              <span>ABOUT</span>
              <h2>InfoCo 社课项目</h2>
              <p>Godot 4 三消教学项目（宝石迷阵），由 InfoCo 编程社 × 独游社共同产出。此为 Godot Web 导出版，加载需数秒。</p>
              <ShareButton label="分享这个游戏" />
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
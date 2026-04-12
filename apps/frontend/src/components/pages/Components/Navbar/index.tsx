import { Button, Navbar, NavbarCenter, NavbarEnd, NavbarStart } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function NavbarPage() {
  return (
    <div>
      <PageHeader
        title="Navbar"
        category="ナビゲーション"
        description="ページ上部のナビゲーションバーです。NavbarStart / NavbarCenter / NavbarEnd の 3 エリアにコンテンツを配置します。"
      />

      <Section title="基本的な使い方" row={false}>
        <div className="w-full rounded-xl border border-base-300">
          <Navbar>
            <NavbarStart>
              <button type="button" className="btn btn-ghost text-xl">
                MyApp
              </button>
            </NavbarStart>
            <NavbarCenter className="hidden md:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <button type="button">ホーム</button>
                </li>
                <li>
                  <button type="button">機能</button>
                </li>
                <li>
                  <button type="button">料金</button>
                </li>
              </ul>
            </NavbarCenter>
            <NavbarEnd>
              <Button color="primary" size="sm">
                ログイン
              </Button>
            </NavbarEnd>
          </Navbar>
        </div>
      </Section>

      <Section title="ハンバーガーメニュー付き" row={false}>
        <div className="w-full rounded-xl border border-base-300">
          <Navbar>
            <NavbarStart>
              <Button color="ghost" square size="sm">
                ☰
              </Button>
            </NavbarStart>
            <NavbarCenter>
              <button type="button" className="btn btn-ghost text-lg font-bold">
                Brand
              </button>
            </NavbarCenter>
            <NavbarEnd className="gap-2">
              <Button color="ghost" circle size="sm">
                🔔
              </Button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                U
              </div>
            </NavbarEnd>
          </Navbar>
        </div>
      </Section>

      <Section title="検索バー付き" row={false}>
        <div className="w-full rounded-xl border border-base-300">
          <Navbar>
            <NavbarStart>
              <button type="button" className="btn btn-ghost font-bold">
                Logo
              </button>
            </NavbarStart>
            <NavbarCenter>
              <input
                type="text"
                placeholder="検索..."
                className="input input-bordered input-sm w-64"
              />
            </NavbarCenter>
            <NavbarEnd className="gap-2">
              <Button color="ghost" size="sm">
                ログイン
              </Button>
              <Button color="primary" size="sm">
                登録
              </Button>
            </NavbarEnd>
          </Navbar>
        </div>
      </Section>
    </div>
  );
}

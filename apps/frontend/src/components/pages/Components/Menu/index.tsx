import { Menu, MenuItem, MenuTitle } from "@packages/ui";
import { PageHeader } from "../_components/PageHeader";
import { Section } from "../_components/Section";

export default function MenuPage() {
  return (
    <div>
      <PageHeader
        title="Menu"
        category="ナビゲーション"
        description="縦・横のナビゲーションメニューです。MenuItem の children にリンクや要素を渡します。active クラスは子要素（a タグ等）に直接付けます。"
      />

      <Section title="縦メニュー（基本）">
        <div className="w-48 rounded-xl border border-base-300 bg-base-100">
          <Menu>
            <MenuTitle>メニュー</MenuTitle>
            <MenuItem>
              <button type="button" className="active">
                ダッシュボード
              </button>
            </MenuItem>
            <MenuItem>
              <button type="button">プロジェクト</button>
            </MenuItem>
            <MenuItem>
              <button type="button">タスク</button>
            </MenuItem>
            <MenuItem disabled>
              <button type="button">設定（無効）</button>
            </MenuItem>
          </Menu>
        </div>
      </Section>

      <Section title="横メニュー" description="horizontal prop で横並びになります。">
        <div className="rounded-xl border border-base-300 bg-base-100 p-2">
          <Menu horizontal>
            <MenuItem>
              <button type="button" className="active">
                ホーム
              </button>
            </MenuItem>
            <MenuItem>
              <button type="button">機能</button>
            </MenuItem>
            <MenuItem>
              <button type="button">料金</button>
            </MenuItem>
            <MenuItem>
              <button type="button">お問い合わせ</button>
            </MenuItem>
          </Menu>
        </div>
      </Section>

      <Section title="サイズ">
        <div className="w-40 rounded-xl border border-base-300 bg-base-100">
          <Menu menuSize="xs">
            <MenuItem>
              <button type="button">XSmall</button>
            </MenuItem>
            <MenuItem>
              <button type="button">Menu Item</button>
            </MenuItem>
          </Menu>
        </div>
        <div className="w-40 rounded-xl border border-base-300 bg-base-100">
          <Menu menuSize="sm">
            <MenuItem>
              <button type="button">Small</button>
            </MenuItem>
            <MenuItem>
              <button type="button">Menu Item</button>
            </MenuItem>
          </Menu>
        </div>
        <div className="w-40 rounded-xl border border-base-300 bg-base-100">
          <Menu menuSize="lg">
            <MenuItem>
              <button type="button">Large</button>
            </MenuItem>
            <MenuItem>
              <button type="button">Menu Item</button>
            </MenuItem>
          </Menu>
        </div>
      </Section>
    </div>
  );
}

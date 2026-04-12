import { Button, Dropdown, DropdownItem, DropdownMenu } from "@packages/ui";
import type { FC } from "react";
import { ComponentPageHeader } from "~/components/common/ComponentPageHeader";
import { ComponentSection } from "~/components/common/ComponentSection";
import { CommonLayout } from "~/components/layouts/CommonLayout";

export const DropdownPage: FC = () => (
  <CommonLayout>
    <div>
      <ComponentPageHeader
        title="Dropdown"
        category="アクション"
        description="トリガー要素をクリックすると展開されるドロップダウンメニューです。position prop で展開方向を制御できます。"
      />

      <ComponentSection
        title="基本的な使い方"
        description="Dropdown > trigger + DropdownMenu > DropdownItem の構造で使います。"
      >
        <Dropdown>
          <Button color="primary" tabIndex={0}>
            メニューを開く ▾
          </Button>
          <DropdownMenu tabIndex={0} className="w-40">
            <DropdownItem>
              <button type="button">プロフィール</button>
            </DropdownItem>
            <DropdownItem>
              <button type="button">設定</button>
            </DropdownItem>
            <DropdownItem>
              <button type="button">ログアウト</button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ComponentSection>

      <ComponentSection
        title="展開方向"
        description="position prop で top / bottom / left / right および -end バリアントを指定できます。"
      >
        <Dropdown position="bottom">
          <Button tabIndex={0}>Bottom ▾</Button>
          <DropdownMenu tabIndex={0} className="w-36">
            <DropdownItem>
              <button type="button">Item 1</button>
            </DropdownItem>
            <DropdownItem>
              <button type="button">Item 2</button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown position="top">
          <Button tabIndex={0}>Top ▴</Button>
          <DropdownMenu tabIndex={0} className="w-36">
            <DropdownItem>
              <button type="button">Item 1</button>
            </DropdownItem>
            <DropdownItem>
              <button type="button">Item 2</button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown position="right">
          <Button tabIndex={0}>Right ▸</Button>
          <DropdownMenu tabIndex={0} className="w-36">
            <DropdownItem>
              <button type="button">Item 1</button>
            </DropdownItem>
            <DropdownItem>
              <button type="button">Item 2</button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ComponentSection>

      <ComponentSection
        title="ホバーで開く"
        description="hover prop を付けるとマウスオーバーで展開します。"
      >
        <Dropdown hover>
          <Button color="secondary" tabIndex={0}>
            Hover me ▾
          </Button>
          <DropdownMenu tabIndex={0} className="w-40">
            <DropdownItem>
              <button type="button">Item 1</button>
            </DropdownItem>
            <DropdownItem>
              <button type="button">Item 2</button>
            </DropdownItem>
            <DropdownItem disabled>
              <button type="button">Disabled</button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ComponentSection>
    </div>
  </CommonLayout>
);

export default DropdownPage;

import { Badge, Table } from "@packages/ui";
import type { FC } from "react";
import { PageHeader } from "~/components/common/PageHeader";
import { Section } from "~/components/common/Section";
import { CommonLayout } from "~/components/layouts/CommonLayout";

const sampleData = [
  { id: 1, name: "山田 太郎", role: "開発者", status: "active" },
  { id: 2, name: "鈴木 花子", role: "デザイナー", status: "active" },
  { id: 3, name: "佐藤 次郎", role: "マネージャー", status: "inactive" },
  { id: 4, name: "田中 美穂", role: "開発者", status: "active" },
];

export const TablePage: FC = () => (
  <CommonLayout>
    <div>
      <PageHeader
        title="Table"
        category="データ表示"
        description="データテーブルです。zebra / pinRows / pinCols / tableSize Props でスタイルを変更できます。標準の thead / tbody / tr / th / td 要素と組み合わせて使います。"
      />

      <Section title="基本的な使い方" row={false}>
        <div className="overflow-x-auto">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>名前</th>
                <th>役割</th>
                <th>ステータス</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.role}</td>
                  <td>
                    <Badge color={row.status === "active" ? "success" : "ghost"} size="sm">
                      {row.status === "active" ? "有効" : "無効"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Section>

      <Section
        title="ゼブラストライプ"
        description="zebra prop で交互に背景色を付けます。"
        row={false}
      >
        <div className="overflow-x-auto">
          <Table zebra>
            <thead>
              <tr>
                <th>名前</th>
                <th>役割</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.role}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Section>

      <Section
        title="サイズ"
        description="tableSize prop で xs / sm / md / lg を指定します。"
        row={false}
      >
        <div className="overflow-x-auto">
          <Table tableSize="sm">
            <thead>
              <tr>
                <th>名前</th>
                <th>役割</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.role}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Section>
    </div>
  </CommonLayout>
);

export default TablePage;

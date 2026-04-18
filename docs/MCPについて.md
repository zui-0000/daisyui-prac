# MCPについて

## MCPとは

MCP（Model Context Protocol）は、AIモデルと外部サービスを連携させるためのAPIです。
daisyUI の MCP を設定することで、Claude Code が daisyUI の最新ドキュメント・仕様を参照しながらコードを生成できるようになります。

参考: https://daisyui.com/docs/editor/claudecode/

## 設定済みの MCP サーバー

### daisyUI GitMCP（無料）

daisyUI の GitHub リポジトリから直接仕様を参照するサーバー。

```sh
claude mcp add --transport http daisyui https://gitmcp.io/saadeghi/daisyui
```

- セットアップ後は**自動的に動作**する（プロンプトへの追記不要）

### Context7（無料）

最新ドキュメントをリアルタイムに参照してコードを生成するサーバー。

```sh
claude mcp add --transport http context7 https://mcp.context7.com/mcp
```

- 使用時はプロンプト末尾に `use context7` と追記する

### daisyUI Blueprint（有料ライセンス）

ライセンス購入後に利用できる公式 MCP サーバー。

- **Figma のデザイン画像から daisyUI コードへの変換**が可能
- デザインカンプを渡すだけで、対応するコンポーネントコードを生成できる
- 使用時はプロンプトに `use Blueprint MCP` と追記する

## 設定の保存先

`claude mcp add` コマンドを実行すると、**ホームディレクトリの `~/.claude.json`** に設定が書き込まれます。

```json
"/Users/zui/Project/practice/daisyui-prac": {
    "mcpServers": {
        "daisyui": { "type": "http", "url": "https://gitmcp.io/saadeghi/daisyui" },
        "context7": { "type": "http", "url": "https://mcp.context7.com/mcp" }
    }
}
```

| 項目 | 内容 |
|---|---|
| 設定ファイルの場所 | `~/.claude.json`（リポジトリ外） |
| スコープ | このプロジェクト専用（他のプロジェクトには影響しない） |
| リポジトリへのコミット | 不要・不可（git には含まれない） |
| グローバル設定にしたい場合 | コマンドに `--scope user` オプションを追加する |

## メリット

- Claude の学習データにない **daisyUI v5 の最新仕様**を参照できる
- コンポーネント名・クラス名の誤りが減る
- テーマ生成やコンポーネント生成の精度が向上する

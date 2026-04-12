# @packages/ui

Tailwind CSS + DaisyUI をベースにした共有 UI コンポーネントライブラリ。

## 使い方

### import

```typescript
import { Button, Card, Input, Modal } from "@packages/ui";
```

### スタイルユーティリティ

```typescript
import { cn } from "@packages/ui";

// Tailwind クラスを条件付きで結合する
const className = cn("base-class", isActive && "active-class");
```

### カスタムテーマ・スタイル変数

```typescript
import { colors, zIndex } from "@packages/ui/styles";
```

---

## ディレクトリ構成

```
src/
├── components/
│   ├── primitives/   # DaisyUI の各コンポーネントを型付きでラップした基礎部品
│   └── composite/    # primitives を組み合わせた複合コンポーネント
├── lib/
│   └── utils.ts      # cn() ユーティリティ（clsx ラッパー）
└── styles/
    ├── colors.ts     # カスタムカラー定義
    ├── z-index.ts    # z-index レイヤー定義
    └── index.ts
```

---

## コンポーネント一覧

### primitives

DaisyUI のクラスを Props として扱えるようにした薄いラッパーコンポーネント群。
`color`, `size` などの Props で DaisyUI の modifier クラスを指定できる。

| カテゴリ | コンポーネント |
|---|---|
| アクション | `Button`, `Dropdown`, `DropdownMenu`, `DropdownItem`, `Modal`, `ModalBox`, `ModalAction` |
| データ入力 | `Input`, `Textarea`, `Select`, `Checkbox`, `Toggle`, `Radio`, `Range`, `FileInput`, `FormField` |
| データ表示 | `Badge`, `Card`, `CardBody`, `CardTitle`, `CardActions`, `Avatar`, `Stats`, `Stat`, `StatTitle`, `StatValue`, `StatDesc`, `StatFigure`, `StatActions`, `Table`, `Kbd` |
| フィードバック | `Alert`, `Loading`, `Progress`, `Skeleton`, `Tooltip` |
| ナビゲーション | `Tabs`, `Tab`, `Navbar`, `NavbarStart`, `NavbarCenter`, `NavbarEnd`, `Breadcrumbs`, `BreadcrumbItem`, `Menu`, `MenuItem`, `MenuTitle`, `Steps`, `Step` |
| レイアウト | `Divider`, `Join`, `JoinItem`, `Collapse`, `CollapseTitle`, `CollapseContent` |

### composite

primitives を組み合わせて作った、アプリケーション向けの複合コンポーネント。

| コンポーネント | 説明 |
|---|---|
| `PageLoadingSpinner` | 全画面ローディング表示 |
| `ErrorDialog` | エラーメッセージ用モーダルダイアログ |
| `AnimatedCircleCheck` | 完了時のアニメーション付きチェックマーク（カスタム SVG） |

---

## 命名規則について

### primitives / composite という分類

このパッケージでは Atomic Design の `atoms` / `molecules` / `organisms` を採用せず、以下のシンプルな 2 層構造にしている。

- **primitives**: DaisyUI の 1 コンポーネントに対応する、それ以上分解できない基礎部品。Radix UI などのコンポーネントライブラリでも使われる命名。
- **composite**: 複数の primitives を組み合わせて作られた、特定のユースケース向けコンポーネント。

Atomic Design を採用しなかった理由は、`atoms` / `commons` のように語彙体系の混在が起きやすく、「これは atom か molecule か」という分類コストが高いため。`primitives` と `composite` は役割の違いが直感的に伝わりやすい。

### なぜ size でなく inputSize / textareaSize のような命名か

HTML 標準の `<input>` には `size` 属性が既に存在するため、props の名前が衝突しないよう `inputSize` のようにコンポーネント名をプレフィックスにしている。同様に `selectSize`, `textareaSize`, `checkboxSize` なども同じ理由による。

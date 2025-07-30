# Next.js × microCMS ブログサイト
> You can find the English version of this README below.
> この README の英語版は下の方にあります。

## プロジェクト概要

このプロジェクトは、**Next.js（App Router）** と **microCMS** を使って構築したブログサイトです。  
ブログ記事一覧ページと記事詳細ページを実装し、**SSG（静的サイト生成）＋ ISR（増分静的再生成）** によって高速かつ最新のコンテンツ表示を実現しています。

## 使用技術

- **フレームワーク：** Next.js(App Router)
- **ヘッドレスCMS：** microCMS
- **言語：** Typescript
- **スタイル：** Tailwind CSS / CSS

## 主な機能

- ブログ記事の一覧表示（トップページ）
- ブログ記事の詳細ページ（動的ルーティング対応）
- microCMS からのコンテンツ取得
- SSG + ISR によるパフォーマンス最適化
- レスポンシブ対応デザイン

## 学んだこと・工夫したこと
- ISRを活用し、microCMSで記事を更新してもサイトが自動更新されるようにした。
- App Routerを採用し、最新のNext.js公正に対応した。
- ファイル構成をシンプルかつ再利用性を意識して設計した。
- microCMSのAPI設計・データ構造の考え方について学んだ。
- Next.js 15.1.6 以降の App Routerにおいて、動的ルートの params が非同期仕様になったことを学んだ。

## 追加したい機能
- タグを追加してタグの検索機能の実装。
- ~~カテゴリ別の絞り込み表示~~ (2025-07-30 実装)
- 英語対応にする。
- 投稿一覧を数ページに分ける。

## セットアップ方法
```bash
# 依存パッケージのインストール
npm install

# .env.localを作成
MICROCMS_API_KEY=your-microcms-api-key
MICROCMS_SERVICE_DOMAIN=your-microcms-service-domain

# 開発サーバー起動
npm run dev
```

## 公開サイト
こちらからデプロイ後のサイトをご覧いただけます：
[https://my-microcms-blog-beta.vercel.app/](https://my-microcms-blog-beta.vercel.app/)

## デザイン

### 一覧ページ
![一覧ページ](/public/screenshot01.png)

### 詳細ページ
![詳細ページ](/public/screenshot02.png)

## 連絡先
以下から気軽にご連絡ください：
- E-mail: [whoisyuma.0913@gmail.com](whoisyuma.0913@gmail.com)

## 備考
このアプリは学習用として作成しました。

# Next.js × microCMS Blog Site

## Project Overview

This project is a **blog site** built using **Next.js (App Router)** and **microCMS**.  
It includes a blog listing page and dynamic blog detail pages, and leverages **SSG (Static Site Generation)** with **ISR (Incremental Static Regeneration)** to deliver fast and up-to-date content.

## Technologies Used

- **Framework:** Next.js (App Router)
- **Headless CMS:** microCMS
- **Language:** TypeScript
- **Styling:** Tailwind CSS / CSS

## Main Features

- Blog post listing on the homepage
- Dynamic blog detail pages
- Content fetched from microCMS
- Optimized performance using SSG + ISR
- Responsive design

## Highlights / Learnigns

- Utilized ISR to enable automatic updates when content is changed on microCMS.
- Adopted the App Router to align with the latest Next.js standards.
- Designed a simple and reusable file structure.
- Learned about API design and data modeling with microCMS.
- Discovered that, from Next.js 15.1.6 onward, `params` for dynamic routes in the App Router are now asynchronous.

## Planned Features

- Tag functionality and tag-based filtering
- Filtering by categories
- Multilingual support (English)
- Pagination for the blog list

## Setup Instructions

```bash
# Install dependencies
npm install

# Create a .env.local file
MICROCMS_API_KEY=your-microcms-api-key
MICROCMS_SERVICE_DOMAIN=your-microcms-service-domain

# Start the development server
npm run dev
```

## Live Site

You can view the deployed site here:  
[https://my-microcms-blog-beta.vercel.app/](https://my-microcms-blog-beta.vercel.app/)

## Design Previews

### Blog List Page  
![List Page](/public/screenshot01.png)

### Blog Detail Page  
![Detail Page](/public/screenshot02.png)

## Contact

Feel free to reach out:  
- E-mail: [whoisyuma.0913@gmail.com](mailto:whoisyuma.0913@gmail.com)

## Notes

This app was built for learning purposes.

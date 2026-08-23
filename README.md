# Personal Website

这是陆徐洲的个人网站，使用 Next.js App Router 与 Vinext 构建。网站定位为“能力证据中心”，统一承载代表性项目、脱敏企业案例、研究写作、图书与个人产品进展。

## 内容边界

- DSHOffice 等个人项目按真实成熟度展示；
- 企业项目仅使用重新整理的脱敏表述；
- 不公开公司源码、客户数据、内部配置和未发布截图；
- 《Harness Engineering 实战：构建可靠的生产级 AI Agent》为已出版图书；
- 《深入理解 DeepHarness》仍在研究与写作中，不标注为已出版。

## 视觉方向

暖色编辑出版风，以森林绿、钴蓝和芥末黄作为功能性色彩。项目采用证据档案与状态标记呈现，不使用通用科技素材图。

## 本地运行

```powershell
npm ci
npm run dev
```

## 构建

```powershell
npm run build
```

构建前会从个人 Content 内容库读取六篇代表文章正式稿，并同步对应配图。默认内容库位置为 `D:\Workspace\Personal\Content`；其他环境可通过 `PERSONAL_CONTENT_ROOT` 指定。

文章正文会生成一份网站发布快照到 `src/generated/articleContent.ts`。托管环境无法访问个人 Content 内容库时会直接使用该快照；在 Obsidian 中更新已发布文章后，运行 `npm run sync:content` 即可同步网站版本。

生产构建输出在 `dist`，并由 OpenAI Sites 托管。`node_modules`、`.next`、`.vinext`、`out` 和 `dist` 均为可重建目录，不应作为源文件备份。

## GitHub Pages

站点同时发布到 `https://luxuzhou.github.io/`。源码保存在 `main` 分支，经过静态构建和站内链接检查的发布文件保存在 `gh-pages` 分支。

发布时将新的 `out` 内容覆盖到 `gh-pages`，并至少保留上一版 `_next/static` 指纹资源。GitHub Pages 的 HTML 可能在 CDN 中缓存数分钟；提前删除旧 CSS 或脚本会导致缓存中的旧 HTML 暂时失去样式。

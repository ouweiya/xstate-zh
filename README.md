# 链接

- [XState 中文文档](https://ouweiya.github.io/xstate-zh)
- [XState 官方文档](https://stately.ai)

# 欢迎来到 Stately 文档

这个仓库包含了 Stately 的登陆页面，包括我们的博客和 Stately Studio 和 XState 的文档。

该网站使用 [Docusaurus 2](https://docusaurus.io/) 构建。

我们欢迎任何对文档和代码库的贡献。

- ✨ [贡献指南](https://github.com/statelyai/xstate/blob/main/CONTRIBUTING.md)
- 🖊️ [Stately 文档编写指南](https://github.com/statelyai/docs/wiki)
- 🙋 [行为准则](https://github.com/statelyai/docs/blob/main/CODE_OF_CONDUCT.md)

## 安装

```
$ yarn
```

## 本地开发

```
$ yarn dev
```

此命令启动本地开发服务器并打开浏览器窗口。大多数更改会实时反映，无需重新启动服务器。

### 关于首页的说明

目前我们从静态文件提供根登陆页面。

- 在服务器端渲染 (SSR) 期间，我们使用 [`/static/index.html`](./static/index.html)
- 在客户端渲染 (CSR) 期间，我们使用 [`/static/landing-page/index.html`](./static/landing-page/index.html)

## 构建

```
$ yarn build
```

此命令将静态内容生成到 `build` 目录中。

## 部署

文档在合并到 `main` 分支时会被构建和部署。


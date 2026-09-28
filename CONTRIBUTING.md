# 参与指南

感谢来帮忙！这是官方 Sub2API（v0.2.8）页面的前端增强脚本，只包含注入用的 `enhance.js` / `enhance.css`。

## 快速开始

```bash
git clone git@github.com:Absorblisher/sub2api-enhance.git
cd sub2api-enhance
git checkout dev      # 在 dev 分支上协作
```

- 线上部署：120 服务器 `/opt/sub2api-enhance`，注入到 https://yuanyuancyan.site:8444
- 本仓库**不含**官方源码、`.env`、密钥、数据库等敏感内容，请不要提交这些文件。

## 协作流程

1. 从 `dev` 切出自己的功能分支：`git checkout -b feat/xxx`
2. 改完提交，push 上来。
3. 对 `dev`（或 `main`）发 Pull Request，说明改了什么、怎么验证的。

## 待办 / 可参与

- `PRICES` 价格表目前硬编码在 `enhance.js`，可改为从后端接口动态获取。
- `PACKAGES` 套餐与推广文案抽离成独立配置。
- 代码模块化、加构建/压缩流程、样式整理。

## 约定

- 不提交密钥、Token、`.env`。
- 提交信息尽量写清楚做了什么。

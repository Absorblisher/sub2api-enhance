# sub2api-enhance

Sub2API 前端增强脚本（注入到官方 Sub2API 页面）。

- `enhance.js`：注入自定义"价格 / 套餐 / 推广"页面，内置模型价格表（OpenAI/Codex、Claude）与充值套餐数据。
- `enhance.css`：上述增强 UI 的样式（支持浅色/深色主题、响应式）。

## 部署背景

- 服务器：x，官方 Sub2API v0.2.8（Docker Compose，目录 `/opt/sub2api`）。
- 访问地址：https://yuanyuancyan.site:8444
- 本仓库只包含**自定义增强代码**，不含官方源码、密钥或 `.env` 等敏感配置。

## 待办 / 可参与

- 价格数据 `PRICES` 目前为硬编码，可改为从后端/接口动态获取。
- 套餐 `PACKAGES` 与推广文案抽离为配置。
- 代码整理、模块化、构建流程。

欢迎在 `dev` 分支上协作。

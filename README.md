# 每日晨读新闻 🚀

**每天早上7点自动推送精选新闻 + 安卓桌面小组件一键查看**

一个轻量、开源、可自部署的「每日晨读」解决方案，同时支持：
- 微信推送（Server酱 / PushPlus / WxPusher）
- 安卓小组件（Widget）实时显示今日头条
- 一键部署到服务器 / Vercel / Railway / 阿里云函数

---

## ✨ 核心功能

| 功能 | 说明 | 完成状态 |
|------|------|----------|
| 每日定时抓取新闻 | 支持多源RSS + 新闻API（腾讯、网易、BBC、Reuters等） | ✅ |
| AI生成晨读文案 | 使用本地/调用通义千问/DeepSeek/Groq 自动润色成「适合早读」的口吻 | ✅ |
| 微信推送 | Server酱、PushPlus、WxPusher、微信公众号模板消息均支持 | ✅ |
| 安卓小组件 | 4×1 / 4×2 / 2×2 三种尺寸，显示标题+摘要+来源，点击跳转原文 | ✅ |
| 一键部署 | Docker / GitHub Actions / 云函数全支持 | ✅ |
| 完全开源免费 | MIT 协议，可商用、可二开 | ✅ |

---

## 🛠 技术栈

- **后端**：Python 3.11 + FastAPI
- **定时任务**：APScheduler（本地）或 GitHub Actions（免费云端）
- **新闻抓取**：feedparser + httpx + BeautifulSoup
- **AI润色**（可选）：OpenAI / 通义千问 / DeepSeek / Groq / Ollama 本地模型
- **微信推送**：Server酱 / PushPlus / WxPusher
- **安卓小组件**：Kotlin + Jetpack Compose + WorkManager + Retrofit
- **部署**：Docker / Railway / Vercel / 阿里云函数 / 腾讯云函数

---

## 📁 项目结构（推荐）

# Google Analytics 配置说明

## 已完成的设置

1. ✅ 已安装 gtag 依赖包
2. ✅ 已创建 .env.local 环境变量文件
3. ✅ 已在 layout.tsx 中添加了 Google Analytics 脚本（需要手动修复）

## 如何配置

### 1. 获取 Google Analytics 测量 ID
- 登录 Google Analytics
- 创建新的属性或使用现有属性
- 复制测量 ID（格式：G-XXXXXXXXXX）

### 2. 配置环境变量
将 .env.local 文件中的 GA_MEASUREMENT_ID 替换为您的实际测量 ID：
`
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
`

### 3. 手动修复 layout.tsx 文件
由于 PowerShell 的模板字符串解析问题，需要手动修复 layout.tsx 文件中的 Google Analytics 代码。

请将以下代码替换 layout.tsx 文件中的 Google Analytics 部分：

`	sx
{gaMeasurementId && (
  <>
    <Script
      src={\https://www.googletagmanager.com/gtag/js?id=\\}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '');}
    </Script>
  </>
)}
`

### 4. 重启开发服务器
`ash
npm run dev
`

## 验证安装
1. 打开浏览器开发者工具
2. 查看 Network 标签页
3. 刷新页面
4. 应该能看到对 googletagmanager.com 的请求

## 文件修改总结
- ✅ package.json: 添加了 gtag 依赖
- ✅ .env.local: 环境变量配置文件
- ⚠️ src/app/layout.tsx: 需要手动修复模板字符串
- ✅ GOOGLE_ANALYTICS_SETUP.md: 配置说明文档

## 下一步
请按照上述说明手动修复 layout.tsx 文件中的模板字符串，然后配置您的 Google Analytics 测量 ID。

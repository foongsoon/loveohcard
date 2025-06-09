import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';

export const metadata: Metadata = {
  title: '心灵捕手 - 专业心理辅导与身心灵成长',
  description: '专业心理辅导 · 身心灵平衡 · 家庭和谐 · 个人成长. 心灵捕手致力于提供专业的心理辅导与身心灵成长服务，帮助个人与家庭实现内在和谐与幸福生活。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="https://pub-dac368110280423d8e92133d09875ab0.r2.dev/loveohcard_Icon.png" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

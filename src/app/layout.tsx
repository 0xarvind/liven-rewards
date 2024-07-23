import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Poppins } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import { themeConfig } from "./theme";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Liven Rewards",
  description: "Create your own rewards program",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AntdRegistry>
          <ConfigProvider theme={themeConfig}>
            {children}
          </ConfigProvider>
        </AntdRegistry>

      </body>
    </html>
  );
}

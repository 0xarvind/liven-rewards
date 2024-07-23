'use client';
import { theme, ThemeConfig } from "antd";

export const themeConfig: ThemeConfig = {
  hashed: false,
  algorithm: theme.defaultAlgorithm,
  "components": {
    "Layout": {
      "headerBg": "rgb(255, 255, 255)",
      "headerPadding": "0px",
      "headerHeight": "fit-content",
      "footerBg": "rgb(255, 255, 255)",
      "footerPadding": "0px",
    }
  }
}
"use client";
import { Layout } from "antd";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Rewards from "@/components/rewards";
import styles from "./page.module.css";

const { Header: HeaderLayout, Content, Footer: FooterLayout } = Layout;

export default function Home() {
  return (
    <div className={styles.main}>
      <HeaderLayout >
        <Header />
      </HeaderLayout>
        <Content>
          <Rewards />
        </Content>
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </div>
  );
}

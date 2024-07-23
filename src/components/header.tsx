'use client';
import { Button } from "antd";
import Image from "next/image";

import LivenLogo from "@/assets/liven-logo.svg";
import { APP_URL, SITE_URL } from "@/utils/constants";

import styles from "@/app/page.module.css";
import Link from "next/link";

const Header = () => {

  const openAppUrl = () => window.open(APP_URL, "_blank", "noreferrer");

  return (
    <div className={styles.header}>
      <Link href={SITE_URL} target="_blank" rel="noreferrer">
        <Image src={LivenLogo} alt="Liven Logo" />
      </Link>
      <Button onClick={openAppUrl} className={styles.getApp}>Get app</Button>
    </div>

  );
}

export default Header;
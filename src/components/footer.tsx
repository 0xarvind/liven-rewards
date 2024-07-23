import Image from "next/image";

import LivenLogo from "@/assets/liven-logo.svg"
import { SITE_URL } from "@/utils/constants";

import styles from "@/app/page.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href={SITE_URL} target="_blank" rel="noreferrer">
        <Image src={LivenLogo} alt="Liven Logo" />
      </a>
    </div>
  );
}

export default Footer;
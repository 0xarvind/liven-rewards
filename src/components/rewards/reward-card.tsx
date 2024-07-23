import Image from "next/image";

import Logo from "@/assets/logo.svg";
import Bonus from "@/assets/bonus.svg";
import { SITE_URL } from "@/utils/constants";

import styles from "./reward.module.css";

const RewardCard = ({ reward }: { reward: any }) => {
  return (
    <>
      {
        reward.isExclusive &&
        <div className={styles.appExclusive}>
          <Image src={Logo} alt="reward" width={24} height={24} />
          <p>App exclusive</p>
        </div>
      }
      <div className={styles.rewardCard} onClick={() => window.open(SITE_URL, "_blank", "noreferrer")}>
        <div className={styles.priceInfo}>
          <p>Buy</p>
          <h2>${reward.price}</h2>
        </div>
        <Image src={Bonus} alt="reward" width={30} height={30} />
        <div className={styles.bonusInfo}>
          <p>Bonus</p>
          <h2>${reward.bonus}</h2>
        </div>
      </div>
    </>
  )
}

export default RewardCard;
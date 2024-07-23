'use client';
import { useState } from "react";
import { Space, Switch } from "antd";
import Image from "next/image";

import { rewardDetails } from "@/utils/constants";
import Gift from "@/assets/gift.svg";
import RewardCard from "./reward-card";

import styles from "./reward.module.css";

const Rewards = () => {

  const [rewards, setRewards] = useState(rewardDetails);

  const toggleGiftPurchase = (checked: boolean) => {
    const filteredRewards = checked ? rewardDetails.filter(({ isExclusive }) => !isExclusive) : rewardDetails;
    setRewards(filteredRewards)
  };

  return (
    <div className={styles.rewards}>
      <div className={styles.info}>
        <h2>San Dollars</h2>
        <p>Pay now, eat more later! Earn a bonus when you buy food upfront. Tap now to purchase</p>
      </div>

      <div className={styles.puchaseGift}>
        <Image src={Gift} alt="gift" width={14} height={14} />
        <p>Purchase as gift</p>
        <Switch onChange={toggleGiftPurchase} />
      </div>

      <Space direction="vertical" size="middle" className={styles.rewardCards}>
        {
          rewards.map((reward, index) => {
            return (
              <RewardCard key={index} reward={reward} />
            )
          })
        }
      </Space>
    </div>
  );
};

export default Rewards;
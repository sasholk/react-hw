import React from "react";

import { StatisticsItem } from "./StatisticsItem";

import dataList from "../../assets/data.json";

import styles from "./Statistics.module.css";

export const Statistics = () => {
    return (
        <>
            <section className={styles.statistics}>
                <h2 className={styles.title}>Upload stats</h2>

                <ul className={styles.statList}>
                    {dataList.map(({ id, label, percentage }) => (
                        <StatisticsItem
                            key={id}
                            label={label}
                            percentage={percentage}
                        />
                    ))}
                </ul>
            </section>
        </>
    );
};
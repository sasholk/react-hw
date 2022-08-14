import React from "react";

import { StatisticsItem } from "./StatisticsItem";

import dataList from "../../assets/data.json";

import "./Statistics.css";

export const Statistics = () => {
    return (
        <>
            <section className="statistics">
                <h2 className="title">Upload stats</h2>

                <ul className="stat-list">
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
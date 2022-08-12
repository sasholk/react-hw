import React from "react";

import { StatisticsList } from "./StatisticsList";

import data from "../../assets/data.json";

const { stats } = data;

export const Statistics = () => {
    return (
        <>
            <StatisticsList
                title="Upload stats"
                stats={stats}
            />
        </>
    );
};
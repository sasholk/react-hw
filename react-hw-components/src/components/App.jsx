import React from "react";
import "./App.css";
import { Profile } from "./Profile/Profile";
import { StatisticsList } from "./Statistics/StatisticsList";

export const App = () => {
    return (
        <div className="container">
            <Profile />
            <StatisticsList />
        </div>
    );
};

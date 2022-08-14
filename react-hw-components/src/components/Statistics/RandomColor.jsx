import React, { Component } from "react";

export class SubDom extends Component {
    rendomColor() {
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);
        this.color = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.8)';
        return this.color;
    }

    render() {
        return (
            <view style={{ backgroundColor: this.rendomColor() }}></view>
        );
    }
};
import * as React from "react";
import TeamSection from "../TeamSection/TeamSection";
const WOW = require("wowjs");

export default class About extends React.Component<any, any> {
    public componentDidMount() {
        window.scrollTo(0, 0);
        const wow = new WOW.WOW();
        wow.init();
    }
    public render() {
        return (
            <div>
                <TeamSection />
            </div>
        );
    }
}
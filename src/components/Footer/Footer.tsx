import * as React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Footer.scss";
import logo from "./img/CodechainLogo_White.svg";
import github from "./img/github.svg";
import discord from "./img/discord.svg";
import medium from "./img/medium.svg";
import telegram from "./img/telegram.svg";
import twitter from "./img/twitter.svg";

const HeaderHeight = 76;

export default class Footer extends React.Component<any, any> {
    public render() {
        return (
            <div className="Footer">
                <Container>
                    <Row>
                        <Col md={7}>
                            <div>
                                <img src={logo} />
                            </div>
                            <div className="mt-4">
                                <div>
                                    <span className="font-weight-bold mr-3">
                                        Contact
                                    </span>
                                    <span>Email us: support@kodebox.io</span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <span>
                                    CodeChain and CodeChain logo are trademarks
                                    of Kodebox, Inc
                                </span>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="link-icon-container">
                                <a
                                    target="_blank"
                                    href="https://github.com/CodeChain-io"
                                >
                                    <img
                                        src={github}
                                        className="mr-3 mr-md-0 ml-0 ml-md-3 link-icon"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://discordapp.com/invite/xhpdXm7"
                                >
                                    <img
                                        src={discord}
                                        className="mr-3 mr-md-0 ml-0 ml-md-3 link-icon"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://twitter.com/codechain_io"
                                >
                                    <img
                                        src={twitter}
                                        className="mr-3 mr-md-0 ml-0 ml-md-3 link-icon"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://medium.com/codechain"
                                >
                                    <img
                                        src={medium}
                                        className="mr-3 mr-md-0 ml-0 ml-md-3 link-icon"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="http://t.me/codechain_protocol"
                                >
                                    <img
                                        src={telegram}
                                        className="mr-3 mr-md-0 ml-0 ml-md-3 link-icon"
                                    />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <div className="link-container">
                        <div className="link-item-col">
                            <Link
                                to="/feature"
                                onClick={this.linkHandler("#feature")}
                            >
                                <span className="link-header">
                                    Why CodeChain
                                </span>
                            </Link>
                        </div>
                        <div className="link-item-col">
                            <Link
                                to="/platform"
                                onClick={this.linkHandler("#platform")}
                            >
                                <span className="link-header">Platform</span>
                            </Link>
                        </div>
                        <div className="link-item-col">
                            <Link
                                to="/contact"
                                onClick={this.linkHandler("#contact")}
                            >
                                <span className="link-header">Contact</span>
                            </Link>
                        </div>
                        <div className="link-item-col">
                            <Link to="/about">
                                <span className="link-header">About Us</span>
                            </Link>
                        </div>
                        <div className="link-item-col">
                            <Link to="/faq">
                                <span className="link-header">
                                    How it Works
                                </span>
                            </Link>
                        </div>
                        <div className="link-item-col">
                            <a
                                target="_blank"
                                href="https://medium.com/codechain"
                            >
                                <span className="link-header">Blog</span>
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    private linkHandler = (id: string) => () => {
      window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el != null) {
            const elementPosition = el.offsetTop - HeaderHeight;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        }
      }, 0);
    }
}

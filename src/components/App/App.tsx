import React, { Component } from "react";
import { I18nextProvider } from "react-i18next";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import i18next from "../../i18next";
import About from "../About/About";
import FAQ from "../FAQ";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home, { paths as homePaths } from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import "./App.scss";

class App extends Component {
    public render() {
        return (
            <I18nextProvider i18n={i18next}>
                <Router hashType="noslash">
                    <div className="App">
                        <Header />
                        <div className="Content">
                            <Switch>
                                <Route
                                    exact={true}
                                    path={[...homePaths, "/"]}
                                    component={Home}
                                />
                                <Route
                                    exact={true}
                                    path="/about"
                                    component={About}
                                />
                                <Route
                                    exact={true}
                                    path="/faq"
                                    component={FAQ}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </I18nextProvider>
        );
    }
}

export default App;

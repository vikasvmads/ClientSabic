import React from "react";

class Statics extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <section className="welcome p-t-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="title-4">Welcome back
                                <span>John!</span>
                                </h1>
                                <hr className="line-seprate" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="statistic statistic2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="statistic__item statistic__item--green">
                                    <h2 className="number">10,368</h2>
                                    <span className="desc">members online</span>
                                    <div className="icon">
                                        <i className="zmdi zmdi-account-o"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="statistic__item statistic__item--orange">
                                    <h2 className="number">388,688</h2>
                                    <span className="desc">items sold</span>
                                    <div className="icon">
                                        <i className="zmdi zmdi-shopping-cart"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="statistic__item statistic__item--blue">
                                    <h2 className="number">1,086</h2>
                                    <span className="desc">this week</span>
                                    <div className="icon">
                                        <i className="zmdi zmdi-calendar-note"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="statistic__item statistic__item--red">
                                    <h2 className="number">$1,060,386</h2>
                                    <span className="desc">total earnings</span>
                                    <div className="icon">
                                        <i className="zmdi zmdi-money"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="statistic-chart">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="title-5 m-b-35">statistics</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="statistic-chart-1">
                                    <h3 className="title-3 m-b-30">chart</h3>
                                    <div className="chart-wrap">
                                        <canvas id="widgetChart5"></canvas>
                                    </div>
                                    <div className="statistic-chart-1-note">
                                        <span className="big">10,368</span>
                                        <span>/ 16220 items sold</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="top-campaign">
                                    <h3 className="title-3 m-b-30">top campaigns</h3>
                                    <div className="table-responsive">
                                        <table className="table table-top-campaign">
                                            <tbody>
                                                <tr>
                                                    <td>1. Australia</td>
                                                    <td>$70,261.65</td>
                                                </tr>
                                                <tr>
                                                    <td>2. United Kingdom</td>
                                                    <td>$46,399.22</td>
                                                </tr>
                                                <tr>
                                                    <td>3. Turkey</td>
                                                    <td>$35,364.90</td>
                                                </tr>
                                                <tr>
                                                    <td>4. Germany</td>
                                                    <td>$20,366.96</td>
                                                </tr>
                                                <tr>
                                                    <td>5. France</td>
                                                    <td>$10,366.96</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="chart-percent-2">
                                    <h3 className="title-3 m-b-30">chart by %</h3>
                                    <div className="chart-wrap">
                                        <canvas id="percent-chart2"></canvas>
                                        <div id="chartjs-tooltip">
                                            <table></table>
                                        </div>
                                    </div>
                                    <div className="chart-info">
                                        <div className="chart-note">
                                            <span className="dot dot--blue"></span>
                                            <span>products</span>
                                        </div>
                                        <div className="chart-note">
                                            <span className="dot dot--red"></span>
                                            <span>Services</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Statics;
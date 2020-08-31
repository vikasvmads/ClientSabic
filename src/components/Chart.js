import React from "react";
import { Line } from "react-chartjs-2";

class Chart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            graphData: this.props.data,
            data: {
                datasets: [
                    {
                        label: "First dataset",
                        data: this.props.data.col2018_Average_Price,
                        fill: true,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)"
                    },
                    {
                        label: "Second dataset",
                        data: this.props.data.col2019_Average_Price,
                        fill: false,
                        borderColor: "#742774"
                    },
                    {
                        label: "Second dataset",
                        data: this.props.data.col2020_Average_Price,
                        fill: false,
                        borderColor: "#742774"
                    }
                ]
            }
        }
    }
    render() {
        let col2020_Average_Price = this.props.data.map(data => (
            data.col2020_Average_Price
        ))
        col2020_Average_Price = col2020_Average_Price.filter(data => data != null)


        let col2019_Average_Price = this.props.data.map(data => (
            data.col2019_Average_Price
        ))

        col2019_Average_Price = col2019_Average_Price.filter(data => data != null)

        let col2018_Average_Price = this.props.data.map(data => (
            data.col2018_Average_Price
        ))

        col2018_Average_Price = col2018_Average_Price.filter(data => data != null)

        console.log(col2018_Average_Price)
        console.log(col2019_Average_Price)
        console.log(col2020_Average_Price)
        let cost_saving_for_2020 = this.props.data.map(data => (
            data.cost_saving_for_2020
        ))
        cost_saving_for_2020 = cost_saving_for_2020.filter(data => data != null)


        let Cost_Savings_for_2019 = this.props.data.map(data => (
            data.Cost_Savings_for_2019
        ))

        Cost_Savings_for_2019 = Cost_Savings_for_2019.filter(data => data != null)


        console.log(cost_saving_for_2020)
        console.log(Cost_Savings_for_2019)
        const option_2 = {
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: true,
                        color: '#f2f2f2'
                    },
                    ticks: {
                        fontFamily: "Poppins",
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: 10000,
                        max: 1500000,
                        fontFamily: "Poppins",
                        fontSize: 12
                    },
                    gridLines: {
                        display: true,
                        color: '#f2f2f2'

                    }
                }]
            },
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3
                },
                line: {
                    tension: 0
                }
            }
        }

        const data2 = {
            labels: ["2019", "2020"],
            datasets: [
                {
                    label: "2019",
                    data: Cost_Savings_for_2019,
                    fill: false,
                    borderColor: "rgb(30,144,255)"

                },
                {
                    label: "2020",
                    data: cost_saving_for_2020,
                    fill: false,
                    borderColor: "rgb(154,205,50)"
                },

            ]
        };


        const data = {
            labels: ["2018", "2019", "2020"],
            datasets: [
                {
                    label: "2018",
                    data: col2018_Average_Price,
                    fill: false,
                    borderColor: "rgb(255,140,0)"

                },
                {
                    label: "2019",
                    data: col2019_Average_Price,
                    fill: false,
                    borderColor: "rgb(30,144,255)"
                },
                {
                    label: "2020",
                    data: col2020_Average_Price,
                    fill: false,
                    borderColor: "	rgb(154,205,50)"
                },
            ]
        };

        return (
            <div>{this.props.showSecChart ?
                <Line data={data}
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    max: 2000,
                                    min: -500,
                                    stepSize: 400
                                }
                            }]
                        }
                    }} />
                :
                <Line data={data2}
                    options={option_2} />}
            </div>
        )
    }
}

export default Chart;
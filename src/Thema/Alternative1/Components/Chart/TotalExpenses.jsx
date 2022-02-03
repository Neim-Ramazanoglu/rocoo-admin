import React, { Component } from "react";
import Chart from "react-apexcharts";

class TotalExpenses extends Component {

    constructor(props) {
        super(props);

        this.success = {
            options: {
                chart: {
                    sparkline: {
                        enabled: true // only lines will be shown
                    },

                },

                colors: [
                    function ({ value, seriesIndex, dataPointIndex, w }) {
                        if (value > 40) {
                            return "#0BF72E";
                        } else {
                            return "#CCFAD3";
                        }
                    }
                ],
                // fill: {
                //     type: "gradient",
                //     gradient: {
                //         shadeIntensity: 1,
                //         opacityFrom: 0.7,
                //         opacityTo: 0.9,
                //         stops: [0, 90, 100]
                //     }
                // },

                xaxis: {

                    type: 'datetime',
                    categories: ["1", "2", "3", "4", "5", "6", "7", "8"]
                },
                stroke: {
                    curve: 'smooth',
                    width: 1,
                    colors: [
                        function ({ value, seriesIndex, dataPointIndex, w }) {
                            if (value > 40) {
                                return "#0BF72E";
                            } else {
                                return "#CCFAD3";
                            }
                        }
                    ]

                },
                plotOptions: {
                    bar: {
                        borderRadius: 2,
                        columnWidth: 35,
                    },
                },

            },
            series: [
                {
                    name: "series-1",
                    data: [42, 23, 55, 34, 15, 76, 24, 15]
                },
            ]
        };
    }

    render() {
        return (


            <Chart
                options={this.success.options}
                series={this.success.series}
                type="bar"
                width="70%"
            />
        );
    }
}

export default TotalExpenses;
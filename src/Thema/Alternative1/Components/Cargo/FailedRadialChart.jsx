import React, { Component } from "react";
import Chart from "react-apexcharts";
import deneme from "../../Assets/svg/blocked.svg"
class FailedRadialChart extends Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [100],

            options: {
                chart: {

                    sparkline: {
                        enabled: true
                    },
                },

                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 15,
                            size: '70%',
                            image: deneme,
                            imageWidth: 64,
                            imageHeight: 64,
                            imageClipped: false,
                        },
                        startAngle: -150,
                        endAngle: 150,
                        track: {
                            background: "#c21a1a",
                            strokeWidth: '97%',
                            margin: 5, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: 2,
                                left: 0,
                                color: '#c21a1a',
                                opacity: 1,
                                blur: 2
                            },
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -2,
                                fontSize: '22px',
                                show: false
                            }
                        },

                    }

                },
                grid: {
                    padding: {
                        top: -10
                    }
                },
                fill: {
                    colors: '#c21a1a',
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 53, 91]
                    },
                },
                labels: ['Average Results'],

            },


        };
    }


    render() {
        return (


            <Chart
                options={this.state.options} series={this.state.series} type="radialBar"
            />
        );
    }
}

export default FailedRadialChart;



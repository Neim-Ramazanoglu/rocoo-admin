import React, { useState } from 'react';
import TotalCost from '../Chart/TotalCost';
import TotalExpenses from '../Chart/TotalExpenses';
import TotalProfit from '../Chart/TotalProfit';
import TotalUsers from '../Chart/TotalUsers';
import Map from '../Map/Map';

function BusinessHomepage() {
    const [content, setContent] = useState("");
    return <div>
        <div className="page-header">
            <h1 className="page-title">İşletme Ekranı</h1>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xl-3">
                        <div className="card overflow-hidden">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div className="mt-2">
                                        <h6 className="">Total Users</h6>
                                        <h2 className="mb-0 number-font">44,278</h2>
                                    </div>
                                    <div className="ms-auto">

                                        <div className="chart-wrapper mt-1">
                                            <div
                                                className="chartjs-size-monitor"
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    overflow: "hidden",
                                                    pointerEvents: "none",
                                                    visibility: "hidden",
                                                    zIndex: -1
                                                }}
                                            >
                                                <div
                                                    className="chartjs-size-monitor-expand"
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        overflow: "hidden",
                                                        pointerEvents: "none",
                                                        visibility: "hidden",
                                                        zIndex: -1
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            width: 1000000,
                                                            height: 1000000,
                                                            left: 0,
                                                            top: 0
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    className="chartjs-size-monitor-shrink"
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        overflow: "hidden",
                                                        pointerEvents: "none",
                                                        visibility: "hidden",
                                                        zIndex: -1
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            width: "200%",
                                                            height: "200%",
                                                            left: 0,
                                                            top: 0
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <TotalProfit />
                                        </div>
                                    </div>
                                </div>
                                <span className="text-muted fs-12">
                                    <span className="text-secondary">
                                        <i className="fe fe-arrow-up-circle  text-secondary" /> 5%
                                    </span>
                                    Last week
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xl-3">

                        <div className="card overflow-hidden">

                            <div className="card-body">

                                <div className="d-flex">

                                    <div className="mt-2">

                                        <h6 className="">Total Profit</h6>
                                        <h2 className="mb-0 number-font">67,987</h2>
                                    </div>
                                    <div className="ms-auto">

                                        <div className="chart-wrapper mt-1">
                                            <div
                                                className="chartjs-size-monitor"
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    overflow: "hidden",
                                                    pointerEvents: "none",
                                                    visibility: "hidden",
                                                    zIndex: -1
                                                }}
                                            >
                                                <div
                                                    className="chartjs-size-monitor-expand"
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        overflow: "hidden",
                                                        pointerEvents: "none",
                                                        visibility: "hidden",
                                                        zIndex: -1
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            width: 1000000,
                                                            height: 1000000,
                                                            left: 0,
                                                            top: 0
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    className="chartjs-size-monitor-shrink"
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        overflow: "hidden",
                                                        pointerEvents: "none",
                                                        visibility: "hidden",
                                                        zIndex: -1
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            width: "200%",
                                                            height: "200%",
                                                            left: 0,
                                                            top: 0
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <TotalCost />
                                        </div>
                                    </div>
                                </div>
                                <span className="text-muted fs-12">
                                    <span className="text-pink">
                                        <i className="fe fe-arrow-down-circle text-pink" /> 0.75%
                                    </span>
                                    Last 6 days
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xl-3">

                        <div className="card overflow-hidden">

                            <div className="card-body">

                                <div className="d-flex">

                                    <div className="mt-2">

                                        <h6 className="">Total Expenses</h6>
                                        <h2 className="mb-0 number-font">$76,965</h2>
                                    </div>
                                    <div className="ms-auto">

                                        <div className="chart-wrapper mt-1">
                                            <div
                                                className="chartjs-size-monitor"
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    overflow: "hidden",
                                                    pointerEvents: "none",
                                                    visibility: "hidden",
                                                    zIndex: -1
                                                }}
                                            >
                                                <div
                                                    className="chartjs-size-monitor-expand"
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        overflow: "hidden",
                                                        pointerEvents: "none",
                                                        visibility: "hidden",
                                                        zIndex: -1
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            width: 1000000,
                                                            height: 1000000,
                                                            left: 0,
                                                            top: 0
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    className="chartjs-size-monitor-shrink"
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        overflow: "hidden",
                                                        pointerEvents: "none",
                                                        visibility: "hidden",
                                                        zIndex: -1
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            width: "200%",
                                                            height: "200%",
                                                            left: 0,
                                                            top: 0
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <TotalExpenses />

                                        </div>
                                    </div>
                                </div>
                                <span className="text-muted fs-12">
                                    <span className="text-green">
                                        <i className="fe fe-arrow-up-circle text-green" /> 0.9%
                                    </span>
                                    Last 9 days
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xl-3">

                        <div className="card overflow-hidden">

                            <div className="card-body">

                                <div className="d-flex">

                                    <div className="mt-2">

                                        <h6 className="">Total Cost</h6>
                                        <h2 className="mb-0 number-font">$59,765</h2>
                                    </div>
                                    <div className="ms-auto">

                                        <div className="chart-wrapper mt-1">
                                            <div
                                                className="chartjs-size-monitor"
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    overflow: "hidden",
                                                    pointerEvents: "none",
                                                    visibility: "hidden",
                                                    zIndex: -1
                                                }}
                                            >
                                                <div
                                                    className="chartjs-size-monitor-expand"
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        overflow: "hidden",
                                                        pointerEvents: "none",
                                                        visibility: "hidden",
                                                        zIndex: -1
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            width: 1000000,
                                                            height: 1000000,
                                                            left: 0,
                                                            top: 0
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    className="chartjs-size-monitor-shrink"
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        overflow: "hidden",
                                                        pointerEvents: "none",
                                                        visibility: "hidden",
                                                        zIndex: -1
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: "absolute",
                                                            width: "200%",
                                                            height: "200%",
                                                            left: 0,
                                                            top: 0
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <TotalUsers />

                                        </div>
                                    </div>
                                </div>
                                <span className="text-muted fs-12">
                                    <span className="text-warning">
                                        <i className="fe fe-arrow-up-circle text-warning" /> 0.6%
                                    </span>
                                    Last year
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className='row'>
            <Map />
        </div>
    </div>;
}

export default BusinessHomepage;

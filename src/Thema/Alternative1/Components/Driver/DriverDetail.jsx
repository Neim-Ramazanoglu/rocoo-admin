import React from 'react';
import pic from "../../Assets/images/users/0.jpg"
import TotalCost from '../Chart/TotalCost';
import "../../Assets/colors/color1.css"

function DriverDetail() {
    return <div>
        <div className="page-header">
            <h1 className="page-title">Sürücü Detayı</h1>
        </div>

        <div className='row'>
            <div className="card col-xl-7 col-lg-6 col-md-12">
                <div className="card-body">
                    <div className="panel profile-cover">
                        <div className='row'>
                            <span
                                className="avatar avatar-xxl bradius cover-image"
                                data-bs-image-src="../assets/images/users/2.jpg"
                                style={{
                                    background: `url("${pic}") center center`,
                                    marginRight: "2vh",
                                    marginLeft: "2vh"
                                }}
                            />
                            <div className="profile-img-content text-dark text-start">
                                <div className="text-dark">
                                    <h3 className="h3 mb-2">Tokyo</h3>

                                    <i className="side-menu__icon fe fe-truck" />
                                    <span className="text-muted mx-3 fs-16">Plaka</span>
                                    <br />
                                    <i className="side-menu__icon fe fe-map-pin" />
                                    <span className="text-muted mx-3 fs-16">Bölge</span>
                                    <br />
                                    <i className="side-menu__icon fe fe-phone-call" />
                                    <span className="text-muted mx-3 fs-16">Telefon</span>
                                    <br />
                                    <i className="side-menu__icon fe fe-at-sign" />
                                    <span className="text-muted mx-3 fs-16">Mail</span>
                                </div>
                            </div>
                        </div>
                        <div className="btn-profile">
                            <button className="btn btn-primary mt-1 mb-1">
                                <i className="fe fe-settings" /> <span>Düzenle</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12 col-xl-5" >
                <div className="card overflow-hidden">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="mt-2">
                                <h6 className="">Toplam Kargo</h6>
                                <h2 className="mb-0 number-font">850</h2>
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
                            <span className="text-danger" style={{ marginRight: "5px" }}>
                                <i className="fe fe-arrow-down-circle text-danger" /> 5%
                            </span>
                            Son 7 Gün
                        </span>
                    </div>
                </div>
            </div>

        </div>
        <div className="row ">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Kargolar</h3>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table border text-nowrap text-md-nowrap table-striped mb-0">
                            <thead>
                                <tr>
                                    <th>Sıra</th>
                                    <th>Sürücü</th>
                                    <th>Paket Alım</th>
                                    <th>Paket Teslim</th>
                                    <th>Durum</th>
                                    <th>İşlem</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Joan Powell</td>
                                    <td>18.10.2021</td>
                                    <td>22.10.2021</td>
                                    <td>
                                        <span className="tag tag-red">
                                            <i className="side-menu__icon fa fa-ban" style={{ marginTop: "6px", marginRight: "5px" }} />
                                            Teslim Edilmedi
                                        </span>
                                    </td>
                                    <td>
                                        <a href="/driverDetail/cargoChanges">
                                            <button id="bEdit" type="button" className="btn btn-sm btn-primary">
                                                <span className="fe fe-edit"> </span>
                                            </button>
                                        </a>

                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Gavin Gibson</td>
                                    <td>Tarih Gelecek</td>
                                    <td>Tarih Gelecek</td>
                                    <td>
                                        <span className="tag tag-yellow">
                                            <i className="side-menu__icon fe fe-truck" style={{ marginTop: "6px", marginRight: "5px" }} />
                                            Yolda
                                        </span>
                                    </td>
                                    <td>
                                        <a href="/driverDetail/cargoChanges">
                                            <button id="bEdit" type="button" className="btn btn-sm btn-primary">
                                                <span className="fe fe-edit"> </span>
                                            </button>
                                        </a>

                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Julian Kerr</td>
                                    <td>Tarih Gelecek</td>
                                    <td>Tarih Gelecek</td>
                                    <td>
                                        <span className="tag tag-orange">
                                            Yolda
                                            <i className="side-menu__icon fe fe-truck" style={{ marginTop: "6px", marginLeft: "5px" }} />
                                        </span>
                                    </td>
                                    <td>
                                        <a href="/driverDetail/cargoChanges">
                                            <button id="bEdit" type="button" className="btn btn-sm btn-primary">
                                                <span className="fe fe-edit"> </span>
                                            </button>
                                        </a>

                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Cedric Kelly</td>
                                    <td>Tarih Gelecek</td>
                                    <td>Tarih Gelecek</td>
                                    <td>
                                        <span className="tag tag-green">
                                            <i className="side-menu__icon fe fe-check" style={{ marginTop: "6px", marginRight: "5px" }} />
                                            Teslim Edildi
                                        </span>
                                    </td>
                                    <td>
                                        <a href="/driverDetail/cargoChanges">
                                            <button id="bEdit" type="button" className="btn btn-sm btn-primary">
                                                <span className="fe fe-edit"> </span>
                                            </button>
                                        </a>

                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Samantha May</td>
                                    <td>Tarih Gelecek</td>
                                    <td>Tarih Gelecek</td>
                                    <td>
                                        <span className="tag tag-green">
                                            Teslim Edildi
                                            <i className="side-menu__icon fe fe-check-circle" style={{ marginTop: "6px", marginLeft: "5px" }} />
                                        </span>
                                    </td>
                                    <td>
                                        <a href="/driverDetail/cargoChanges">
                                            <button id="bEdit" type="button" className="btn btn-sm btn-primary">
                                                <span className="fe fe-edit"> </span>
                                            </button>
                                        </a>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div >;
}

export default DriverDetail;

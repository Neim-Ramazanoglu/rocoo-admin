import React, { useState } from 'react';
import "../../Assets/css/style.css"
function CargoChanges() {
    const [state, setState] = useState("1");
    const [dropdown, setDropdown] = useState(false);
    console.log("dr", dropdown);

    return <div>
        <div className="page-header">
            <h1 className="page-title">Kargo İşlemleri</h1>
        </div>
        <div className="card">
            <div className="card-body">
                <div className="panel panel-primary">
                    <div className=" tab-menu-heading">
                        <div className="tabs-menu1">
                            {/* Tabs */}
                            <ul className="nav panel-tabs" style={{ justifyContent: "space-evenly" }}>
                                <li>
                                    <a href="#tab5" data-bs-toggle="tab" className={(state === "1" ? "active" : "")} onClick={() => { setState("1") }}>
                                        <i className="fa fa-group" style={{ fontSize: "24px" }}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tab6" data-bs-toggle="tab" className={(state === "2" ? "active" : "")} onClick={() => { setState("2") }}>
                                        <i className="fa fa-map-marker" style={{ fontSize: "24px" }}></i>

                                    </a>
                                </li>
                                <li>
                                    <a href="#tab7" data-bs-toggle="tab" className={(state === "3" ? "active" : "")} onClick={() => { setState("3") }}>
                                        <i className="fa fa-random" style={{ fontSize: "24px" }}></i>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel-body tabs-menu-body">
                        <div className="tab-content">
                            <div className={"tab-pane" + (state === "1" ? "active" : "")} id="tab5">
                                <h3 className='mt-5 mb-5'>Sürücü Değişikliği</h3>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="form-group row fv-plugins-icon-container has-success">
                                            <label className="col-xl-3 col-lg-3 col-form-label">Mevcut Sürücü</label>
                                            <div className="col-lg-9 col-xl-9">
                                                <input
                                                    className="form-control"
                                                    disabled=""
                                                    placeholder="cagri erdogan"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-xl-3 col-lg-3 col-form-label">
                                                Atanacak Sürücü
                                            </label>
                                            <div className="col-lg-9 col-xl-9">
                                                <select
                                                    className="form-control form-control-lg "
                                                    id="exampleSelect1"
                                                    style={{ backgroundColor: "#fff" }}
                                                >
                                                    <option>1 </option>
                                                    <option>2 </option>
                                                    <option> 3 </option>

                                                </select>

                                            </div>

                                        </div>
                                        <span
                                            href="#"
                                            className="btn btn-primary mt-5"
                                        >
                                            Onayla
                                        </span>

                                    </div>
                                </div>


                            </div>
                            <div className={"tab-pane" + (state === "2" ? "active" : "")} id="tab6">
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="form-group row mb-5">
                                            <label class="col-xl-3 col-lg-3 col-form-label">Mevcut Adres</label>
                                            <textarea class="col-lg-9 col-xl-9 form-control form-control-lg " id="exampleTextarea" rows="3" readonly="" placeholder="Im Schwarzen Bruch 13 Meschede">
                                            </textarea></div>
                                        <div class="form-group row mt-5">
                                            <label class="col-xl-3 col-lg-3 col-form-label">Yeni Adres</label>
                                            <textarea class="col-lg-9 col-xl-9 form-control form-control-lg " id="exampleTextarea" rows="3">
                                            </textarea>
                                        </div>
                                        <span
                                            href="#"
                                            className="btn btn-primary mt-5"
                                        >
                                            Onayla
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div className={"tab-pane" + (state === "3" ? "active" : "")} id="tab7">
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="form-group row mb-5">
                                            <label class="col-xl-3 col-lg-3 col-form-label">Mevcut Sıra</label>
                                            <div class="col-lg-9 col-xl-9">
                                                <input class="form-control" disabled="" />
                                            </div>
                                        </div>
                                        <div class="form-group row mt-5">
                                            <label class="col-xl-3 col-lg-3 col-form-label">Yeni Sıra</label>
                                            <div class="col-lg-9 col-xl-9">
                                                <select class="form-control form-control-lg form-control-solid" style={{ backgroundColor: "#fff" }}  >
                                                    <option>Opsiyonlar Listelenecek</option>
                                                </select>
                                            </div>
                                        </div>
                                        <span
                                            href="#"
                                            className="btn btn-primary mt-5"
                                        >
                                            Onayla
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>;
}

export default CargoChanges;

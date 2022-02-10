import React, { useState } from 'react';
import avatar from "../../Assets/images/blank.png"
import "../../Assets/colors/color1.css"
function DriverInsert() {
    const [state, setState] = useState("1");
    const [dropdown, setDropdown] = useState(false);
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Sürücü Ekle</h1>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="panel panel-primary">
                        <div className=" tab-menu-heading">
                            <div className="tabs-menu1">
                                {/* Tabs */}
                                <ul className="nav panel-tabs" style={{ justifyContent: "space-evenly" }}>
                                    <li>
                                        <a href="#tab5" data-bs-toggle="tab" className={(state === "1" ? "active text-center" : "text-center")} onClick={() => { setState("1") }} >
                                            {
                                                (state === "1" ?
                                                    <div>
                                                        <i className="fe fe-map-pin" style={{ fontSize: "24px" }} /><br />
                                                        Adres Bilgileri
                                                    </div>
                                                    :
                                                    <div style={{ color: "#ffcc00" }}>
                                                        <i className="fe fe-check-square" style={{ fontSize: "24px" }} /><br />
                                                        Adres Bilgileri
                                                    </div>)
                                            }
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tab6" data-bs-toggle="tab" className={(state === "2" ? "active text-center" : "text-center")} onClick={() => { setState("2") }}>
                                            {
                                                (state === "3" ?
                                                    <div style={{ color: "#ffcc00" }}>
                                                        <i className="fe fe-check-square" style={{ fontSize: "24px" }} /><br />
                                                        Kişisel Bilgiler
                                                    </div>
                                                    :
                                                    <div>
                                                        <i className="fe fe-user" style={{ fontSize: "24px" }} /><br />
                                                        Kişisel Bilgiler
                                                    </div>)
                                            }
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tab7" data-bs-toggle="tab" className={(state === "3" ? "active text-center" : "text-center")} onClick={() => { setState("3") }}>
                                            <div>
                                                <i className="fa fa-suitcase" style={{ fontSize: "24px" }} /><br />
                                                Çalışma Bilgileri
                                            </div>
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
                                            <div className="form-group fv-plugins-icon-container has-success">
                                                <label>Açık Adres</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-solid form-control-lg"
                                                    name="address"
                                                    placeholder="Açık adresinizi giriniz"
                                                />
                                                <span className="form-text text-muted" />
                                                <div className="fv-plugins-message-container" />
                                            </div>

                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleSelect1">
                                                            Eyalet
                                                        </label>
                                                        <select className="form-control form-control-solid form-control-lg" style={{ backgroundColor: "#fff" }}>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleSelect1">
                                                            Şehir
                                                        </label>
                                                        <select className="form-control form-control-solid form-control-lg" style={{ backgroundColor: "#fff" }}>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                className="btn btn-warning mt-5 offset-11"
                                                onClick={() => { setState("2") }}
                                            >
                                                Sonraki
                                                <i className="fe fe-chevron-right" style={{ marginLeft: "5px" }} />
                                            </button>

                                        </div>
                                    </div>


                                </div>
                                <div className={"tab-pane" + (state === "2" ? "active" : "")} id="tab6">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div className='row'>
                                                <div className="col-lg-4 col-sm-12 mb-4 mb-lg-0">
                                                    <div className="dropify-wrapper">
                                                        <div className="dropify-message">
                                                            <span className="file-icon">
                                                                <p>Fotoğraf Seç</p>
                                                            </span>
                                                            <p className="dropify-error">Hata</p>
                                                        </div>
                                                        <div className="dropify-loader" />
                                                        <div className="dropify-errors-container">
                                                            <ul />
                                                        </div>
                                                        <input type="file" className="dropify" data-bs-height={180} />
                                                        <button type="button" className="dropify-clear">
                                                            Remove
                                                        </button>
                                                        <div className="dropify-preview">
                                                            <span className="dropify-render" />
                                                            <div className="dropify-infos">
                                                                <div className="dropify-infos-inner">
                                                                    <p className="dropify-filename">
                                                                        <span className="dropify-filename-inner" />
                                                                    </p>
                                                                    <p className="dropify-infos-message">
                                                                        Drag and drop or click to replace
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-sm-12 mb-4 mb-lg-0">
                                                    <div className="form-group fv-plugins-icon-container has-success">
                                                        <label>İsim</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid form-control-lg"
                                                            name="address"
                                                            placeholder="İsminizi giriniz"
                                                        />
                                                        <span className="form-text text-muted" />
                                                        <div className="fv-plugins-message-container" />
                                                    </div>
                                                    <div className="form-group fv-plugins-icon-container has-success">
                                                        <label>Soyisim</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid form-control-lg"
                                                            name="address"
                                                            placeholder="Soyisminizi giriniz"
                                                        />
                                                        <span className="form-text text-muted" />
                                                        <div className="fv-plugins-message-container" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mt-5'>
                                                <div className='col-lg-6'>
                                                    <div className="form-group fv-plugins-icon-container has-success">
                                                        <label>Mail Adresi</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid form-control-lg"
                                                            name="address"
                                                            placeholder="Mail adresinizi giriniz"
                                                        />
                                                        <span className="form-text text-muted" />
                                                        <div className="fv-plugins-message-container" />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className="form-group fv-plugins-icon-container has-success">
                                                        <label>Şifre</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid form-control-lg"
                                                            name="address"
                                                            placeholder="Şifrenizi giriniz"
                                                        />
                                                        <span className="form-text text-muted" />
                                                        <div className="fv-plugins-message-container" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mt-5'>
                                                <div className='col-lg-6'>
                                                    <div className="form-group fv-plugins-icon-container has-success">
                                                        <label>Telefon Numarası</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid form-control-lg"
                                                            name="address"
                                                            placeholder="Telefon numaranızı giriniz"
                                                        />
                                                        <span className="form-text text-muted" />
                                                        <div className="fv-plugins-message-container" />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className="form-group fv-plugins-icon-container has-success">
                                                        <label>Yedek Telefon Numarası</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid form-control-lg"
                                                            name="address"
                                                            placeholder="Yedek Telefon numaranızı giriniz"
                                                        />
                                                        <span className="form-text text-muted" />
                                                        <div className="fv-plugins-message-container" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mt-5'>
                                                <div className='col-lg-6'>
                                                    <div className="form-group fv-plugins-icon-container has-success">
                                                        <label>Ehliyet Numarası</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid form-control-lg"
                                                            name="address"
                                                            placeholder="Ehliyet numaranızı giriniz"
                                                        />
                                                        <span className="form-text text-muted" />
                                                        <div className="fv-plugins-message-container" />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className="form-group fv-plugins-icon-container has-success">
                                                        <label>Kimlik Numarası</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-solid form-control-lg"
                                                            name="address"
                                                            placeholder="Kimlik numaranızı giriniz"
                                                        />
                                                        <span className="form-text text-muted" />
                                                        <div className="fv-plugins-message-container" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary mt-5 "
                                                onClick={() => { setState("1") }}
                                            >
                                                <i className="fe fe-chevron-left" style={{ marginRight: "5px" }} />
                                                Önceki
                                            </button><button
                                                className="btn btn-warning mt-5 offset-9"
                                                onClick={() => { setState("3") }}
                                            >
                                                Sonraki
                                                <i className="fe fe-chevron-right" style={{ marginLeft: "5px" }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={"tab-pane" + (state === "3" ? "active" : "")} id="tab7">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div>
                                                <div className='row'>
                                                    <div className='col-lg-6'>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleSelect1">
                                                                Eyalet
                                                            </label>
                                                            <select className="form-control form-control-solid form-control-lg" style={{ backgroundColor: "#fff" }}>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleSelect1">
                                                                Şehir
                                                            </label>
                                                            <select className="form-control form-control-solid form-control-lg" style={{ backgroundColor: "#fff" }}>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-lg-6'>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleSelect1">
                                                                Posta Kodu
                                                            </label>
                                                            <select className="form-control form-control-solid form-control-lg" style={{ backgroundColor: "#fff" }}>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <div className="form-group fv-plugins-icon-container has-success">
                                                            <label>Araç Plakası</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid form-control-lg"
                                                                name="address"
                                                                placeholder="Plakanızı giriniz"
                                                            />
                                                            <span className="form-text text-muted" />
                                                            <div className="fv-plugins-message-container" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary mt-5 "
                                                onClick={() => { setState("2") }}
                                            >
                                                <i className="fe fe-chevron-left" style={{ marginRight: "5px" }} />
                                                Önceki
                                            </button>
                                            <button
                                                className="btn btn-success mt-5 offset-9"
                                            >
                                                Onayla
                                                <i className="fe fe-check-circle" style={{ marginLeft: "5px" }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DriverInsert
import React from 'react';
import pic from "../../Assets/images/users/0.jpg"
function DriverDetail() {
    return <div>
        <div className="page-header">
            <h1 className="page-title">Sürücü Detayı</h1>
        </div>

        <div className='row'>
            <div className="card">
                <div className="card-body">
                    <div className="wideget-user mb-2">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="row">
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
                                                    <span className="text-muted mx-3 fs-16">tel</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-profile">
                                            <button className="btn btn-primary mt-1 mb-1">
                                                <i className="fa fa-rss" /> <span>Follow</span>
                                            </button>
                                            <button className="btn btn-secondary mt-1 mb-1">
                                                <i className="fa fa-envelope" /> <span>Message</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="">
                                        <div className="social social-profile-buttons mt-5 float-end">
                                            <div className="mt-3">
                                                <a className="social-icon text-primary" href="">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a className="social-icon text-primary" href="">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a className="social-icon text-primary" href="">
                                                    <i className="fa fa-youtube" />
                                                </a>
                                                <a className="social-icon text-primary" href="">
                                                    <i className="fa fa-rss" />
                                                </a>
                                                <a className="social-icon text-primary" href="">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                                <a className="social-icon text-primary" href="">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                            </div>
                                        </div>
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

export default DriverDetail;

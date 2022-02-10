import React, { useState } from 'react'


function Register() {
    const [password, setPassword] = useState(true)

    return (
        <div>
            <div className="login-img">
                <div className="page">
                    <div className="">
                        <div className="col col-login mx-auto">
                            <div className="text-center">
                                <img
                                    src={require("../../Assets/images/brand/RooCoLogo.png")}
                                    className="header-brand-img"
                                    alt=""
                                    style={{ maxHeight: "50px" }}
                                />
                            </div>
                            <div className='h4 text-center mt-5' >RoCoo'ya Hoşgeldin</div>
                        </div>
                        <div className="container-login100">
                            <div className="wrap-login100 p-6">
                                <form className="login100-form validate-form">
                                    <span className="login100-form-title"> Kayıt Ol </span>
                                    <div
                                        className="wrap-input100 validate-input input-group"
                                        data-bs-validate="Valid email is required: ex@abc.xyz"
                                    >
                                        <a
                                            href="#"
                                            className="input-group-text bg-white text-muted"
                                        >
                                            <i className="zmdi zmdi-account" aria-hidden="true" />
                                        </a>
                                        <input
                                            className="input100 border-start-0 ms-0 form-control"
                                            type="text"
                                            placeholder="Kullanıcı Adı"
                                        />
                                    </div>
                                    <div
                                        className="wrap-input100 validate-input input-group"
                                        data-bs-validate="Valid email is required: ex@abc.xyz"
                                    >
                                        <a
                                            href="#"
                                            className="input-group-text bg-white text-muted"
                                        >
                                            <i className="zmdi zmdi-email" aria-hidden="true" />
                                        </a>
                                        <input
                                            className="input100 border-start-0 ms-0 form-control"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div
                                        className="wrap-input100 validate-input input-group"
                                        id="Password-toggle"
                                    >
                                        <a
                                            href="#"
                                            className="input-group-text bg-white text-muted"
                                        >
                                            <i
                                                className="zmdi text-muted zmdi-eye"
                                                aria-hidden="true"
                                                onClick={() => { setPassword(!password) }}
                                            />
                                        </a>
                                        <input
                                            className="input100 border-start-0 form-control ms-0"
                                            type={(password ? "password" : "text")}
                                            placeholder="Şifre"
                                        />
                                    </div>
                                    <label className="custom-control custom-checkbox mt-4">
                                        <input type="checkbox" className="custom-control-input" />
                                        <span className="custom-control-label">
                                            <a href="terms.html">Kullanım koşullarını</a> kabul ediyorum
                                        </span>
                                    </label>
                                    <div className="container-login100-form-btn">
                                        <a href="index.html" className="login100-form-btn btn-primary">
                                            Kayıt Ol
                                        </a>
                                    </div>
                                    <div className="text-center pt-3">
                                        <p className="text-dark mb-0">
                                            Zaten bir hesabın var mı?
                                            <a href="login.html" className="text-primary ms-1">
                                                Giriş Yap
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
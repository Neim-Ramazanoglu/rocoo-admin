import React, { useState } from 'react'
function Login() {
    const [password, setPassword] = useState(true)
    return (
        <div>
            <div className="login-img">
                <div className="page">
                    <div className="">
                        <div className="col col-login mx-auto ">
                            <div className="text-center">
                                <img
                                    src={require("../../Assets/images/brand/RooCoLogo.png")}
                                    className="header-brand-img"
                                    alt=""
                                    style={{ maxHeight: "65px" }}
                                />
                            </div>
                        </div>
                        <div className="container-login100">
                            <div className="wrap-login100 p-6">
                                <form className="login100-form validate-form">
                                    <span className="login100-form-title pb-5"> Giriş Yap </span>
                                    <div
                                        className="wrap-input100 validate-input input-group"
                                        data-bs-validate="Valid email is required: ex@abc.xyz"
                                    >
                                        <a
                                            href="#"
                                            className="input-group-text bg-white text-muted"
                                        >
                                            <i
                                                className="zmdi zmdi-email text-muted"
                                                aria-hidden="true"
                                            />
                                        </a>
                                        <input
                                            className="input100 border-start-0 form-control ms-0"
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
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <a
                                            href="index.html"
                                            className="login100-form-btn btn-primary"
                                        >
                                            Giriş Yap
                                        </a>
                                    </div>
                                    <div className="text-center pt-3">
                                        <p className="text-dark mb-0">
                                            Üyeliğin yok mu?
                                            <a href="register.html" className="text-primary ms-1">
                                                Üye Ol
                                            </a>
                                        </p>
                                    </div>

                                </form>
                            </div>
                        </div>
                        {/* CONTAINER CLOSED */}
                    </div>
                </div>
                {/* End PAGE */}
            </div>


        </div>
    )
}

export default Login
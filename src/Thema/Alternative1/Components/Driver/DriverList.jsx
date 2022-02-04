import React, { useState } from 'react';
import pic from "../../Assets/images/users/0.jpg"

function DriverList() {
    const [entries, setEntries] = useState(true);
    return <div>
        <div className="page-header">
            <h1 className="page-title">Sürücü Listesi</h1>
        </div>
        <div className="row row-sm">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">

                            <table className="table border text-nowrap text-md-nowrap table-striped mb-0">
                                <thead >
                                    <tr>
                                        <th>ID</th>
                                        <th>Fotoğraf</th>
                                        <th>İsim</th>
                                        <th>Plaka</th>
                                        <th>Bölge</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <td>1</td>
                                        <td>
                                            <div >
                                                <img src={pic} alt="" className="cart-img text-center" />
                                            </div>
                                        </td>
                                        <td>Joan Powell</td>
                                        <td>123-xxx-456</td>
                                        <td>Z</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <div >
                                                <img src={pic} alt="" className="cart-img text-center" />
                                            </div>
                                        </td>
                                        <td>Gavin Gibson</td>
                                        <td>123-xxx-456</td>
                                        <td>X</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <div >
                                                <img src={pic} alt="" className="cart-img text-center" />
                                            </div>
                                        </td>
                                        <td >Julian Kerr</td>
                                        <td>123-xxx-456</td>
                                        <td>C</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            <div >
                                                <img src={pic} alt="" className="cart-img text-center" />
                                            </div>
                                        </td>
                                        <td>Cedric Kelly</td>
                                        <td>123-xxx-456</td>
                                        <td>V</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>
                                            <div >
                                                <img src={pic} alt="" className="cart-img text-center" />
                                            </div>
                                        </td>
                                        <td>Samantha May</td>
                                        <td>123-xxx-456</td>
                                        <td>B</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>;
}

export default DriverList;
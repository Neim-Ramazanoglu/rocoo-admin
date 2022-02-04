import React, { useState } from 'react';

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
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Joan Powell</td>
                                        <td>Associate Developer</td>
                                        <td>$450,870</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Gavin Gibson</td>
                                        <td>Account manager</td>
                                        <td>$230,540</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Julian Kerr</td>
                                        <td>Senior Javascript Developer</td>
                                        <td>$55,300</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Cedric Kelly</td>
                                        <td>Accountant</td>
                                        <td>$234,100</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Samantha May</td>
                                        <td>Junior Technical Author</td>
                                        <td>$43,198</td>
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

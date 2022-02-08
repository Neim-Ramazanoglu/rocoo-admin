import React from 'react';
import TotalProfit from '../Chart/TotalProfit';
import FailedRadialChart from './FailedRadialChart';
import RadialChart from './RadialChart';
import SuccessRadialChart from './SuccessRadialChart';

function Cargo() {

    const cargos = [
        {
            driver: "Çağrı Erdoğan",
            receiver: "Teslim alacak kişi",
            situation: "Yolda"
        },
        {
            driver: "Çağrı Erdoğan",
            receiver: "Teslim alacak kişi",
            situation: "Teslim Edildi"
        },
        {
            driver: "Çağrı Erdoğan",
            receiver: "Teslim alacak kişi",
            situation: "Yolda"
        },
        {
            driver: "Çağrı Erdoğan",
            receiver: "Teslim alacak kişi",
            situation: "Teslim Edilmedi"
        },
        {
            driver: "Çağrı Erdoğan",
            receiver: "Teslim alacak kişi",
            situation: "Teslim Edildi"
        },
        {
            driver: "Çağrı Erdoğan",
            receiver: "Teslim alacak kişi",
            situation: "Yolda"
        },
        {
            driver: "Çağrı Erdoğan",
            receiver: "Teslim alacak kişi",
            situation: "Teslim Edilmedi"
        },
    ]

    return <div>
        <div className="page-header">
            <h1 className="page-title">Kargolar</h1>
        </div>
        <div className='row'>
            {cargos?.length ? cargos.map((cargo, i) => {
                return <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="widget text-center">
                                <h3>{cargo.driver}</h3>
                                <span className={cargo.situation === "Yolda" ? "tag tag-yellow" : cargo.situation === "Teslim Edildi" ? "tag tag-green" : "tag tag-red"}>{cargo.situation}</span>
                                <div id="circle-2" className={"mt-3 mb-3 " + (cargo.situation === "Yolda" ? "chart-dropshadow-warning" : cargo.situation === "Teslim Edildi" ? "chart-dropshadow-success" : "chart-dropshadow-danger")}>
                                    {cargo.situation === "Yolda" ? <RadialChart /> : cargo.situation === "Teslim Edildi" ? <SuccessRadialChart /> : <FailedRadialChart />}
                                </div>
                                <p className="mb-0 text-center">
                                    <span className="fe fe-truck mx-2" style={cargo.situation === "Yolda" ? { color: '#ffcc00' } : cargo.situation === "Teslim Edildi" ? { color: '#4ecc48' } : { color: '#c21a1a' }} />
                                    {cargo.receiver}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }) : null}

        </div>

    </div>;
}

export default Cargo;

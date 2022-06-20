import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
} from "reactstrap";

function KargoListesi() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                // console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const fiyat = () => {
        return data.map(item => {
            return (
                item.price
            )
        })
    }
    // console.log(dönüstür());

    const kargogorsel = {
        labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        datasets: [
            {
                label: "Güneş Kremi",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                data: fiyat(),
            },
            {
                label: "Saç Sirkesi",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(255,99,132,0.4)",
                borderColor: "rgba(255,99,132,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(255,99,132,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                data: [120, 140, 180, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            }
        ],
        // options: {
        //     plugins: {
        //         legend: { display: false },
        //     },
        // },
    };

    return (
        <div>
            <Row>
                <Col md="12">
                    <Card className="card-chart">
                        <CardHeader>
                            <CardTitle tag="h5">Kargo Dağıtım Listesi</CardTitle>
                            <p className="card-category">Aylık Siparişler</p>
                        </CardHeader>
                        <CardBody>
                            <Line
                                // data={dashboardNASDAQChart.data}
                                data={kargogorsel}
                                // options={kargogorsel.options}
                                width={800}
                                height={100}
                            />
                        </CardBody>
                        {/* Alt Bilgilendirme Kısmı */}
                        <CardFooter>
                            {/* <div className="chart-legend">
                                <i className="fa fa-circle text-info" /> Güneş Kremi{" "}
                                <i className="fa fa-circle text-warning" /> Saç Sirkesi{" "}
                            </div> */}
                            <hr />
                            <div className="card-stats">
                                <i className="fa fa-check" /> Data : Tüm Satış Platformlarını Kapsamaktadır.
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default KargoListesi
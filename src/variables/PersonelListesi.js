import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
} from "reactstrap";

function PersonelListesi() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users") // Personel Listesi
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    // console.log("Gelen Data: ", data);

    // Gelen Veriyi Dönüştürüp Ekrana Çıktı Veriyoruz
    const dönüstür = (data) => {
        return data.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td className='text-right'>{item.address.zipcode}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Personel Listesi</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead className="text-primary">
                                    <tr>
                                        <th>Ad - Soyad</th>
                                        <th>Kullanıcı Adı</th>
                                        <th>E-Mail Adresi</th>
                                        <th className="text-right">Satış Miktarı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dönüstür(data)}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default PersonelListesi;
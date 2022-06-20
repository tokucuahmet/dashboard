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

function MagazalarListesi() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  const dönüstür = () => {
    return data.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.category}</td>
          <td className='text-right'>{item.price+ " ₺"}</td>

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
              <CardTitle tag="h4">Mağazalar Genel Satış Listesi</CardTitle>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Mağazar Adı</th>
                    <th>Ülke</th>
                    <th>Şehir</th>
                    <th className="text-right">Genel Ciro</th>
                  </tr>
                </thead>
                <tbody>
                  {dönüstür()}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default MagazalarListesi
import React from "react";
import { useState, useEffect } from "react";
import Navi from "../navi/Navi";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";

export default function Main() {
  const [city1, setCity] = useState();
  const [city2, setCity2] = useState();
  useEffect(() => {
    const url = `https://weatherdbi.herokuapp.com/data/weather/ankara`;
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCity(data);
    };
    fetchData();
    const fetchData2 = async () => {
      const url = `https://weatherdbi.herokuapp.com/data/weather/istanbul`;
      const response = await fetch(url);
      const data = await response.json();
      setCity2(data);
    };
    fetchData2();
  });
  return (
    <div className="main-cards" >
      <Container><Navi></Navi></Container>
      <Container className="d-flex justify-content-center">
      <Row>
        <Col xs="6">
          <Card >
            <CardImg
              top
              left
              width="50px"
              height="250px"
              style={{objectFit:'contain'}}
              src={city1?.currentConditions?.iconURL}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{city1?.region}</CardTitle>
              <CardSubtitle>{city1?.currentConditions?.dayhour}</CardSubtitle>
              <div className="d-flex justify-content-between">
              {city1?.next_days?.map((item) => (
                <Card style={{width:'250px'}}>
                  <CardBody>
                    <CardImg
                      top
                      left
                      width="50px"
                      height="50px"
                      style={{objectFit:'contain'}}
                      src={item?.iconURL}
                      alt="Card image cap"
                    />
                    <CardTitle>{item?.day}</CardTitle>
                    <CardSubtitle>{item?.comment}</CardSubtitle>
                  </CardBody>
                </Card>
              ))}
              </div>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      
      
        <Col xs="6">
          <Card>
            <CardImg
              top
              left='true'
              width="50px"
              height="250px"
              style={{objectFit:'contain'}}
              src={city2?.currentConditions?.iconURL}
              alt="Card image cap"
            />
            <CardBody className="">
              <CardTitle>{city2?.region}</CardTitle>
              <CardSubtitle>{city2?.currentConditions?.dayhour}</CardSubtitle>
              <div className="d-flex justify-content-between">
              {city2?.next_days?.map((item) => (
                <Card style={{width:'250px'}}>
                  <CardBody>
                    <CardImg
                      top
                      left
                      width="50px"
                      height="50px"
                      style={{objectFit:'contain'}}
                      src={item?.iconURL}
                      alt="Card image cap"
                    />
                    <CardTitle>{item?.day}</CardTitle>
                    <CardSubtitle>{item?.comment}</CardSubtitle>
                  </CardBody>
                </Card>
              ))}
              </div>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

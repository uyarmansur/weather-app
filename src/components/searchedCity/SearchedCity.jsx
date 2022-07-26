import React from "react";
import { connect } from "react-redux";
import { getData } from "../../redux/actions/cardAction";
import { bindActionCreators } from "redux";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SearchedCity({city ,actions}) {
  const params = useParams();
 
  useEffect(() => {
     actions.getData(params.search);
  }, []);

  return (
    <div>
      <Card>
        <CardImg
          top
          left
          width="50px"
          height="250px"
          style={{ objectFit: "contain" }}
          src={city?.currentConditions?.iconURL}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{city?.region}</CardTitle>
          <CardSubtitle>{city?.currentConditions?.dayhour}</CardSubtitle>
          <div className="d-flex justify-content-between">
            {city?.next_days?.map((item) => (
              <Card style={{ width: "250px" }} key={item.id}>
                <CardBody>
                  <CardImg
                    top
                    left
                    width="50px"
                    height="50px"
                    style={{ objectFit: "contain" }}
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
    </div>
  );
}
function mapStateToProps(state) {
  return {
    city: state.cardReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getData: bindActionCreators(getData, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchedCity);

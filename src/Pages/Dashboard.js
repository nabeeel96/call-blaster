import React, { useState } from "react";
import { Card, Col, Divider, Row } from "antd";
import { PhoneTwoTone } from "@ant-design/icons";
import StackedBar from "../Components/BarChart";
import PieChart from "../Components/PieChart";

const cardStyling = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
};
const iconClass = {
  // width:'32px',
  // height:'40px',
  borderRadius: "50%",
  backgroundColor: "#e6f3ff",
  padding: "20px",
  marginLeft: "44px",
};
const callHeading = {
  fontFamily: "Gilroy-Bold",
  fontSize: "33px",
  fontWeight: "bolder",
  marginTop: "10px",
  textAlign: "center",
};

function Dashboard() {
  return (
    <div>
      <Divider orientation="left">Dashboard Control Panel</Divider>
      <Row justify="space-around">
        <Col span={5}>
          <Card style={cardStyling}>
            <PhoneTwoTone style={iconClass} />
            <h1 style={callHeading}>111111</h1>
            <p>Total Number of Calls</p>
          </Card>
        </Col>
        <Col span={5}>
          <Card style={cardStyling}>
            <PhoneTwoTone style={iconClass} />
            <h1 style={callHeading}>22222</h1>
            <p>Total Answer Calls</p>
          </Card>
        </Col>
        <Col span={5}>
          <Card style={cardStyling}>
            <PhoneTwoTone style={iconClass} />
            <h1 style={callHeading}>33333</h1>
            <p>Total Unanswered Calls</p>
          </Card>
        </Col>
        <Col span={5}>
          <Card style={cardStyling}>
            <PhoneTwoTone style={iconClass} />
            <h1 style={callHeading}>44444</h1>
            <p>Average Answer Monthly</p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={13}>
          <Card style={{marginLeft:'20px', marginTop:'40px'}}>
            <StackedBar />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} offset={3} >
          <Card style={{marginRight:'20px', marginTop:'40px', height:'500px'}}>
            <PieChart />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;

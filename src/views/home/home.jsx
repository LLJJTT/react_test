import React from 'react';
import { Button,Row, Col } from 'antd';
class Home extends React.Component {
	addPlane(a,b){
		console.log(a+'-'+b)
	}
  render () {
    return (
    	<div>
        <div>
        	<Button type="primary" onClick={(e) => this.addPlane(1,2)}>Primary</Button>
		    <Button>Default</Button>
		    <Button type="dashed">Dashed</Button>
		    <Button type="danger">Danger</Button>
        </div>
        <div>
		    <Row>
		      <Col span={12}>col-12</Col>
		      <Col span={12}>col-12</Col>
		    </Row>
		    <Row>
		      <Col span={8}>col-8</Col>
		      <Col span={8}>col-8</Col>
		      <Col span={8}>col-8</Col>
		    </Row>
		    <Row>
		      <Col span={6}>col-6</Col>
		      <Col span={6}>col-6</Col>
		      <Col span={6}>col-6</Col>
		      <Col span={6}>col-6</Col>
		    </Row>
		  </div>
      </div>
    );
  }
}
export default Home;
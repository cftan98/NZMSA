import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, InputNumber } from 'antd';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Row justify='center' style={{marginTop: "20%"}}>
        <Col span={8}>
          <InputNumber min={0} max={9} />
        </Col>
        <Col span={8}>
          <InputNumber min={0} max={9} />
        </Col>
        <Col span={8}>
          <InputNumber min={0} max={9} />
        </Col>
      </Row>

    </div>
  );
}

export default App;

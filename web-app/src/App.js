import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Row justify='center' style={{marginTop: "20%"}}>
        <Col span={2}>
          <Counter />
        </Col>
        <Col span={2}>
          <Counter />
        </Col>
        <Col span={2}>
          <Counter />
        </Col>
      </Row>
    </div>
  );
}

export default App;

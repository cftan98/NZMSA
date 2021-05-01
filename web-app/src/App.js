import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Counter from './components/Counter';

const PASSCODE = 857;

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  return (
    <div>
      <Row justify='center' style={{marginTop: "20%"}}>
        <Col span={2}>
          <Counter num={value1} handleChange={(e) => setValue1(e)} />
        </Col>
        <Col span={2}>
          <Counter num={value2} handleChange={(e) => setValue2(e)} />
        </Col>
        <Col span={2}>
          <Counter num={value3} handleChange={(e) => setValue3(e)} />
        </Col>
      </Row>
    </div>
  );
}

export default App;

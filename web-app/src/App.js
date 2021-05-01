import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Image, notification } from 'antd';
import Lock from './verouillageautomatique10.png';
import UnLock from './verouillageautomatique5.png';
import Counter from './components/Counter';

const PASSCODE = 857;

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [pass, setPass] = useState(false);

  useEffect(() => {
    const result = value1 * 100 + value2 * 10 + value3
    if (result === PASSCODE) {
      setPass(true);
      notification['success']({
        message: 'Pass!',
        description: 'You have unlocked the lock!'
      });
    } else {
      setPass(false);
    }
  }, [value1, value2, value3])

  return (
    <div>
      <Row justify='center'  style={{ marginTop: "20%", marginBottom: '30px'}}>
        <h1>Welcome to my locker</h1>
      </Row>
      <Row justify='center'>
        <Col>
          <Counter num={value1} handleChange={(e) => setValue1(e)} />
        </Col>
        <Col>
          <Counter num={value2} handleChange={(e) => setValue2(e)} />
        </Col>
        <Col>
          <Counter num={value3} handleChange={(e) => setValue3(e)} />
        </Col>
      </Row>

      <br />
      <br />

      <Row justify='center'>
        <Col>
          {!pass ? <Image src={Lock} alt={"Locked!"} width="50px" /> : <Image src={UnLock} alt={"Unlocked!"} width="50px" />}
        </Col>
      </Row>
    </div>
  );
}

export default App;

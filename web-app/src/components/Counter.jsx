import React, { useState } from 'react';
import { InputNumber } from 'antd';

export default function Counter() {
    const [value, setValue] = useState(0);

    return (
        <InputNumber min={0} max={9} defaultValue={value} />
    )
}
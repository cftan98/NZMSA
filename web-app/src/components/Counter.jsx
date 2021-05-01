import React, { useState } from 'react';
import { InputNumber } from 'antd';

export default function Counter(props) {

    return (
        <InputNumber min={0} max={9} value={props.num} onChange={(e) => props.handleChange(e)} />
    )
}
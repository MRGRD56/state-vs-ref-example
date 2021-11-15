import React, {FC, useEffect, useState} from "react";
import NamedComponent from "./NamedComponent/NamedComponent";
import Text from "antd/es/typography/Text";
import {Button, Space} from "antd";

const VariableCounter: FC = () => {
    const [someState, setSomeState] = useState(123123);

    let count = 0;

    const incrementCount = () => {
        count++;
        console.log("VariableCounter count", count);
    };

    const reRender = () => {
        setSomeState(Math.random());
    };

    useEffect(() => {
        console.log("VariableCounter count", count);
    }, [someState]);

    return (
        <NamedComponent name="let">
            <Space direction="vertical">
                <Space direction="horizontal">
                    <Text>{count}</Text>
                    <Button onClick={incrementCount}>+1</Button>
                </Space>
                <Button onClick={reRender}>Re-render</Button>
                {someState}
            </Space>
        </NamedComponent>
    );
};

export default VariableCounter;
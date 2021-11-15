import React, {FC, useEffect, useRef, useState} from "react";
import NamedComponent from "./NamedComponent/NamedComponent";
import Text from "antd/es/typography/Text";
import {Button, Space} from "antd";

const RefCounter: FC = () => {
    const [someState, setSomeState] = useState(123123);

    const countRef = useRef(0);

    const incrementCount = () => {
        countRef.current++;
        console.log("RefCounter count", countRef.current);
    };

    const reRender = () => {
        setSomeState(Math.random());
    };

    useEffect(() => {
        console.log("RefCounter count", countRef.current);
    }, [someState]);

    return (
        <NamedComponent name="useRef">
            <Space direction="vertical">
                <Space direction="horizontal">
                    <Text>{countRef.current}</Text>
                    <Button onClick={incrementCount}>+1</Button>
                </Space>
                <Button onClick={reRender}>Re-render</Button>
                {someState}
            </Space>
        </NamedComponent>
    );
};

export default RefCounter;
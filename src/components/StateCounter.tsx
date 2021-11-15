import React, {FC, useState} from "react";
import {Button, Space} from "antd";
import Text from "antd/es/typography/Text";
import NamedComponent from "./NamedComponent/NamedComponent";

const StateCounter: FC = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(state => state + 1);
        console.log("StateCounter count", count);
    };

    return (
        <NamedComponent name="useState">
            <Space>
                <Text>{count}</Text>
                <Button onClick={incrementCount}>+1</Button>
            </Space>
        </NamedComponent>
    );
};

export default StateCounter;
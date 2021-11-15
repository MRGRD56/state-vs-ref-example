import React, {FunctionComponent} from "react";
import {Space} from "antd";
import "./NamedComponent.css";

interface Props {
    name: string;
}

const NamedComponent: FunctionComponent<Props> = ({name, children}) => {
    return (
        <Space direction="vertical" className="named-component">
            <div className="named-component-title">{name}</div>
            {children}
        </Space>
    );
};

export default NamedComponent;
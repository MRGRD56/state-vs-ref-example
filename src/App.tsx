import React, {FC} from "react";
import "./App.css";
import "antd/dist/antd.css";
import StateCounter from "./components/StateCounter";
import RefCounter from "./components/RefCounter";
import VariableCounter from "./components/VariableCounter";

const App: FC = () => {
    return (
        <div style={{display: "flex"}}>
            <StateCounter/>
            <RefCounter/>
            <VariableCounter/>
        </div>
    );
};

export default App;

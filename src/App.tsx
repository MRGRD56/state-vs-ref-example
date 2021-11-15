import React, {FC} from "react";
import "./App.css";
import "antd/dist/antd.css";
import StateCounter from "./components/StateCounter";
import RefCounter from "./components/RefCounter";
import VariableCounter from "./components/VariableCounter";
import RefUsage from "./components/RefUsage";

const App: FC = () => {
    return (
        <div>
            <div style={{display: "flex"}}>
                <StateCounter/>
                <RefCounter/>
                <VariableCounter/>
            </div>

            <RefUsage/>
        </div>
    );
};

export default App;

import React, {FC, useEffect, useRef, useState} from "react";

const RefUsage: FC = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const [value, setValue] = useState(0);

    useEffect(() => {
        const div = divRef.current;

        if (!div) return;

        setInterval(() => {
            setValue(div.offsetWidth);
        }, 100);
    }, []);

    return (
        <div style={divStyle}
            ref={divRef}>
            {value}
        </div>
    );
};

export default RefUsage;

const divStyle: React.CSSProperties = {
    width: "100%",
    height: "50px",
    background: "#263238",
    color: "#eceff1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px"
};
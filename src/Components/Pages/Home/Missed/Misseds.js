import React, { useEffect, useState } from "react";
import Missed from "./Missed";

const Misseds = () => {
    const [miss, setMiss] = useState([]);

    useEffect(() => {
        fetch("./missedData.json")
            .then((res) => res.json())
            .then((data) => setMiss(data));
    });
    return (
        <div className="mx-5 mt-4">
            <span className="banner-text ">You May Missed</span>
            <div className="row">
                {miss.map((misse) => (
                    <Missed misse={misse}></Missed>
                ))}
            </div>
        </div>
    );
};

export default Misseds;

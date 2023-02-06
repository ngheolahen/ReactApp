import React, { useState } from "react";
import { list_Region_2 } from "../../api/apiLogin";
const FormValidation = () => {
    const [data, setData] = useState(null);
    const shoot = async () => {
        const json = await list_Region_2();
        setData(json.token);
    }
    return (
        <>
            <h1>Redux selectToken: {sessionStorage.getItem("Authorization")}</h1>
            <h2>{sessionStorage.getItem("userID")}</h2>
            <p>{data}</p>
            <button onClick={shoot}>Take the Shot!</button>
        </>
    );
};

export default FormValidation;
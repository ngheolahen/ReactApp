import React, { useState } from "react";
import { list_Region_2 } from "../../api/apiLogin";
import LoadingPage from "../../isLoadingPage"
const FormValidation = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const shoot = async () => {
        setLoading(true)
        const json = await list_Region_2();
        setData(json.token);
        setLoading(false)
    }
    return (
        <>
            {LoadingPage(isLoading)}
            <h1>Token: {sessionStorage.getItem("Authorization")}</h1>
            <h1>User: {sessionStorage.getItem("userID")}</h1>
            <h1>{data}</h1>
            <button onClick={shoot}>Take the Shot!</button>
        </>
    );
};

export default FormValidation;
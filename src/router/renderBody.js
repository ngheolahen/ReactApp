import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BodyRight from "../components/_layout/body-right";
import FormValidation from "../components/Form/FormValidation";
import { useNavigate } from "react-router-dom";
function RenderBody() {
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("Authorization") === process.env.REACT_APP_Token_Login ||
            sessionStorage.getItem("Authorization") === null) {
            navigate("/login");
        }
    }, [navigate]);
    return (
        <>
            <Routes>
                <Route path="/" element={<BodyRight />} />
                <Route path="/FormValidation" element={<FormValidation />} />
            </Routes>
        </>
    );
}
export default RenderBody;

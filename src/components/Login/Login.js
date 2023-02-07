import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { apiListRegion, apiLogin } from "../../api/apiLogin";
import LoadingPage from "../../isLoadingPage"

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [dataRegion, setData] = useState([]);
    const [dataddlRegion, setValue] = useState({});
    const errors = { messageError: "Sai thông tin đăng nhập" };
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const handleSubmit = async (event) => {
        setLoading(true)
        event.preventDefault();
        var { username, password } = document.forms[0];
        const data = await apiLogin(username.value, password.value);
        if (data !== null) {
            sessionStorage.setItem("Authorization", data.token);
            sessionStorage.setItem("userID", username.value);
            navigate('/');
        } else {
            setErrorMessages({ name: "messageError", message: errors.messageError });
        }
        setLoading(false)
    };
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="col-12">
                <label className="form-check-label error">{errorMessages.message}</label>
            </div>
        );
    const getListRegion = async () => {
        setLoading(true)
        const region = await apiListRegion();
        setData(region);
        setLoading(false)
    }
    const ddlRegion_selected = (item) => {
        setValue(item.target.value);
        sessionStorage.setItem("regionID", item.target.value);
    };
    useEffect(() => {
        sessionStorage.clear();
        localStorage.clear();
        sessionStorage.setItem("Authorization", process.env.REACT_APP_Token_Login);
        sessionStorage.setItem("userID", process.env.REACT_APP_UserID);
        getListRegion();
    }, []);
    return (
        <>
            {LoadingPage(isLoading)}
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    {/* <div className="d-flex justify-content-center py-4">
                                        <a href="?" className="logo d-flex align-items-center w-auto">
                                            <img src={require("../../assets/img/Favicon-IDC.png" )} alt=""/>
                                            <span className="d-lg-block">OSS System Admin</span>
                                        </a>
                                    </div> */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                                <p className="text-center small">Enter your username & password to login</p>
                                            </div>
                                            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                                                <div className="col-12">
                                                    <label className="form-label" id="inputGroupPrepend">Tài khoản</label>
                                                    <input type="text" name="username" className="form-control" id="yourUsername" required />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">Mật khẩu</label>
                                                    <input type="password" name="password" className="form-control" id="yourPassword" required />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="labRegion" className="form-label">Regions</label>
                                                    <select className="form-select" id="ddlRegion" value={dataddlRegion} onChange={ddlRegion_selected} required>
                                                        {
                                                            dataRegion?.map((option) => (
                                                                <option key={option.reg_sn} value={option.reg_sn}>{option.reg_id}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                {renderErrorMessage("messageError")}
                                                <div className="col-12">
                                                    <input type="submit" className="btn btn-primary w-100" value={"Login"} />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="credits">
                                        Designed by <a target={"_blank"} href="https://viettelidc.com.vn/">Viettel IDC</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
export default Login;
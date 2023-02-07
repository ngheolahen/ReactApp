import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LoadingPage from "../../isLoadingPage"
function BodyRight() {
    const [isLoading, setLoaging] = useState(false);
    useEffect(() => {
        setLoaging(false)
    }, []);
    return (
        <>
            {LoadingPage(isLoading)}
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-12">
                        <div className="card top-selling overflow-auto">
                            <div className="card-body pb-0">
                                <h5 className="card-title">Top Selling <span>| Today</span></h5>
                                <h2>{sessionStorage.getItem("Authorization")}</h2>
                                {sessionStorage.getItem("regionID")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default BodyRight;
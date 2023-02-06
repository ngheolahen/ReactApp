import React from "react";
import instance from "./axios";
// const config = {
//     "Authorization": sessionStorage.getItem("Authorization") !== null ? sessionStorage.getItem("Authorization") : process.env.REACT_APP_Token_Login,
//     "userID": sessionStorage.getItem("userID") !== null ? sessionStorage.getItem("userID") : process.env.REACT_APP_UserID
// }
class DataService extends React.Component {
    // URL API - Body - Header
    getLogin = async (data) => {
        return await instance.post('/Login', data, {
            headers: {
                "Authorization": process.env.REACT_APP_Token_Login,
                "userID": process.env.REACT_APP_UserID
            }
        });
    }
    getListRegion = async () => {
        return await instance.post('/list_Region');
    }
    list_Region_2 = async () => {
        return await instance.post('/list_Region_2', null, {
            headers: {
                "Authorization": sessionStorage.getItem("Authorization"),
                "userID": sessionStorage.getItem("userID")
            }
        });
    }
}
export default new DataService();
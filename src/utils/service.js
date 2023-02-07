import React from "react";
import instance from "./axios";
import authHeader from "./auth-Header";

class DataService extends React.Component {
    // URL API - Body - Header
    getLogin = async (data) => {
        return await instance.post('/Login', data, { headers: authHeader() });
    }
    getListRegion = async () => {
        return await instance.post('/list_Region');
    }
    list_Region_2 = async () => {
        return await instance.post('/list_Region_2', null, { headers: authHeader() });
    }
}
export default new DataService();
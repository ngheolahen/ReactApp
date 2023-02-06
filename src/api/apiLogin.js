import DataService from "../utils/service";

const apiLogin = async (username, password) => {
    const data = {
        username: username,
        password: password
    }
    const response = await DataService.getLogin(data);
    return response;
}
const apiListRegion = async () => {
    const response = await DataService.getListRegion();
    return response;
}
const list_Region_2 = async () => {
    const response = await DataService.list_Region_2();
    return response;
}

export { apiListRegion, apiLogin, list_Region_2 }
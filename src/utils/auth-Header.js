export default function authHeader() {
    return {
        "Authorization": sessionStorage.getItem("Authorization"),
        "userID": sessionStorage.getItem("userID")
    };
}
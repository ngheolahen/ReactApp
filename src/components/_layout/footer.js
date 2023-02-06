import { Outlet } from "react-router-dom";
function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>Viettel IDC</span></strong>
                </div>
            </footer>
            <Outlet />
        </>
    );
}
export default Footer;
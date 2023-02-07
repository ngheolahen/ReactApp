import "./index.css"
function LoadingPage(isLoading) {
    if (isLoading) {
        return (
            <div id="loader-wrapper">
                <div id="loader"></div>
            </div>
        );
    }
}
export default LoadingPage;
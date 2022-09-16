import { useLocation } from "react-router-dom";

export default function ErrorScreen() {

    const location = useLocation();

    return (
        <div id="error-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h1>Oops!</h1>
            <p>Sorry, an error has occurred.</p>
            <p>
                No match for <code>{location.pathname}</code>
            </p>
        </div>
    );
}
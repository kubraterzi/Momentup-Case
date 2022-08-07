import {MainContextProvider} from "./context/MainContext";
import Router from "./router/Router";

const App = () => {

    return (
        <MainContextProvider>
                <Router />
        </MainContextProvider>

    );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
// import CreatePhone from "./components/CreatePhone";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <CreatePhone /> */}

        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;

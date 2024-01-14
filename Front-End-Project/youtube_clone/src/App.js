import "./App.css";
import Head from "./components/Head"

import Body from "./components/Body";
import Store from "./Utils/Store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={Store}>
    <div className="">
      <Head/>
      <Body/>

    </div>
    </Provider>
  );
}

export default App;

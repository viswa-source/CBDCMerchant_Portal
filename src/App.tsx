import "./App.css";
import RouteComponent from "./RouteComponent";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <RouteComponent />
    </Provider>
  );
}

export default App;

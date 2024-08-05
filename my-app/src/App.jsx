import Body from "./Compenents/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="bg-gradient-to-br from-blue-200 to-purple-900 h-screen">
        <Body />
      </div>
    </Provider>
  );
};

export default App;

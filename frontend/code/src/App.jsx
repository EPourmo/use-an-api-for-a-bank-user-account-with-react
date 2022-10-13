import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={<User />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

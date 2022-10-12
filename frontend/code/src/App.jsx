import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;

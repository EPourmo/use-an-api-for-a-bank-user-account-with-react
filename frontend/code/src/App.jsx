import Homepage from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./routing/ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<SignIn />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<User />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

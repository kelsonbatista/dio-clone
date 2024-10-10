import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/auth";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/pages/DashBoard/DashBoard";
import LoginPage from "./components/pages/login/LoginPage";
import PostEditorPage from "./components/pages/PostEditor/PostEditorPage";
import Profile from "./components/pages/Profile/Profile";
import SignupPage from "./components/pages/singup/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-post" element={<PostEditorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

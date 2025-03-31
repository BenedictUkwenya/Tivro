import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SignupPage from "./SignupPage/Signup";
import LoginPage from "./LoginPage/Login";
import AboutUsPage from "./AboutPage/About";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </>
  );
}

export default App;

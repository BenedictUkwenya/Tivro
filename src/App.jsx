import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SignupPage from "./SignupPage/Signup";
import LoginPage from "./LoginPage/Login";
import AboutUsPage from "./AboutPage/About";
import CareersPage from "./CareerPage/CareerPage";
import ContactUsPage from "./ContactPage/Contact";
import FAQPage from "./FAQSection/FAQSection";
import TirvoAi from "./TirvoAi/TirvoAi";
import MainCareerPage from "./MainCareerPage/MainCareerPage";
import TermsAndConditionsPage from "./TermsAndConditions/TermsAndCondition";
import TermsHeader from "./TermsAndConditions/TermsAndCondition";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/partners" element={<CareersPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/ai" element={<TirvoAi />} />
        <Route path="careers" element={<MainCareerPage />} />
        <Route path="terms" element={<TermsHeader />} />
      </Routes>
    </>
  );
}

export default App;

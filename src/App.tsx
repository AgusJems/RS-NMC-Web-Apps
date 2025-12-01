import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import News from "./pages/News/News";
import Doctor from "./pages/Doctor/Doctor";
import Testimonial from "./pages/Testimonial/Testimonial";
import Poly from "./pages/Poly/Poly";
import LandingLayout from "./layout/LandingLayout";
import HomeLanding from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import StoryPage from "./components/SubNavbar/Profile/Story";
import VisionMissionPage from "./components/SubNavbar/Profile/VisionMission";
import QualityIndicatorPage from "./components/SubNavbar/Profile/QualityIndicator";
import DoctorPage from "./components/SubNavbar/Doctor/DoctorPage";
import DoctorDetailPage from "./components/SubNavbar/Doctor/DoctorDetailPage";
import NewsPage from "./components/SubNavbar/News/NewsPage";
import NewsDetailPage from "./components/SubNavbar/News/NewsDetailPage";
import OutPatientPage from "./components/SubNavbar/Service/OutPatientPage";
import InPatientPage from "./components/SubNavbar/Service/InPatientPage";
import EmergencyCarePage from "./components/SubNavbar/Service/EmergencyCarePage";
import SupportPage from "./components/SubNavbar/Service/SupportPage";
import Contact from "./landing/Contact/Contact";
import TestimoniForm from "./landing/Testimonial/TestimoniForm";
import OutPatientDetailPage from "./components/SubNavbar/Service/OutPatientDetailPage";
import Partner from "./pages/Partner/Partner";
import Inpatient from "./pages/Inpatient/Inpatient";
import Emergency from "./pages/Emergency/Emergency";
import Support from "./pages/Support/Support";
import Carousel from "./pages/Carousel/Carousel";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/signin" replace />} />
          {/* Dashboard Layout */}
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/blank" element={<Blank />} />

            <Route path="/news" element={<News />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/poly" element={<Poly />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/inpatient" element={<Inpatient />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/support" element={<Support />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/carousel" element={<Carousel />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<LandingLayout />}>
            <Route path="/landing" element={<HomeLanding />} />
            <Route path="/profile/story" element={<StoryPage />} />
            <Route path="/profile/visi-misi" element={<VisionMissionPage />} />
            <Route
              path="/profile/quality-indicators"
              element={<QualityIndicatorPage />}
            />
            <Route path="/doctorpage" element={<DoctorPage />} />
            <Route path="/doctorpage/:id" element={<DoctorDetailPage />} />
            <Route path="/newspage" element={<NewsPage />} />
            <Route path="/newspage/:id" element={<NewsDetailPage />} />
            <Route path="/service/outpatient" element={<OutPatientPage />} />
            <Route
              path="/service/outpatient/:id"
              element={<OutPatientDetailPage />}
            />
            <Route path="/service/inpatient" element={<InPatientPage />} />
            <Route
              path="/service/emergency-care"
              element={<EmergencyCarePage />}
            />
            <Route path="/service/support" element={<SupportPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimoni" element={<TestimoniForm />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

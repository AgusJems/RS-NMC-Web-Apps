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
import Complaint from "./pages/Complaint/Complaint";
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

export default function App() {
  useEffect(() => {
      AOS.init({ offset: 100, duration: 600, easing: "ease-in-sine", delay: 100 });
    }, []);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/blank" element={<Blank />} />

            <Route path="/news" element={<News />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/poly" element={<Poly />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/testimonial" element={<Testimonial />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<LandingLayout />}>
            <Route path="/landing" element={<HomeLanding />} />
            <Route path="/profile/story" element={<StoryPage />} />
            <Route path="/profile/visi-misi" element={<VisionMissionPage />} />
            <Route path="/profile/quality-indicators" element={<QualityIndicatorPage />} />
            <Route path="/doctorpage" element={<DoctorPage />} />
            <Route path="/doctorpage/:id" element={<DoctorDetailPage/>} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />


        </Routes>
      </Router>
    </>
  );
}

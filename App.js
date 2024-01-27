// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './Common/ErrorPage';

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Routes, Route, useLocation, Navigate} from 'react-router-dom';
import OrganizationPage from './School/Pages/OrganizationPage/OrganizationPage';
import Contact from "./School/Pages/Contact/Contact";
import EventGallery from "./School/Pages/EventGallery/EventGallery";
import EventCalendar from "./School/Pages/EventCalendar/EventCalendar";
import FormSubmissions from './School/Pages/FormSubmittion/FormSubmissions';
import OfflineActivities from './School/Pages/OfflineActivities/OfflineActivities';
import OnlineActivities from './School/Pages/OnlineActivities/OnlineActivities';
import ActivityDetails from './School/Components/AvtivityDetails/ActivityDetails';
import SchoolNavbar from "./School/Components/SchoolNavbar/SchoolNavbar";
import About from './Pages/About/About';
import SignUp from './Pages/SignUp/SignUp';
import School_logout from "./School/Components/School logout/school_logout";
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import YourSchool from './Student/Pages/YourSchool/YourSchool';
import Dashboard from './Student/Pages/Dashboard/Dashboard';
import Profile from './Student/Pages/Profile/Profile'
import StudentNavbar from './Student/Components/StudentNavbar/StudentNavbar';
import SuperadminNavbar from "./SuperAdmin/SuperadminNavbar";
import ContactUs from './Pages/ContactUs/ContactUs';
import OnlineActivity from './Pages/ExtraCurricularActivity/OnlineActivity/OnlineActivity';
import OfflineActivity from './Pages/ExtraCurricularActivity/OfflineActivity/OfflineActivity';

import RegisteredSchools from './Pages/RegisteredSchools/RegisteredSchools';
import ActivityPosts from './Pages/Posts/ActivityPosts/ActivityPosts';
import PerformancePosts from './Pages/Posts/PerformancePosts/PerformancePosts';
import SocialMediaPosts from './Pages/Posts/SocialMediaPosts/SocialMediaPosts';
import Participation from './Student/Pages/Participation/Participation';
import LiveActivityStudent from './Student/Pages/LiveActivity/LiveActivityStudent';
import ReviewModal from "./School/Components/ReviewModal/Reviewmodal";
import Services from "./School/Pages/Services/Services";
import Gallery from "./School/Pages/Gallery/Gallery";
import StudentManagement from "./School/Pages/StudentManagement/StudentManagement";
import SchoolDashboard from"./School/Components/DashBoard/Dashboard";
import StudentList from "./School/Pages/StudentList/StudentList";
import StudentApplication from"./School/Pages/StudentApplication/StudentApplications"
import SchoolProfile from "./School/Pages/SchoolProfile/Schoolprofile";
import EventCreation from "./SuperAdmin/SuperPage/EventCreation/EventCreation";
import SuperAdmin from "./SuperAdmin/SuperPage/Superadmin";
import EventManager from "./SuperAdmin/SuperPage/EventManager/EventManager";
import OfflineEventCreator from "./SuperAdmin/SuperPage/OfflineEventCreation/Offline Events Creations";
import OnlineEventCreation from "./SuperAdmin/SuperPage/OnlineEventCreation/OnlineEventCreation";
import LearningLibraryParticipation from "./School/Pages/LearningLibraryParticipation/LearningLibraryParticipation";
import ForgotPassword from "./Pages/SignIn/ForgotPassword";
// <<<<<<< Updated upstream
import PasswordReset from "./Pages/SignIn/PasswordReset";
// =======
import * as errorRoutes from "react-table/src/filterTypes";
// >>>>>>> Stashed changes
function RenderNavbar() {
  const location = useLocation();


  const studentNavbarRoutes = ["/yourschool", "/participation", "/dashboard", "/profile","/studentevents"];


  // Define routes where the student navbar should be displayed
  const SchoolNavbarRoutes = ["/studentapplications","/learninglibraryparticipationdetails","/schoolprofile","/studentlist","/schooldashboard","/gallery","/online-activities","/activity","/offline-activities","/form-submissions","/school", "/Events", "/services", "/schoolcontact", "/schoolprofile","/studentmanagement"];
  const SuperadminNavbarRoutes = ["/eventmanager","/onlineeventcreation","/offlineeventcreation","/superadmin","/planaevent","/event-gallery","/eventcreation"];
  if (studentNavbarRoutes.includes(location.pathname.toLowerCase())) {
    return <StudentNavbar />;
  }
  else if (SchoolNavbarRoutes.includes(location.pathname.toLowerCase())) {
    return <SchoolNavbar/>;
  }
  else if (SuperadminNavbarRoutes.includes(location.pathname.toLowerCase())) {
    return <SuperadminNavbar/>;
  }
  else {
    return <Navbar />;
  }
  // else if (errorRoutes.includes(location.pathname.toLowerCase())) {//changes
  //   return <ErrorPage />;
  // }
}

function App() {
  // const [errorRoutes, setErrorRoutes] = React.useState([]);
  //
  // React.useEffect(() => {
  //   // Define routes where the ErrorPage should be displayed
  //   setErrorRoutes(["/error", "/your-other-error-route"]);
  //
  //   // Additional useEffect cleanup, if needed
  //
  // }, []);
  return (
      <div>
        <BrowserRouter>
          <RenderNavbar />
          <Routes>
            <Route path="/schoollogout" element={<School_logout/>}/>
            <Route path="/eventmanager" element={<EventManager/>}/>
            <Route path="/offlineeventcreation" element={<OfflineEventCreator/>}/>
            <Route path="/onlineeventcreation" element={<OnlineEventCreation/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/school" element={<OrganizationPage />} />
            <Route path="/form-submissions" element={<FormSubmissions />} />
            <Route path="/offline-activities" element={<OfflineActivities />} />
            <Route path="/online-activities" element={<OnlineActivities />} />
            <Route path="/event-gallery" element={<EventGallery />} />
            <Route path="/planaevent" element={<EventCalendar />} />
            <Route path="/schoolcontact" element={<Contact />} />
            <Route path="/activity" element={<ActivityDetails/>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/registeredschools" element={<RegisteredSchools />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/PasswordReset" element={<PasswordReset />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/yourschool" element={<YourSchool />} />
            <Route path="/participation" element={<Participation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/onlineactivities" element={<OnlineActivity />} />
            <Route path="/offlineactivities" element={<OfflineActivity />} />

            <Route path="/activityposts" element={<ActivityPosts />} />
            <Route path="/performanceposts" element={<PerformancePosts />} />
            <Route path="/socialmediaposts" element={<SocialMediaPosts />} />
            <Route path="/review" element={<ReviewModal />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/studentmanagement" element={<StudentManagement/>} />
            <Route path="/schooldashboard" element={<SchoolDashboard/>} />
            <Route path="/studentevents" element={<LiveActivityStudent />} />
            <Route path="/studentlist" element={<StudentList/>} />
            <Route path="/schoolprofile" element={<SchoolProfile/>} />
            <Route path="/studentapplications" element={<StudentApplication/>} />
            <Route path="/superadmin" element={<SuperAdmin/>}/>
            <Route path="/eventcreation" element={<EventCreation/>}/>
            <Route path="/learninglibraryparticipationdetails" element={<LearningLibraryParticipation/>} />

            <Route path="*" element={<Navigate to="/error" />} />
            {/*<Route path="/" element={<Home />} />*/}
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;


//import UpcomingActivity from './Pages/ExtraCurricularActivity/UpcomingActivity/UpcomingActivity';
//  <Route path="/upcomingactivity" element={<UpcomingActivity />} />
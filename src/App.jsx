import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import "./App.css";
import HomePage from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Notifications from "./Pages/Notifications/Notifications";
import TripHistory from "./Pages/TripHistory/TripHistory";
import Trip from "./Pages/Trip/Trip";
import Reports from "./Pages/Reports/Reports";
import ReportItem from "./Pages/Reports/ReportItem";
import Emergency from "./Pages/Emergency/Emergency";
import Community from "./Pages/Community/Community";
import DashboardLayout from "./DashboardLayout";
import ReportHappening from "./Pages/ReportHappening/ReportHappening";
import FavoriteRoutes from "./Pages/FavoriteRoutes/FavoriteRoutes";
import FeedBackAndRating from "./Pages/FeedBackAndRating/FeedBackAndRating";
import Settings from "./Pages/Settings/Settings";
import Invite from "./Pages/Invite/Invite";
import PasswordChange from "./Pages/Settings/PasswordChange";
import DeleteAccount from "./Pages/Settings/DeleteAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="trip" element={<Trip />} />
          <Route path="reports" element={<Reports />} />
          <Route path="reports/report-item" element={<ReportItem />} />
          <Route path="community" element={<Community />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="trip-history" element={<TripHistory />} />
          <Route path="report-happening" element={<ReportHappening />} />
          <Route path="favorite-routes" element={<FavoriteRoutes />} />
          <Route path="feedback-and-rating" element={<FeedBackAndRating />} />
          <Route path="settings" element={<Settings />} />
          <Route path="invite" element={<Invite />} />
          <Route
            path="/dashboard/settings/change-password"
            element={<PasswordChange />}
          />
          <Route
            path="/dashboard/settings/delete-account"
            element={<DeleteAccount />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

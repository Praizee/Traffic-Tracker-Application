import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
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
import FavoriteRoutes from "./Pages/FavoriteRoutes/FavoriteRoutes"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
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
          <Route path="report-happening" element= {<ReportHappening/>} />
          <Route path="favorite-routes" element={<FavoriteRoutes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

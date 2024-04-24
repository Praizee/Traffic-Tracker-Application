import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../Layouts/PublicLayout";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import AuthRoute from "./AuthRoute";

import HomeLayout from "../HomeLayout";
import "../App.css";

import HomePage from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import Notifications from "../Pages/Notifications/Notifications";
import TripHistory from "../Pages/TripHistory/TripHistory";
import Trip from "../Pages/Trip/Trip";
import Reports from "../Pages/Reports/Reports";
import ReportItem from "../Pages/Reports/ReportItem";
import Emergency from "../Pages/Emergency/Emergency";
import Community from "../Pages/Community/Community";
import ReportHappening from "../Pages/ReportHappening/ReportHappening";
import FavoriteRoutes from "../Pages/FavoriteRoutes/FavoriteRoutes";
import FeedBackAndRating from "../Pages/FeedBackAndRating/FeedBackAndRating";
import Settings from "../Pages/Settings/Settings";
import Invite from "../Pages/Invite/Invite";
import PasswordChange from "../Pages/Settings/PasswordChange";
import DeleteAccount from "../Pages/Settings/DeleteAccount";
import NotFoundPage from "../Pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/" element={<PublicLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/dashboard" element={<AuthenticatedLayout />}>
        {/* <Route index element={<Dashboard />} /> */}
        {/* change this back to being the index element when the authentication endpoint is setup */}
        <Route
          index
          element={
            <AuthRoute>
              <Dashboard />
            </AuthRoute>
          }
        />

        <Route
          path="profile"
          element={
            <AuthRoute>
              <Profile />
            </AuthRoute>
          }
        />
        <Route
          path="notifications"
          element={
            <AuthRoute>
              <Notifications />
            </AuthRoute>
          }
        />
        <Route
          path="trip"
          element={
            <AuthRoute>
              <Trip />
            </AuthRoute>
          }
        />
        <Route
          path="reports"
          element={
            <AuthRoute>
              <Reports />
            </AuthRoute>
          }
        />
        <Route
          path="reports/report-item"
          element={
            <AuthRoute>
              <ReportItem />
            </AuthRoute>
          }
        />
        <Route
          path="community"
          element={
            <AuthRoute>
              <Community />
            </AuthRoute>
          }
        />
        <Route
          path="emergency"
          element={
            <AuthRoute>
              <Emergency />
            </AuthRoute>
          }
        />
        <Route
          path="trip-history"
          element={
            <AuthRoute>
              <TripHistory />
            </AuthRoute>
          }
        />
        <Route
          path="report-happening"
          element={
            <AuthRoute>
              <ReportHappening />
            </AuthRoute>
          }
        />
        <Route
          path="favorite-routes"
          element={
            <AuthRoute>
              <FavoriteRoutes />
            </AuthRoute>
          }
        />
        <Route
          path="feedback-and-rating"
          element={
            <AuthRoute>
              <FeedBackAndRating />
            </AuthRoute>
          }
        />
        <Route
          path="settings"
          element={
            <AuthRoute>
              <Settings />
            </AuthRoute>
          }
        />
        <Route
          path="invite"
          element={
            <AuthRoute>
              <Invite />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard/settings/change-password"
          element={
            <AuthRoute>
              <PasswordChange />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard/settings/delete-account"
          element={
            <AuthRoute>
              <DeleteAccount />
            </AuthRoute>
          }
        />
      </Route>

      {/* This is the catch-all route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

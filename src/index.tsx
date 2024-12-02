import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./pages/home";
import { WeeklyWorkout } from "./pages/weeklyWorkout";
import { SundayWorkout } from "./pages/form/sundayWorkout";
import { MondayWorkout } from "./pages/form/mondayWorkout";
import { TuesdayWorkout } from "./pages/form/tuesdayWorkout";
import { WednesdayWorkout } from "./pages/form/wednesdayWorkout";
import { ThursdayWorkout } from "./pages/form/thursdayWorkout";
import { FridayWorkout } from "./pages/form/fridayWorkout";
import { SaturdayWorkout } from "./pages/form/saturdayWorkout";
import { MuscularMass } from "./pages/KnowMore/muscularMass";
import { WeightLoss } from "./pages/KnowMore/WeightLoss";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { StrengthTraining } from "./pages/KnowMore/StrengthTraining";
import { ResistanceTraining } from "./pages/KnowMore/ResistanceTraining";


const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<App />}>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="*" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/weekly-workout" element={isAuthenticated ? <WeeklyWorkout /> : <Navigate to="/login" />} />
          <Route path="/sunday-workout" element={isAuthenticated ? <SundayWorkout /> : <Navigate to="/login" />} />
          <Route path="/monday-workout" element={isAuthenticated ? <MondayWorkout /> : <Navigate to="/login" />} />
          <Route path="/tuesday-workout" element={isAuthenticated ? <TuesdayWorkout /> : <Navigate to="/login" />} />
          <Route path="/wednesday-workout" element={isAuthenticated ? <WednesdayWorkout /> : <Navigate to="/login" />} />
          <Route path="/thursday-workout" element={isAuthenticated ? <ThursdayWorkout /> : <Navigate to="/login" />} />
          <Route path="/friday-workout" element={isAuthenticated ? <FridayWorkout /> : <Navigate to="/login" />} />
          <Route path="/saturday-workout" element={isAuthenticated ? <SaturdayWorkout /> : <Navigate to="/login" />} />
          <Route path="/know-more/muscular-mass" element={isAuthenticated ? <MuscularMass /> : <Navigate to="/login" />} />
          <Route path="/know-more/weight-loss" element={isAuthenticated ? <WeightLoss /> : <Navigate to="/login" />} />
          <Route path="/know-more/strength-training" element={isAuthenticated ? <StrengthTraining /> : <Navigate to="/login" />} />
          <Route path="/know-more/resistance-training" element={isAuthenticated ? <ResistanceTraining /> : <Navigate to="/login" />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

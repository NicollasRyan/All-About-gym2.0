import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/weekly-workout" element={<WeeklyWorkout />} />
      <Route path="/sunday-workout" element={<SundayWorkout />} />
      <Route path="/monday-workout" element={<MondayWorkout />} />
      <Route path="/tuesday-workout" element={<TuesdayWorkout />} />
      <Route path="/wednesday-workout" element={<WednesdayWorkout />} />
      <Route path="/thursday-workout" element={<ThursdayWorkout />} />
      <Route path="/friday-workout" element={<FridayWorkout />} />
      <Route path="/saturday-workout" element={<SaturdayWorkout />} />
      <Route path="/know-more/muscular-mass" element={<MuscularMass />} />
      <Route path="/know-more/weight-loss" element={<WeightLoss />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

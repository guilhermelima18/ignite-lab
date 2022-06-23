import { Route, Routes } from "react-router-dom";
import Event from "../pages/Event";
import Login from "../pages/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
};

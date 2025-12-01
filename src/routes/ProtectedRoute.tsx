import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");
  const keep = localStorage.getItem("keepLoggedIn");

  if (!token && !keep) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
}

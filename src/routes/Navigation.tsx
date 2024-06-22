import { Suspense } from "react";
import { BrowserRouter, NavLink, Navigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <div style={{ padding: "20px" }}>
              <img src={logo} alt="React Logo" style={{ width: "100px" }} />
            </div>

            <ul>
              {routes?.map((route) => (
                <li key={route.to}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes?.map((route) => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              ></Route>
            ))}
            <Route
              path="*"
              element={<Navigate to={routes[0].to} replace />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

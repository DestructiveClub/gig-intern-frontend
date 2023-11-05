import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Courses from "views/admin/courses";
import Profile from "views/admin/profile";

// Icon Imports
import { MdHome, MdPerson, MdBook } from "react-icons/md";

const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Courses",
    layout: "/admin",
    path: "courses",
    icon: <MdBook className="h-6 w-6" />,
    component: <Courses />,
    secondary: true,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
];
export default routes;

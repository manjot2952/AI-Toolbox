import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import {
  Home,
  TrendingUp,
  Heart,
  BrainCircuit,
  PenTool,
  Scissors,
  Video,
  Image as ImageIcon,
  Music,
  Code,
  BarChart,
  LogIn,
  UserPlus,
  LogOut,
  User,
} from "lucide-react";

const menuItem =
  "flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 text-gray-700 hover:bg-orange-200/60";

const menuItemActive =
  "flex items-center gap-3 px-4 py-2 rounded-xl bg-orange-400 text-white shadow-md";

export default function Sidebar() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#f9f2e8] border-r border-orange-200 p-5 overflow-y-auto shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <BrainCircuit size={24} className="text-orange-500" />
        <h2 className="text-2xl font-bold text-gray-800">
          AI Toolbox
        </h2>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <Home size={18} />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/trending"
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <TrendingUp size={18} />
          <span>Trending</span>
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <Heart size={18} />
          <span>Favorites</span>
        </NavLink>

        <NavLink
          to="/insights"
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <BrainCircuit size={18} />
          <span>AI Insights</span>
        </NavLink>
      </nav>

      {/* Categories */}
      <p className="text-xs font-semibold text-gray-500 mt-8 mb-3 px-2">
        CATEGORIES
      </p>

      <nav className="space-y-2">
        <NavLink
          to="/writing-tools"
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <PenTool size={18} />
          <span>Writing Tools</span>
        </NavLink>

        <NavLink
          to="/editing-tools"
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <Scissors size={18} />
          <span>Editing Tools</span>
        </NavLink>

        <NavLink
          to="/video-tools"
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <Video size={18} />
          <span>Video Creation</span>
        </NavLink>

        <NavLink
          to="/image-tools"
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <ImageIcon size={18} />
          <span>Image Generation</span>
        </NavLink>

        <NavLink
          to="/audio-tools"
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <Music size={18} />
          <span>Audio Tools</span>
        </NavLink>

        <NavLink
          to="/code-tools"
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <Code size={18} />
          <span>Code Assistants</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <BarChart size={18} />
          <span>Analytics</span>
        </NavLink>
      </nav>

      {/* Authentication Section */}
      <div className="mt-8 border-t border-orange-200 pt-4">
        {!isAuthenticated ? (
          <div className="space-y-2">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? menuItemActive : menuItem
              }
            >
              <LogIn size={18} />
              <span>Login</span>
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? menuItemActive : menuItem
              }
            >
              <UserPlus size={18} />
              <span>Register</span>
            </NavLink>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 px-2 mb-3">
              <User size={18} className="text-orange-500" />
              <div>
                <p className="text-xs text-gray-500">
                  Logged in as
                </p>
                <p className="font-semibold text-gray-800">
                  {user?.name}
                </p>
              </div>
            </div>

            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-red-600 hover:bg-red-50 transition"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
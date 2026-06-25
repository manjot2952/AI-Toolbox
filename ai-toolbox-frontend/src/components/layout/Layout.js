import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex min-h-screen">

      {/* FIXED SIDEBAR */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow overflow-y-auto z-40">
        <Sidebar />
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="ml-64 flex-1 min-h-screen bg-[#fffaf0] overflow-x-hidden">

        {/* CONTENT AREA */}
        <main className="p-6 transition-colors duration-300">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

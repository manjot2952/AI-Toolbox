import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Trending from './pages/Trending';
import Favorites from './pages/Favorites';
import Insights from './pages/Insights';
import WritingTools from './pages/WritingTools';
import EditingTools from './pages/EditingTools';
import VideoTools from './pages/VideoTools';
import ImageTools from './pages/ImageTools';
import AudioTools from './pages/AudioTools';
import CodeTools from './pages/CodeTools';
import Analytics from './pages/Analytics';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Registration';
import CategoryPage from './pages/CategoryPage';  

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      {
        path: 'trending',
        element: (
          <ProtectedRoute>
            <Trending />
          </ProtectedRoute>
        ),
      },

      {
        path: 'favorites',
        element: (
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        ),
      },

      {
        path: 'insights',
        element: (
          <ProtectedRoute>
            <Insights />
          </ProtectedRoute>
        ),
      },
      
      {path: "category/:id",
        element: <CategoryPage />
      }
      ,
      // { path: 'writing-tools', element: <WritingTools /> },
      // { path: 'editing-tools', element: <EditingTools /> },
      // { path: 'video-tools', element: <VideoTools /> },
      // { path: 'image-tools', element: <ImageTools /> },
      // { path: 'audio-tools', element: <AudioTools /> },
      // { path: 'code-tools', element: <CodeTools /> },
      // { path: 'analytics', element: <Analytics /> },
    ],
  },

  // Auth Pages (No Layout)
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

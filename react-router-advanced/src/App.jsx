import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import UserProfile from './components/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import BlogPost from './components/BlogPost';


function App() {
  const [count, setCount] = useState(0)
  const isAuthenticated = false;

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="/profile/*" element={<Profile />}>
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>}/>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
                <Route path="/profile/:id" element={<UserProfile />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                </Route>;
            </Routes>
      </Router>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

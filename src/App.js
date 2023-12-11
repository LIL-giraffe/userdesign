// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from './components/Navbar';
import Layout from "./components/Layout";
// import Sidebar from './components/Sidebar';
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import Application from './components/Application'
import Message from './components/Message'
import Statistics from './components/Statistics'
import News from './components/News'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="search" element={<Search />} />
          <Route path="applications" element={<Application/>} />
          <Route path="message" element={<Message/>} />
          <Route path="statistics" element={<Statistics/>} />
          <Route path="news" element={<News/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

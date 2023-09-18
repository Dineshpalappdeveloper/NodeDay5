import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import DashBoard from './component/DashBoard';
import Register from './component/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

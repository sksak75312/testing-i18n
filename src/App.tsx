import { Outlet, Link } from 'react-router';
import './App.css';

function App() {
  return (
    <>
      <Link to="/zh-hant">繁體中文</Link>
      <Link to="/en">English</Link>
      <Outlet />
    </>
  );
}

export default App;

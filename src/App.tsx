import { useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { lng } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng, i18n]);
  return (
    <>
      <div>
        <Link to="/zh-hant">
          <button type="button">繁體中文</button>
        </Link>

        <Link to="/en">
          <button type="button">English</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;

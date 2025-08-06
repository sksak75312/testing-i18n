import { useState, useEffect } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const [translationPath, setTranslationPath] = useState('');
  const { lng } = useParams();
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    i18n.changeLanguage(lng);

    setTranslationPath(
      pathname
        .split('/')
        .filter((_, i) => i >= 2)
        .join('/')
    );
  }, [lng, i18n, pathname]);
  return (
    <>
      <div>
        <Link to={`/zh-hant/${translationPath}`}>
          <button type="button">繁體中文</button>
        </Link>

        <Link to={`/en/${translationPath}`}>
          <button type="button">English</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;

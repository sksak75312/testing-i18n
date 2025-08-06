import { useState, useEffect } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const [translationPath, setTranslationPath] = useState('');
  const { lng } = useParams();
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  // 取得參數，使用 i18n 方法改變語言
  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng, i18n, pathname]);

  // 取得參數重新組成新的路由
  useEffect(() => {
    const processPath = pathname
      .split('/')
      .filter((_, i) => i > 1)
      .join('/');

    setTranslationPath(processPath ? `/${processPath}` : '');
  }, [pathname]);

  return (
    <>
      <div style={{ border: '1px solid white' }}>
        <h2>Translation</h2>
        <Link to={`/zh-hant${translationPath}`}>
          <button type="button">繁體中文</button>
        </Link>

        <Link to={`/en${translationPath}`}>
          <button type="button">English</button>
        </Link>
      </div>

      <div style={{ border: '1px solid black' }}>
        <h2>Navigate</h2>
        <Link to={`/${lng}`}>
          <button type="button">Home</button>
        </Link>
        <Link to={`/${lng}/products`}>
          <button type="button">Products</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;

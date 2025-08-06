import { useTranslation } from 'react-i18next';

export default function Products() {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('products')}</p>
    </>
  );
}

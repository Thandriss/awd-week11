import { useTranslation } from 'react-i18next';

function MyContainer() {
  const { t } = useTranslation();

  return (
    <div>
        {t('part3')}
    </div>
  )
}

export default MyContainer;
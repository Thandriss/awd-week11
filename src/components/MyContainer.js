import { withTranslation } from 'react-i18next';

function MyContainer({ t }) {

  return (
    <div>
        {t('This is the front page')}
    </div>
  )
}

export default withTranslation()(MyContainer)
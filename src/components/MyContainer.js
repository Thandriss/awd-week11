import { useState } from "react"
import i18n from "./i18n.js";
import { withTranslation } from 'react-i18next';

function MyContainer({ t }) {

  return (
    <div>
        {t('This is the front page')}
    </div>
  )
}

export default withTranslation()(MyContainer)
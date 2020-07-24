import { useIntl } from 'gatsby-plugin-intl'

const useTranslations = ( pageKey ) => {
    const intl = useIntl();
    let translatedText = require(`../intl/${intl.locale}.json`);
    return translatedText[pageKey];
}

export default useTranslations;
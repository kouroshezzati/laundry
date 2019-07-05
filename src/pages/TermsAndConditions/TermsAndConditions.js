import React, { Component } from 'react';
import Page from '../index';
import { translate } from 'react-i18next';
import Duch from '../PrivacyPolicy/PrivacyPolicyTextDu';

class TermsAndConditions extends Component {
  render() {
    const { t } = this.props;
    return (
      <Page>
        <div className="main-section align-content-center flex-wrap fancy-bg">
          <div className="article mx-auto p-2">
            {t('termsandconditions.message') === 'english' && <Duch />}
            {t('termsandconditions.message') === 'duch' && <Duch />}
          </div>
        </div>
      </Page>
    );
  }
}

export default translate('translations')(TermsAndConditions);

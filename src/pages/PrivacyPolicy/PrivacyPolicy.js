import React, { Component } from 'react';
import Page from '../index';
import { translate } from 'react-i18next';
import PrivacyPolicyTextDu from './PrivacyPolicyTextDu';

export class PrivacyPolicy extends Component {
  render() {
    const { t } = this.props;
    return (
      <Page>
        <div className="main-section align-content-center flex-wrap fancy-bg">
          <div className="article mx-auto p-2">
            {t('privacy-policy.message') === 'english' && (
              <PrivacyPolicyTextDu />
            )}
            {t('privacy-policy.message') === 'duch' && (
              <PrivacyPolicyTextDu />
            )}
          </div>
        </div>
      </Page>
    );
  }
}

export default translate('translations')(PrivacyPolicy);

import React, { Component } from 'react';
import Page from './index';
import { translate } from 'react-i18next';

export class PrivacyPolicy extends Component {
  render() {
    const { t } = this.props;
    return (
      <Page>
        <div className="main-section align-content-center flex-wrap fancy-bg">
          {t('privacy-policy.message')}
        </div>
      </Page>
    );
  }
}

export default translate('translations')(PrivacyPolicy);

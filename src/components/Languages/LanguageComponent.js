import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './styles.css';
import enImg from '../../assets/images/united-kingdom.png'
import frImg from '../../assets/images/france.png'

export class LanguageComponent extends Component {
  changeLanguageTo = lang => {
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
  };
  render() {
    const { i18n } = this.props;
    return (
      <div className="switch-language-wrapper">
        <span
          className={i18n.language === 'en-US' ? 'active-lang' : ''}
          onClick={e => this.changeLanguageTo('en-US')}
        >
          <img alt="laundry" src={enImg} />
        </span>
        {' '}
        <span
          className={i18n.language === 'fr-FR' ? 'active-lang' : ''}
          onClick={e => this.changeLanguageTo('fr-FR')}
        >
          <img alt="laundry" src={frImg} />
        </span>
      </div>
    );
  }
}

export default translate('translations')(LanguageComponent);

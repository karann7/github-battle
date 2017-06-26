import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Functional component because state is passed down as props.
function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}
// used to ensure that the values passed in are what they are suppose to be
SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
// only component that maintains state and passes it down as props
class Popular extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
      }
    });
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    )
  }
}

export default Popular;
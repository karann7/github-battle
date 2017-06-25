import React, { Component } from 'react';

export default class Popular extends Component {
  constructor(props){
    super(props);
    this.state = { selectedLanguage: 'All'};
  }
  updateLanguage(lang) {
    this.setState(function(){
      return {
        selectedLanguage: lang
      }
    })
  }
  render(){
    var languages = [ 'All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python' ];

    return (
      <div>
        <ul className="languages">
          {languages.map((lang)=>{
            return (
              <li
              style={lang === this.state.selectedLanguage ? {color: 'red'}: null}
              key={lang}
              onClick={this.updateLanguage.bind(this, lang)}>
              {lang}
              </li>
            );
          })}
        </ul>
      <h1>{this.state.selectedLanguage}</h1>
      </div>
    );
  }
}
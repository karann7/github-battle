import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from 'Api';

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
// this renders the results into a usuable format
function RepoGrid (props) {
  return (
    <ul className='popular-list'>
      {props.repos.map(function(repo, index){
        <li className='popular-item' key={repo.name}>
          <div className='popular-rank'>#{index + 1}</div>
          <ul className='space-list-items'>
            <li>
              <img
                className='avatar'
                src={repo.owner.avatar_url}
                alt={`Avatar for ${repo.owner.login}`} />
            </li>
          </ul>
        </li> 
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
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount(){
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
        repos: null
      }
    });
    Api.fetchPopularRepos(lang)
      .then(function(repos) {
        this.setState(function() {
          return {
            repos: repos
          }
        })
      }.bind(this));
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
          <RepoGrid repos={this.state.repos} />
      </div>
    )
  }
}

export default Popular;
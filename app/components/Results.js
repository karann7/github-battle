import React, { Component } from 'react';
import queryString from 'query-string';
import Api from 'Api';
import { Link } from 'react-router-dom';
import Player from 'WinnerLoser';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }
  componentDidMount() {
  let players = queryString.parse(this.props.location.search);
    Api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function(results) {
      if(results === null) {
        return this.setState(function(){
          return {
          error: 'Looks like there was error. Check that both users exists on Github.',
          loading: false
        }
        })
      }
      this.setState(function(){
        return {
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false
        }
      })
    }.bind(this))
  }
  render() {
    let error = this.state.error;
    let winner = this.state.winner;
    let loser = this.state.loser;
    let loading = this.state.loading;

    if(loading === true) {
      return <h1>Loading...</h1>
    }
    if(error){
      return (
        <div>
          <h3>{error}</h3>
          <Link to='/'>Reset</Link>
        </div>
      )
    }
    return (
      <div className='row'>
        <Player
          label='Winner'
          score={winner.score}
          profile={winner.profile}
        />
        <Player
          label='Loser'
          score={loser.score}
          profile={loser.profile}
        />
      </div>
    );
  }
}

export default Results;
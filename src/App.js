import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import youtube from './apis/youtube';

export default class App extends Component {

  state = {
    videos : []
  }

  onTermSubmit = async term=>{

    const response = await youtube.get('/search',{
      params : {
        q : term
      }
    })

    this.setState({
      videos : response.data.items
    })

  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        I have {this.state.videos.length} videos.
      </div>
    )
  }
}




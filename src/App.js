import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList/VideoList';

export default class App extends Component {

  state = {
    videos : [],
    selectedVideo : null
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

  onVideoSelect = video =>{
    this.setState({
      selectedVideo : video
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    )
  }
}




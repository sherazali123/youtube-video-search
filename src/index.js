import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './compnents/search_bar';
import VideoList from './compnents/video_list';
import VideoDetail from './compnents/video_detail';

import YoutubeVideoSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBfTwfXGOcrMUNaK8TrdfbdcWC_qsPcedQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    YoutubeVideoSearch({ key: API_KEY, term: 'Best Song Ever' }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './compnents/search_bar';
import VideoList from './compnents/video_list';
import YoutubeVideoSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBfTwfXGOcrMUNaK8TrdfbdcWC_qsPcedQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YoutubeVideoSearch({ key: API_KEY, term: 'Best Song Ever' }, videos => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

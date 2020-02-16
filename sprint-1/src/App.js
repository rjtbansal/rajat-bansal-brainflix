import React from 'react';
import Header from './components/header/Header';
import VideoList from './components/video-list/VideoList';
import './styles/styles.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <VideoList />
    </div>
  );
}

export default App;

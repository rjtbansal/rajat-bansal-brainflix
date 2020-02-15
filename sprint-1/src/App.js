import React from 'react';
import './App.css';
import Header from './components/header/Header';
import VideoList from './components/video-list/VideoList';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoList />
    </div>
  );
}

export default App;

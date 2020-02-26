import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import VideoList from './components/VideoList/VideoList';
import './styles/styles.scss';
import UploadVideo from './components/UploadVideo/UploadVideo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/upload" component = {UploadVideo} />
        <Route path="/videos/:id" component = {VideoList} />
        <Route exact path="/" component = {VideoList} />
      </Switch>
    </BrowserRouter>  
  );
}

export default App;

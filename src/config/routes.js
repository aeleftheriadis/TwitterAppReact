import React from 'react';
import {BrowserRouter, Match, Miss} from 'react-router';
import App from '../App';
import HomeContainer from '../containers/HomeContainer';
import TopTweetsContainer from '../containers/TopTweetsContainer';
import NotFound from '../NotFound';

const Routes = () => {
  console.log('hello');
  return (
    <BrowserRouter>
      <div>
          <Match exactly pattern="/" component={App}/>
          <Match pattern="/home" component={HomeContainer}/>
          <Match pattern="/toptweets/:topicId" component={TopTweetsContainer}/>
          <Miss component={NotFound} />
       </div>
    </BrowserRouter>
  )
}

export default Routes;
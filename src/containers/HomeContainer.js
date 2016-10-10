import React, {Component} from 'react';
import Home from '../Home';

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTopic: ''
    }
  }

    // handleSubmitTweetTopic(e) {
    //   e.preventDefault();
      
    // }

    handleUpdateTweetTopic(e) {
      this.setState({
        searchTopic: e.target.value
      })
    }
  
  render() {
    console.log('hello from home container')
    return (
      <Home 
        onUpdateTweetTopic={(e) => this.handleUpdateTweetTopic(e)}
        onSubmitTweetTopic={(e) => this.handleSubmitTweetTopic(e)} 
        searchTopic={this.state.searchTopic}/>
      )
  }
  
}

HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default HomeContainer;
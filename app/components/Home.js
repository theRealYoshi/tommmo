import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <div className="header-container">
          <h1>Everybody Hates the Waiting Game</h1>
          <h3>Enter your number.</h3>
          <h3>Text us the minutes you want to wait.</h3>
          <h3>Get a text alert when its time.</h3>
        </div>
        <div className='row'>
        </div>
      </div>
    );
  }
}
export default Home;

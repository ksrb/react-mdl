'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

//Components
import AppContainer from './app_container';
import Navigator from 'bh-react-navigator';

//Routes
import Buttons from './buttons';

import './css/styles.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderScene  = (route, navigator) => {

    let routeProps = route.props;
    let props = {...routeProps};

    props.goForward = (opts) => {
      let nextIndex = route.index + 1;
      navigator.push({...opts, index: nextIndex});
    };

    props.goForward = (opts) => {
      let nextIndex = route.index + 1;
      navigator.push({...opts, index: nextIndex});
    };

    return (
      <AppContainer goForward={props.goForward}>
        {React.createElement(route.component, props, null)}
      </AppContainer>
    );
  };

  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Buttons',
          component: Buttons,
          index: 0,
        }}
        renderScene={this._renderScene}/>
    );
  }

}

ReactDOM.render(
    <App/>, document.getElementById('content')
);

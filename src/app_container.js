'use strict';

import React, {PropTypes} from 'react';

//Components
import {
  Content,
  Drawer,
  Header,
  Layout,
} from 'bh-react-mdl';

//Routes
import Buttons from './buttons';

class AppContainer extends React.Component {

  static propTypes = {
    goForward: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  _handleLinkClicked = (link) => {
    this.props.goForward({...link});
  };

  render() {
    let links = [
      {name: 'Badges'},
      {name: 'Buttons', component: Buttons},
      {name: 'Cards'},
      {name: 'Layout'},
      {name: 'Loading'},
      {name: 'Menus'},
      {name: 'Sliders'},
      {name: 'Tables'},
      {name: 'Text Fields'},
      {name: 'Toggles'},
      {name: 'Tooltips'},
    ];

    return (
      <Layout fixedHeader={true}>
        <Header>
          <a>
            Components
          </a>
        </Header>
        <Drawer>
          {links.map((link, index) => {
            return (
              <a
                className='app-drawer-links'
                onClick={this._handleLinkClicked.bind(this, link)}
                key={index}>
                {link.name}
              </a>
            );
          })}
        </Drawer>
        <Content className='app-content'>
          <div className='component-page'>
            {this.props.children}
          </div>
        </Content>
      </Layout>
    );
  }

}

export default AppContainer;

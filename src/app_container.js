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

import classNames from 'classnames';

class AppContainer extends React.Component {

  static propTypes = {
    currentComponent: PropTypes.func,
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
      {
        name: 'Badges',
        imgPath: './img/comp_badges.png',
      },
      {
        name: 'Buttons',
        imgPath: './img/comp_buttons.png',
        component: Buttons,
      },
      {
        name: 'Cards',
        imgPath: './img/comp_cards.png',
      },
      {
        name: 'Layout',
        imgPath: './img/comp_layout.png',
      },
      {
        name: 'Loading',
        imgPath: './img/comp_loading.png',
      },
      {
        name: 'Menus',
        imgPath: './img/comp_menus.png',
      },
      {
        name: 'Sliders',
        imgPath: './img/comp_sliders.png',
      },
      {
        name: 'Tables',
        imgPath: './img/comp_tables.png',
      },
      {
        name: 'Text Fields',
        imgPath: './img/comp_textfields.png',
      },
      {
        name: 'Toggles',
        imgPath: './img/comp_toggles.png',
      },
      {
        name: 'Tooltips',
        imgPath: './img/comp_tooltips.png',
      },
    ];

    return (
      <Layout fixedHeader={true}>
        <Header>
          <a>
            Components
          </a>
        </Header>
        <Drawer className='app-drawer'>
          {links.map((link, index) => {
            return (
              <a
                className={
                  classNames(
                    'app-drawer-link',
                    {'is-active': link.component === this.props.currentComponent}
                  )
                }
                onClick={this._handleLinkClicked.bind(this, link)}
                key={index}>
                <img
                  className='app-drawer-link-img'
                  src={link.imgPath}/>
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

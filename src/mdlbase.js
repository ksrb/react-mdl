/*global componentHandler*/
'use strict';

import React from 'react';

class MDLComponent extends React.Component { }

class MDLUpgradedComponent extends MDLComponent {
  componentDidMount() {
    componentHandler.upgradeElement(React.findDOMNode(this));
  }

  componentWillUnmount() {
    componentHandler.downgradeElements(React.findDOMNode(this));
  }
}

export default {
  UpgradedComponent: MDLUpgradedComponent,
  Component: MDLComponent,
};

'use strict';

import React from 'react';

import {
  FABButton,
  Icon,
} from 'bh-react-mdl';

class FabButtonNoColorSnippet extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FABButton
          ripple={false}>
          <Icon name='add'/>
        </FABButton>
        <FABButton
          ripple={true}>
          <Icon name='add'/>
        </FABButton>
        <FABButton
          disabled={true}>
          <Icon name='add'/>
        </FABButton>
      </div>
    );
  }

}

export default FabButtonNoColorSnippet;

'use strict';

import React from 'react';

import {
  FABButton,
  Icon,
} from 'bh-react-mdl';

class FabButtonSnippet extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FABButton
          colored={true}
          ripple={false}>
          <Icon name='add'/>
        </FABButton>
        <FABButton
          colored={true}
          ripple={true}>
          <Icon name='add'/>
        </FABButton>
      </div>
    );
  }

}

export default FabButtonSnippet;

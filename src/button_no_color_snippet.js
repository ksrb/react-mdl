'use strict';

import React from 'react';

import {Button} from 'bh-react-mdl';

class ButtonNoColorSnippet extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button
          raised={true}
          ripple={false}>
          Button
        </Button>
        <Button
          raised={true}
          ripple={true}>
          Button
        </Button>
        <Button
          raised={true}
          disabled={true}>
          Button
        </Button>
      </div>
    );
  }

}

export default ButtonNoColorSnippet;

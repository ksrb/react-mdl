'use strict';

import React from 'react';

import {Button} from 'bh-react-mdl';

class ButtonFlatSnippet extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button
          ripple={false}
          primary={true}>
          Button
        </Button>
        <Button
          ripple={false}
          accent={true}>
          Button
        </Button>
      </div>
    );
  }

}

export default ButtonFlatSnippet;

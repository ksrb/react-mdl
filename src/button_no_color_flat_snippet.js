'use strict';

import React from 'react';

//Components
import {Button} from 'bh-react-mdl';

class ButtonNoColorFlatSnippet extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button
          ripple={false}>
          Button
        </Button>
        <Button
          ripple={true}>
          Button
        </Button>
        <Button
          disabled={true}>
          Button
        </Button>
      </div>
    );
  }

}

export default ButtonNoColorFlatSnippet;

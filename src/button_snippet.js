'use strict';

import React from 'react';

import {Button} from 'bh-react-mdl';

class ButtonSnippet extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button
          accent={true}
          raised={true}
          colored={true}>
          Button
        </Button>
        <Button
          accent={true}
          raised={true}
          colored={true}>
          Button
        </Button>
        <Button
          raised={true}
          colored={true}
          ripple={true}>
          Button
        </Button>
      </div>
    );
  }

}

export default ButtonSnippet;

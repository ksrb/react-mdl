'use strict';

import React from 'react';

import {IconButton} from 'bh-react-mdl';

class IconButtonSnippet extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <IconButton
          name="mood"
          ripple={false} />
        <IconButton
          name="mood"
          colored={true}
          ripple={false} />
      </div>
    );
  }

}

export default IconButtonSnippet;

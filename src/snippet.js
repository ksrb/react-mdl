'use strict';

import React, {PropTypes} from 'react';

//TODO non optimal build (imports syntax highlighting for all languages)
import hljs from 'highlight.js/lib';
import 'highlight.js/styles/github.css';

class Snippet extends React.Component {

  static propTypes = {
    component: PropTypes.element,
    componentPath: PropTypes.string,
    titles: PropTypes.arrayOf(PropTypes.string),
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {componentPath} = this.props;
    let startsWithDotSlash = componentPath.substring(0, 2) === './';
    if (startsWithDotSlash) {
      //TODO not having the './' in require('!!raw!./' + componentPath) fails
      componentPath = componentPath.substring(2);
    }

    let snippetCode = require('!!raw!./' + componentPath);

    return (
      <div>
        <div className='snippet-demo space-evenly-center-children'>
          {this.props.component}
        </div>
        <div className='snippet-caption space-evenly-center'>
          {this.props.titles.map((title, index) => {
            return (
              <div key={index}>{title}</div>
            );
          })}
        </div>
        <pre
          ref={(pre) => {
            //TODO further optimization may be possible
            if (pre) {
              hljs.highlightBlock(pre);
            }
          }}
          className='snippet-code js'>
          {`${snippetCode}`}
        </pre>
      </div>
    );
  }

}

export default Snippet;

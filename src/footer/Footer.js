'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import cloneChildren from '../utils/cloneChildren';

class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['mini', 'mega']),
  }

  render() {
    let { className, size, ...otherProps } = this.props;

    size = size || 'mega';

    let classes = classNames({
      [`mdl-${size}-footer`]: true,
    }, className);

    return (
      <footer className={classes} {...otherProps}>
        {cloneChildren(this.props.children, { size })}
        </footer>
    );
  }
}

export default Footer;
export Section from './Section';
export DropDownSection from './DropDownSection';
export LinkList from './LinkList';


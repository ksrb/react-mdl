'use strict';

import React from 'react';

export default function(children, props) {
    return React.Children.map(children, child => {
        let p = typeof props === 'function' ? props(child) : props;
        return React.cloneElement(child, p);
    });
}

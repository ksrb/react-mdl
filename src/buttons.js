'use strict';

import React from 'react';

//Components
import Snippet from './snippet';
import FABButtonSnippet from './fab_button_snippet';
import FABButtonNoColorSnippet from './fab_button_no_color_snippet';
import ButtonSnippet from './button_snippet';
import ButtonNoColorSnippet from './button_no_color_snippet';
import ButtonNoColorFlat from './button_no_color_flat_snippet';
import ButtonFlatSnippet from './button_flat_snippet';
import IconButtonSnippet from './icon_button_snippet';

import GithubLogo from './github_logo';
import MdlLogo from './mdl_logo';

class Buttons extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='component-page-header'>
          <h4 className='component-page-name'>BUTTONS</h4>
          <p>Variations on React Material Design Buttons.</p>
          <a
            className='component-page-link'
            target='_blank'
            href='http://www.getmdl.io/components/index.html#buttons-section'>
            <MdlLogo className='component-page-link-icon'/>
            <span>Material Design page</span>
          </a>
          <a
            className='component-page-link'
            target='_blank'
            href='https://github.com/bh5-js/react-mdl/blob/master/src/Button.js'>
            <GithubLogo className='component-page-link-icon'/>
            <span>Github component source</span>
          </a>
        </div>

        <Snippet
          component={<FABButtonSnippet/>}
          componentPath='./fab_button_snippet'
          titles={['Colored Fab', 'With Ripple']}/>

        <Snippet
          component={<FABButtonNoColorSnippet/>}
          componentPath='./fab_button_no_color_snippet'
          titles={['Plain FAB', 'With Ripple', 'Disabled']}/>

        <Snippet
          component={<ButtonSnippet/>}
          componentPath='./button_snippet'
          titles={['Colored button', 'Accent colored', 'With Ripples']}/>

        <Snippet
          component={<ButtonNoColorSnippet/>}
          componentPath='./button_no_color_snippet'
          titles={['Raised Button', 'With Ripple', 'Disabled']}/>

        <Snippet
          component={<ButtonNoColorFlat/>}
          componentPath='./button_no_color_flat_snippet'
          titles={['Flat button', 'With Ripple', 'Disabled']}/>

        <Snippet
          component={<ButtonFlatSnippet/>}
          componentPath='./button_flat_snippet'
          titles={['Primary colored flat', 'Accent Colored flat']}/>

        <Snippet
          component={<IconButtonSnippet/>}
          componentPath='./icon_button_snippet'
          titles={['Icon Button', 'Colored']}/>
      </div>
    );
  }

}

export default Buttons;

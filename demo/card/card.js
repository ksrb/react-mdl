import React from 'react';
import Card, { CardTitle, CardText, CardActions, CardMenu } from '../../src/card/Card';
import Button from '../../src/Button';
import IconButton from '../../src/IconButton';
import Icon from '../../src/Icon';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <p>Wide card with share menu button</p>
                <Card shadowLevel={0} style={{width: '512px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border={true}>
                        <Button colored={true}>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <p>Square card</p>
                <Card shadowLevel={0} style={{width: '320px', height: '320px'}}>
                    <CardTitle expand={true} style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border={true}>
                        <Button colored={true}>View Updates</Button>
                    </CardActions>
                </Card>

                <p>Image card</p>
                <Card shadowLevel={0} style={{width: '256px', height: '256px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover'}}>
                    <CardTitle expand={true} />
                    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                            Image.jpg
                        </span>
                    </CardActions>
                </Card>


                <p>Event card</p>
                <Card shadowLevel={0} style={{width: '256px', height: '256px', background: '#3E4EB8'}}>
                    <CardTitle expand={true} style={{alignItems: 'flex-start', color: '#fff'}}>
                        <h4 style={{marginTop: '0'}}>
                            Featured event:<br />
                            May 24, 2016<br />
                            7-11pm
                        </h4>
                    </CardTitle>
                    <CardActions border={true} style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
                        <Button colored={true} style={{color: '#fff'}}>Add to Calendar</Button>
                        <div className="mdl-layout-spacer"></div>
                        <Icon name="event" />
                    </CardActions>
                </Card>
            </div>
        );
    }
}


React.render(<Demo />, document.getElementById('app'));

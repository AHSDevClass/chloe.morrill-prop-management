import React, { Component } from 'react';
import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component {
    render() {
        return (
            <div className='requests-item'>
                <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle'/>
                <div className='requests-item__title'>
                    Paint coming off door.
                </div>
                <div className='requests-item__tenant-unit'>
                    Hugs-a-lot - Unit 821719
                </div>
                <Icon className='requests-item__arrow' icon='fas fa-sort-down'/>
                <div className='requests-item__date'>
                    Today
                </div>
                <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('trying to change request status')}/>
            </div>
        )
    }
}

export default RequestsItem;
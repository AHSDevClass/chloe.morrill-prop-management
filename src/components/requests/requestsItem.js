import React, { Component } from 'react';
import Icon from '../icon';
import Button from '../button';
import AnimateHeight from 'react-animate-height';

class RequestsItem extends Component {
    constructor() {
        super()

        this.state = {
            height: 0
        }
    }

    toggleDropDown = () => {
        if(this.state.height == 0) {
            this.setState({height: 'auto'})
        } else {
            this.setState({height: 0})
        }
    }

    render() {
        return (
            <div className='requests-item'>
                <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle' />
                <div className='requests-item__title'>
                    <div className='requests-item__title__text'>Paint coming off door.</div>
                    <Icon callback={() => this.toggleDropDown()} className='requests-item__title__arrow' icon='fas fa-sort-down' />
                </div>
                <div className='requests-item__tenant-unit'>
                    Hugs-a-lot - Unit 821719
                </div>
                <div className='requests-item__date'>
                    Today
                </div>
                <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('trying to change request status')} />

                <div className='requests-item__description'>
                    <AnimateHeight 
                    duration={300}
                    height={this.state.height}
                    >
                        <div className='item-description'>
                            <img className='item-description__img' src='http://via.placeholder.com/160x94' />
                            <p className='item-description__text'>
                                random text random text random text random text random text random text random text random text random text random text random text
                            </p>
                        </div>
                    </AnimateHeight>
                </div>
                
            </div>
        )
    }
}

export default RequestsItem;
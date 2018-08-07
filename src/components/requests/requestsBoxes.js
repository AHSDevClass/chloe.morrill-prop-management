import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequestsBox from './requestsBox';

class RequestsBoxes extends Component {
    render() {
        return (
            <div className='requests-boxes'>
                <RequestsBox icon='fas fa-exclamation-triangle' title={'Pending'} count={this.props.PendingCount}/>
                <RequestsBox icon='fas fa-wrench' title={'In-Progress'} count={this.props.ProgressCount}/>
                <RequestsBox icon='fas fa-check-square' title={'Complete'} count={this.props.CompleteCount}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { requests } = state.requests

    var PendingCount = 0;
    var ProgressCount = 0;
    var CompleteCount = 0;

    requests.map(request => {
        if(request.status == 'Pending') {
            PendingCount += 1;
        } else if(request.status == 'In-Progress') {
            ProgressCount += 1;
        } else if(request.status == 'Complete') {
            CompleteCount += 1;
        }
    })
    return {
        PendingCount,
        ProgressCount,
        CompleteCount
    }
}

export default connect(mapStateToProps)(RequestsBoxes);
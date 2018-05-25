import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poll, { Action } from './Poll';

const { Save } = Action;

const controlStyle = {
    cursor: 'pointer',
    paddingLeft: '10px'
};
const appStyle = {
    margin: '0 auto',
    padding: '10px',
    display: 'table'
};

@connect((state, props) => state || {})
class App extends Component {
    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }
    search = (evt) => {

    }
    edit = (evt) => {

    }
    save = (evt) => {
        this.dispatch(Save());
    }
    delete = (evt) => {

    }
    render() {

        return (
            <div style={appStyle}>
                <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <span>Search...</span>
                    <span style={controlStyle}>📝</span>
                    <span style={controlStyle} onClick={this.save}>💾</span>
                    <span style={controlStyle}>🗑️</span>
                </div>
                <Poll />
            </div >
        );
    }
}

export default App;
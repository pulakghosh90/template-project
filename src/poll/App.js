import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poll, { Action } from './Poll';
import styles from './app.css';

const { Save } = Action;

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
            <div className={styles.center}>
                <div className={styles.control}>
                    <span>Search...</span>
                    <span className={styles.controlEl}>📝</span>
                    <span className={styles.controlEl} onClick={this.save}>💾</span>
                    <span className={styles.controlEl}>🗑️</span>
                </div>
                <Poll />
            </div >
        );
    }
}

export default App;
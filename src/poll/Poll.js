import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetch, save } from '../service/Service';
import styles from './poll.css';

function update(state, action) {
    const { type } = action;
    switch (type) {
        case 'IncrementLike':
            return IncrementLike(state, action);
            break;
        case 'FetchSubjects':
            return FetchSubjects(state, action);
            break;
        case 'Save':
            return Save(state, action);
            break;
        default:
            break;
    }
}

function IncrementLike(state, { subjectId, optionId }) {
    const copylist = state.subjects.slice(0);
    const subject = copylist.filter((sub) => sub.id === subjectId)[0];
    subject.options.filter((option) => option.id === optionId)
        .map((option) => {
            option.like = option.like + 1 || 1;
            return option;
        });
    return { subjects: copylist };
}

function FetchSubjects() {
    return fetch();
}

function Save(state) {
    const copy = Object.assign({}, state);
    save(copy);
    return copy;
}

export const Action = {
    IncrementLike(subjectId, optionId) {
        return {
            type: 'IncrementLike',
            subjectId,
            optionId
        };
    },
    FetchSubjects() {
        return {
            type: 'FetchSubjects'
        };
    },
    Save() {
        return {
            type: 'Save'
        }
    }
};

class Option extends Component {

    onLike = () => {
        const { id } = this.props;
        this.props.onClick(id);
    }
    render() {
        const { text, like = 0 } = this.props;
        const label = `${like || ''}👍${text}`;
        return (
            <div onClick={this.onLike} className={styles.option}>
                <span style={{ fontSize: '20px' }}>{label}</span>
            </div >
        );
    }
}

class Subject extends Component {

    onClick = (optionId) => {
        const { subject } = this.props;
        const { IncrementLike } = Action;
        this.props.dispatch(IncrementLike(subject.id, optionId));
    }
    render() {
        const { subject } = this.props;
        if (!subject)
            return null;

        const { options } = subject;
        return (
            <div>
                <div className={styles.subjectTitle}>{subject.text}</div>
                {
                    options.map((option, idx) => (<Option key={idx} {...option} onClick={this.onClick} />))
                }
            </div>
        );
    }
}

@connect((state, props) => state || {})
class Poll extends Component {
    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }
    save = () => {

    }
    componentWillMount() {
        this.dispatch(Action.FetchSubjects());
    }
    componentWillUnmount() {
        debugger
        this.dispatch(Action.Save());
    }
    render() {
        const { subjects = [], dispatch } = this.props;
        if (subjects.length === 0)
            return null;

        return (
            <div>
                {
                    subjects.map((subject) => (<Subject key={subject.id} subject={subject} dispatch={dispatch} />))
                }
            </div>
        );
    }
}

export {
    Poll as default,
    update
};

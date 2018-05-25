import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from './app/AppStore';
import { PropTypes } from 'prop-types';
import AppContainer from './poll/App';

function App({ store }) {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
}

App.propTpes = { store: PropTypes.object.isRequired };

const store = AppStore();

const renderApp = (AppComponent) => {
    const root = document.getElementById("root");
    render(<AppComponent store={store} />, root);
}

renderApp(App);


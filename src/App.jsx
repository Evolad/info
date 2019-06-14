import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { history } from './helpers/history';
import { connect } from 'react-redux';

import AuthPage from './pages/authentication';

const DunamicPage = {
    auth: <AuthPage />,
};

class App extends Component {

    render() {
        const page = this.props.dateState;
        console.log(DunamicPage)
        return (
            <Router history={history}> 
                <React.Fragment>
                    {page.dunamicId !== -1 && DunamicPage[page.dunamicId] }
                </React.Fragment>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        dateState: state.dateState
    };
};

export default connect(mapStateToProps)(App);
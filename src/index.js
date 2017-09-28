// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//store
import { applyMiddleware, createStore, combineReducers } from 'redux';

//pages
import Frontpage from './pages/frontpage';
import SinglePost from './pages/single-post';
import Testpage from "./pages/test-page";

//reducers
import postReducer from './components/post/reducers.js';
import testReducer from './components/test-component/reducers.js';




let store = createStore(combineReducers({postReducer, testReducer }), applyMiddleware(promiseMiddleware(), thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Frontpage} />
                <Route path="/r/:subreddit/comments/:id/:title" component={SinglePost} />

                <Route path="/test" component={Testpage}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

export default store;


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
//import Frontpage from './pages/frontpage';
//import SinglePost from './pages/single-post';
import NavigationComponent from './components/navigation/component';
import FooterComponent from './components/footer/view';
import ExampleComponent from './components/example/component';

//reducers
import postReducer from './components/post/reducers.js';
import exampleReducer from './components/example/reducers.js';
import navigationReducer from './components/navigation/reducers.js';

//components


let store = createStore(combineReducers({postReducer, exampleReducer, navigationReducer }), applyMiddleware(promiseMiddleware(), thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <NavigationComponent />

                <Route path="/example" component={ExampleComponent} />

                {/*<Route exact path="/" component={Frontpage} />*/}
                {/*<Route path="/r/:subreddit/comments/:id/:title" component={SinglePost} />*/}

                <FooterComponent />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

export default store;


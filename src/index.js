// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//store
import { applyMiddleware, createStore, combineReducers } from 'redux';

//pages
import Frontpage from './pages/frontpage';
import SinglePost from './pages/single-post';
import Examplepage from "./pages/example-page";
import Userspage from "./pages/userspage";

import NavigationComponent from './components/navigation/component';
import FooterComponent from './components/footer/view';

//reducers
import postReducer from './components/post/reducers';
import exampleReducer from './components/example/reducers';
import navigationReducer from './components/navigation/reducers';
import userReducer from './components/users/reducers';


//components


let store = createStore(combineReducers({postReducer, exampleReducer, navigationReducer, userReducer }), applyMiddleware(promiseMiddleware(), thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <NavigationComponent />

                <Switch>
                    <Route exact path="/example" component={Examplepage} />
                    <Route path="/example/:id" component={Examplepage} />

                    <Route exact path="/r" component={Frontpage} />

                    <Route exact path="/users" component={Userspage} />
                    <Route exact path="/users/:userid" component={Userspage} />

                    <Route path="/r/:subreddit/comments/:id/:title" component={SinglePost} />
                </Switch>


                <FooterComponent />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

export default store;


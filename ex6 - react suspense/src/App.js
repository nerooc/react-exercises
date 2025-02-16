import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = lazy(() => {
    return import ('./containers/Posts');
});

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <nav>
                        <NavLink to="/user">User Page</NavLink>
                        |&nbsp;
                        <NavLink to="/posts">Posts Page</NavLink>
                    </nav>
                    <Route path="/" component={Welcome} exact/>
                    <Route path="/user" component={User}/>
                    <Route
                        path="/posts"
                        render={() => {
                        return (
                            <Suspense fallback={< div > Loading ...</div>}>
                                <Posts/>
                            </Suspense>
                        )
                    }}/>

                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;

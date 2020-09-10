import React, {Component} from 'react';
// import axios from 'axios';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');

});

class Blog extends Component {
    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li>
                            <NavLink
                                exact
                                activeClassName="my-active"
                                to="/posts"
                                activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Posts</NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                activeClassName="my-active"
                                to="/new-post"
                                activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>New Post</NavLink>
                        </li>
                    </ul>
                </header>
                {/* <Route path="/" exact render={() => <Posts/>}/> */}
                <Switch>
                    {this.state.auth
                        ? <Route path="/new-post" exact component={AsyncNewPost}/>
                        : null}
                    <Route path="/posts" component={Posts}/>
                    <Route render={() => <h1>Not found</h1>}/> {/* <Redirect from="/" to="/posts"/> */}
                </Switch>
            </div>

        );
    }
}

export default Blog;

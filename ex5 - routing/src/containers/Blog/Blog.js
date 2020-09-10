import React, {Component} from 'react';
// import axios from 'axios';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {

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
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/posts" component={Posts}/>
                    <Redirect from="/" to="/posts"/>
                </Switch>
            </div>

        );
    }
}

export default Blog;

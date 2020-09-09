import React, {Component} from 'react';
// import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';
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
                                to="/"
                                activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Home</NavLink>
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
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>

            </div>

        );
    }
}

export default Blog;

import React from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom';

import './Posts.css';

class Posts extends React.Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        axios
            .get('/posts')
            .then(response => {
                const posts = response
                    .data
                    .slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            })
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push('/posts/' + id);
    }

    render() {
        let posts = <p style={{
            textAlign: 'center'
        }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this
                .state
                .posts
                .map(post => {
                    return (
                        //<Link key={post.id} to={'/' + post.id}>
                            <Post
                                key={post.id}
                                title={post.title}
                                author={post.author}
                                clicked={() => this.postSelectedHandler(post.id)}/>
                        //</Link>
                    );
                });
        }

        return (
            <div>

                <Route path={this.props.match.url} exact render={()=><section className="Posts">
                    {posts}
                </section>}/>
                 
                <Route path={this.props.match.url + "/:id"} exact component={FullPost}/>
            </div>
           
        )
    }
}

export default Posts;
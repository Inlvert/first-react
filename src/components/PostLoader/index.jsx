import React, { Component } from "react";

export class PostLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((post) => {
        console.log(post);
        this.setState({
          posts: post,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    const { posts, isLoading, error } = this.state;

    const postsCards = posts.map((post) => (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    ));

    return (
      <>
        <div>PostLoader</div>
        {isLoading && <div>LOADING...</div>}
        {error && <div>ERROR LOADING...</div>}
        {postsCards}
      </>
    );
  }
}

export default PostLoader;

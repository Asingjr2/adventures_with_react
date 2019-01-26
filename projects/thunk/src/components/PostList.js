import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  /** Will be making aync requests in didMount function. */
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  /** Helper function to keep render clean */
  renderList() {
    console.log(this.props)
    /** Mapping through list of post in array. */
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"/>
            <div className="className">
            <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userID={post.userId}/>
            </div>
        </div>
      );
    });
  }


  render() {
    console.log('printing props', this.props.posts)
    return <div className="ui relaxed divided list">{this.renderList()}</div>
  }
};

const mapStateToProps = state => {
  return {posts: state.posts};
}
/** Using redux requries that we call connect function to pass function up to store. */
export default connect(
  mapStateToProps,
   {fetchPostsAndUsers: fetchPostsAndUsers}) (PostList)

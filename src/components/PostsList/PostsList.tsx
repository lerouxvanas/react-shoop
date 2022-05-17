import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { postInterface, selectPosts } from '../../features/posts/postsSlice';
import styles from './PostsList.module.scss';

interface PostsListProps {}

const PostsList: FC<PostsListProps> = (props: PostsListProps) => {
    const posts = useSelector(selectPosts);
    return (
        <div className={styles.PostsList} data-testid="PostsList">
            {posts.map((post: postInterface) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
};

export default PostsList;

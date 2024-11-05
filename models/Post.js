const pool = require('../db');

const createPost = async (authorId, title, content) => {
    const result = await pool.query(
        'INSERT INTO posts (author_id, title, content, timestamp) VALUES ($1, $2, $3, NOW()) RETURNING *',
        [authorId, title, content]
    );
    return result.rows[0];
};

const updatePost = async (postId, authorId, title, content) => {
    const result = await pool.query(
        'UPDATE posts SET title = $1, content = $2 WHERE post_id = $3 AND author_id = $4 RETURNING *',
        [title, content, postId, authorId]
    );
    return result.rows[0];
};

module.exports = { createPost, updatePost };

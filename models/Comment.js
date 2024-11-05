const pool = require('../db');

const createComment = async (postId, userId, content) => {
    const result = await pool.query(
        'INSERT INTO comments (post_id, user_id, content, timestamp) VALUES ($1, $2, $3, NOW()) RETURNING *',
        [postId, userId, content]
    );
    return result.rows[0];
};

module.exports = { createComment };

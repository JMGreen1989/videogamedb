module.exports = process.env.DATABASE URL || {
  host: process.env.DB_HOST || 'localhost',
  part: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'video_games_db'
};

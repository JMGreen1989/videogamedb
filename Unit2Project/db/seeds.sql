\c video_games_db

-- removing any records if they already exist
DROP TABLE IF EXISTS playstation CASCADE;
DROP TABLE IF EXISTS xbox CASCADE;

-- creating tables
CREATE TABLE playstation (
game_id     SERIAL PRIMARY KEY NOT NULL,
name        VARCHAR(64),
platform    VARCHAR(64),
country     VARCHAR(64),
release     VARCHAR(64),
image       VARCHAR(128)
);

CREATE TABLE xbox (
game_id     SERIAL PRIMARY KEY NOT NULL,
name        VARCHAR(64),
platform    VARCHAR(64),
country     VARCHAR(64),
release     VARCHAR(64),
image       VARCHAR(128)
);


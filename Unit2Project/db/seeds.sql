

-- removing any records if they already exist
DROP TABLE IF EXISTS playstation CASCADE;
DROP TABLE IF EXISTS xbox CASCADE;

-- creating tables
CREATE TABLE playstation (
id     SERIAL PRIMARY KEY NOT NULL,
name        VARCHAR(64),
release     VARCHAR(64),
developer   VARCHAR(64),
image       VARCHAR(128)
);

CREATE TABLE xbox (
id     SERIAL PRIMARY KEY NOT NULL,
name        VARCHAR(64),
release     VARCHAR(64),
developer   VARCHAR(64),
image       VARCHAR(128)
);

INSERT INTO playstation
(name, release, developer, image)
VALUES
('Hitman: Definitive Edition', 'May 15, 2018', 'IO Interactive', 'test'),
('VAMPYR', 'June 5, 2018', 'Dontnod Entertainment','test'),
('Detroit: Become Human', 'May 25, 2018', 'Quantic Dreams','test'),
('Spider-Man', 'September 7, 2018', 'Insomniac Games', 'test'),
('Shadow Of The Tomb Raider', 'September 14, 2018', 'Eidos Montreal','test');


INSERT INTO xbox
(name, release, developer, image)
VALUES
('State Of Decay 2', 'May 18, 2018', 'Undead Labs', 'test'),
('Dark Souls Remastered', 'May 25, 2018', 'From Software','test'),
('Street Fight 30th Anniversary Collection', 'May 29, 2018', 'Capcom','test'),
('Call of Duty Black Ops 4', 'October 12, 2018', 'Treyarch','test'),
('Red Dead Redemption 2', 'October 26, 2018', 'Rockstar Games','test');


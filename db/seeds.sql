-- \c video_games_db

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
('Hitman: Definitive Edition', 'May 15, 2018', 'IO Interactive', 'http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540238/hitman.jpg'),
('VAMPYR', 'June 5, 2018', 'Dontnod Entertainment','http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540239/VAMPYR.png'),
('Detroit: Become Human', 'May 25, 2018', 'Quantic Dreams','http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540238/detroit.jpg'),
('Spider-Man', 'September 7, 2018', 'Insomniac Games', 'http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540238/spider-man.jpg'),
('Shadow Of The Tomb Raider', 'September 14, 2018', 'Eidos Montreal','http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540239/Shadow-of-the-Tomb-Raider.jpg'),
('Shaq Fu: A Legend Reborn', 'June 5, 2018', 'Saber Interactive', 'http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540238/ShaqFuRFeborn2.jpg'),
('Jurassic World Evolution', 'June 12, 2018', 'Frontier Developments','http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540238/Jurassic-World-Evolution-herd.jpg'),
('Spyo: Reignited Trilogy', 'September 21, 2018', 'Toys for Bob','http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540238/8f204731-7fd2-409d-8397-abd2e874eb16.jpg');


INSERT INTO xbox
(name, release, developer, image)
VALUES
('State Of Decay 2', 'May 18, 2018', 'Undead Labs', 'http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540239/state_of_decay_2.jpg'),
('Dark Souls Remastered', 'May 25, 2018', 'From Software','http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540240/dark-souls-remastered.jpg'),
('Street Fight 30th Anniversary Collection', 'May 29, 2018', 'Capcom','http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540239/street_fighter.jpg'),
('Call of Duty Black Ops 4', 'October 12, 2018', 'Treyarch','http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540709/CODBLOPS.jpg'),
('Red Dead Redemption 2', 'October 26, 2018', 'Rockstar Games','http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540879/Red-Dead-Redemption-2-horses-.jpg.optimal.jpg'),
('Crackdown 3', 'Q2 2018', 'Reagent Games', 'http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540238/Crackdown-3-01.jpg'),
('The Crew 2', 'June 26, 2018', 'Ubisoft Reflections','http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540239/the-crew-2-1503419457931_1280w-555x312.jpg'),
('Super Bomberman R', 'June 12, 2018', 'Konami','http://res.cloudinary.com/dc6dj6gen/image/upload/v1524540987/ss02_l.jpg');


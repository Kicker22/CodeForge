-- mysql -u root -p < src/scripts/setup.sql
-- use above command to run this script and create the database and table

CREATE DATABASE IF NOT EXISTS BasicCrudDatabase;
USE BasicCrudDatabase;

CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    rarity VARCHAR(50),
    description TEXT,
    weight DECIMAL(5, 2),
    value DECIMAL(10, 2)
);

INSERT INTO items (name, type, rarity, description, weight, value) VALUES
('Longsword', 'Weapon', 'Common', 'A standard longsword.', 3.0, 15.0),
('Potion of Healing', 'Potion', 'Uncommon', 'A potion that heals 2d4+2 hit points.', 0.5, 50.0),
('Bag of Holding', 'Wondrous Item', 'Rare', 'A bag that can hold much more than its outside dimensions suggest.', 0.5, 500.0),
('Ring of Invisibility', 'Ring', 'Legendary', 'A ring that grants the wearer invisibility.', 0.1, 10000.0);
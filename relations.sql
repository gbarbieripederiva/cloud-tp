CREATE TABLE categories (
  category_id serial PRIMARY KEY,
  category_name VARCHAR(255) UNIQUE NOT NULL
)

CREATE TABLE clues (
  clue_id serial PRIMARY KEY,
  clue_category_id int NOT NULL,
  clue_url VARCHAR(255) NOT NULL,
  FOREIGN KEY (clue_category_id) 
          REFERENCES categories (category_id)
)
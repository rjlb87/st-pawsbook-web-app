CREATE TABLE IF NOT EXISTS owners (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    phone_number VARCHAR,
    address VARCHAR
);


CREATE TABLE IF NOT EXISTS dog_profiles (
    id SERIAL PRIMARY KEY,
    owner_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    breed VARCHAR NOT NULL,
    color VARCHAR NOT NULL,
    date_of_birth date NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR NOT NULL,
    size VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    image VARCHAR NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES owners(id)
);

CREATE TYPE status AS ENUM ('pending', 'accepted', 'declined');

CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    booked_dog_profile_id INTEGER NOT NULL,
    meet_up_dog_profile_id INTEGER NOT NULL,
    meet_up_date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    location VARCHAR NOT NULL,
    landmark VARCHAR NOT NULL,
    status status DEFAULT 'pending',
    FOREIGN KEY (booked_dog_profile_id) REFERENCES dog_profiles(id),
    FOREIGN KEY (meet_up_dog_profile_id) REFERENCES dog_profiles(id)
);


# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
Location        | string    | not null
image_url       | string    | not null
bio             | string    |


## groups
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
name                | string    | not null
category            | string    | not null
founded             | datetime  | not null
description         | text      |
location            | string    |
image_url           | string    |
lat                 | float     |
lng                 | float     |


## events
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
group_id       | integer   | not null, foreign key (references groups), indexed
name           | string    | not null
date           | datetime  | not null
description    | text      | not null
location       | string    |
lat            | float     |
lng            | float     | 

## memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user)
group_id    | integer   | not null, foreign key (references group)

## rsvps
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
event_id    | integer   | not null, foreign key (references events), indexed
user_id     | integer   | not null, foreign key (references users), indexed

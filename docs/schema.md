# Schema Information

## users
column name | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## profiles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
lender?     | boolean   | not null, default: false

## sporting_goods
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
lat         | float     | not null
lng         | float     | not null
description | text      |
type        | string    | not null

## sporting_goods_photos
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
sporting_goods_id | string    | not null, foreign key (references sporting_goods), indexed
pic_url           | string    | not null


## user_photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
pic_url     | string    | not null

## profile_info
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
profile_id      | string    | not null, foreign key (references profile), indexed
email           | string    | not null
phone_number    | integer   |
about_me        | text      |
age             | integer   |
languages       | string    | not null, default: 1
hobbies         | text      |
current_city    | string    | not null
favorite_trip   | text      |
favorite_quote  | text      |

## requests
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
sender_id       | integer   | not null, foreign key (references user), indexed
receiver_id     | integer   | not null, foreign key (references user), indexed
status          | string    | not null, default: "PENDING"
body            | text      | not null
approved?       | boolean   | 
start_date      | date      | not null
end_date        | date      | not null

## events
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references user), indexed
description     | text      | not null
pic_url         | string    | not null
start_datetime  | datetime  | not null
end_datetime    | datetime  | not null

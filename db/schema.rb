# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160503055937) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "request_notifications", force: :cascade do |t|
    t.integer  "recipient_id", null: false
    t.integer  "request_id",   null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "requests", force: :cascade do |t|
    t.integer  "sender_id",                        null: false
    t.integer  "sporting_good_id",                 null: false
    t.text     "message"
    t.date     "start_date",                       null: false
    t.date     "end_date",                         null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.boolean  "responded",        default: false
    t.string   "status_response",  default: ""
  end

  add_index "requests", ["sender_id"], name: "index_requests_on_sender_id", using: :btree

  create_table "sporting_goods", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.float    "lat",         null: false
    t.float    "lng",         null: false
    t.text     "description"
    t.string   "category",    null: false
    t.string   "pic_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.boolean  "lender?"
    t.string   "current_city"
    t.string   "fname"
    t.string   "lname"
    t.string   "pic_url"
    t.string   "phone_number"
    t.text     "about_me"
    t.integer  "age"
    t.string   "languages"
    t.text     "hobbies"
    t.text     "favorite_trip"
    t.text     "favorite_quote"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree

end

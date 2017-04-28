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

ActiveRecord::Schema.define(version: 20170428025044) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.integer  "group_id"
    t.string   "name"
    t.datetime "date"
    t.text     "description"
    t.string   "location"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name"
    t.string   "category"
    t.datetime "founded"
    t.text     "description"
    t.string   "location"
    t.string   "image_url",          default: "/images/group/6.jpg"
    t.datetime "created_at",                                         null: false
    t.datetime "updated_at",                                         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "group_id"], name: "index_memberships_on_user_id_and_group_id", unique: true, using: :btree
  end

  create_table "organizers", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "group_id"], name: "index_organizers_on_user_id_and_group_id", unique: true, using: :btree
  end

  create_table "rsvps", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "event_id"], name: "index_rsvps_on_user_id_and_event_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                                             null: false
    t.string   "password_digest"
    t.string   "session_token"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "location"
    t.string   "image_url",          default: "/images/user/0.jpg"
    t.text     "bio"
    t.datetime "created_at",                                        null: false
    t.datetime "updated_at",                                        null: false
    t.datetime "joined"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

end

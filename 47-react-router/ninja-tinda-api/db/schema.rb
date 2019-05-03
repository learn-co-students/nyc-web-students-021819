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

ActiveRecord::Schema.define(version: 2019_04_25_143807) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ninja_turtles", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "turtle_id"
    t.bigint "weapon_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["turtle_id"], name: "index_ninja_turtles_on_turtle_id"
    t.index ["user_id"], name: "index_ninja_turtles_on_user_id"
    t.index ["weapon_id"], name: "index_ninja_turtles_on_weapon_id"
  end

  create_table "turtles", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.integer "age"
    t.boolean "terrestrial"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "weapons", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "ninja_turtles", "turtles"
  add_foreign_key "ninja_turtles", "users"
  add_foreign_key "ninja_turtles", "weapons"
end

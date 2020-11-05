# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_30_061335) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string "nom"
    t.string "prenom"
    t.string "telephone"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_clients_on_email", unique: true
    t.index ["nom"], name: "index_clients_on_nom"
    t.index ["password_digest"], name: "index_clients_on_password_digest", unique: true
    t.index ["prenom"], name: "index_clients_on_prenom"
    t.index ["telephone"], name: "index_clients_on_telephone", unique: true
  end

  create_table "contacts", force: :cascade do |t|
    t.string "nom"
    t.string "prenom"
    t.string "email"
    t.string "telephone"
    t.text "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "jwt_blacklists", force: :cascade do |t|
    t.string "jti"
    t.datetime "exp"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["jti"], name: "index_jwt_blacklists_on_jti"
  end

  create_table "reservation_options", force: :cascade do |t|
    t.integer "quantity"
    t.bigint "tarif_supplementaire_id"
    t.bigint "reservation_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["reservation_id"], name: "index_reservation_options_on_reservation_id"
    t.index ["tarif_supplementaire_id"], name: "index_reservation_options_on_tarif_supplementaire_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.string "lieuDepart"
    t.string "lieuRetour"
    t.string "dateDepart"
    t.string "dateRetour"
    t.string "heureDepart"
    t.string "heureRetour"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tarif_supplementaires", force: :cascade do |t|
    t.string "libelle"
    t.integer "prix"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tarifs", force: :cascade do |t|
    t.string "prix"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "voitures", force: :cascade do |t|
    t.string "image"
    t.string "marque"
    t.string "model"
    t.string "places"
    t.string "mode"
    t.string "climatisation"
    t.string "vitesse"
    t.string "portes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end

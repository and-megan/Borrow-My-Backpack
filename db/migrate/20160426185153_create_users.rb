class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false, index: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :lender?, default: false
      t.string :current_city, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :pic_url
      t.string :phone_number
      t.text :about_me
      t.integer :age
      t.string :languages
      t.text :hobbies
      t.text :favorite_trip
      t.text :favorite_quote

      t.timestamps null: false

    end
  end
end

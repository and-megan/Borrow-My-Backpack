class CreateSportingGoods < ActiveRecord::Migration
  def change
    create_table :sporting_goods do |t|
      t.integer :user_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.text :description
      t.string :type, null: false
      t.string :pic_url
      
      t.timestamps null: false
    end
  end
end

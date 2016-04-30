class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.integer :sender_id, null: false, index: true
      t.integer :sporting_good_id, null: false
      t.text :message
      t.date :start_date, null: false
      t.date :end_date, null: false




      t.timestamps null: false
    end
  end
end

class CreateRequestNotifications < ActiveRecord::Migration
  def change
    create_table :request_notifications do |t|
      t.integer :recipient_id, null: false
      t.integer :request_id, null: false
      t.timestamps null: false
    end
  end
end

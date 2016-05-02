class AddColumnToRequests < ActiveRecord::Migration
  def change
    add_column :requests, :responded?, :boolean, :default => false
    add_column :requests, :status_response, :string
  end
end

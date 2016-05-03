class ChangeColumnNameRequests < ActiveRecord::Migration
  def change
    rename_column :requests, :responded?, :responded
  end
end

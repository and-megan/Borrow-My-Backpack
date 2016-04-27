class ChangeNullConstraintColumnsUsers < ActiveRecord::Migration
  def change
    change_column :users, :current_city, :string, :null => true
    change_column :users, :fname, :string, :null => true
    change_column :users, :lname, :string, :null => true
  end
end

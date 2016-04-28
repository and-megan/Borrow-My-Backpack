class Changecolumnnametypesportinggoods < ActiveRecord::Migration
  def change
    rename_column :sporting_goods, :type, :category
  end
end

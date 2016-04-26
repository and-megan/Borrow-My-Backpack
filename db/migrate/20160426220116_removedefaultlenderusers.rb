class Removedefaultlenderusers < ActiveRecord::Migration
  def change
    change_column_default(:users, :lender?, nil)
  end
end

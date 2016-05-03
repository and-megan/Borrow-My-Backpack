class AddDefaultValueToRequestsStatusResponse < ActiveRecord::Migration
  def change
    change_column :requests, :status_response, :string, :default => ""
  end
end

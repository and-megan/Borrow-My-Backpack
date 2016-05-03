# == Schema Information
#
# Table name: requests
#
#  id               :integer          not null, primary key
#  sender_id        :integer          not null
#  sporting_good_id :integer          not null
#  message          :text
#  start_date       :date             not null
#  end_date         :date             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  responded        :boolean          default("false")
#  status_response  :string           default("")
#

require 'test_helper'

class RequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

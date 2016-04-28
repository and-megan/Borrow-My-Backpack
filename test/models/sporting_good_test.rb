# == Schema Information
#
# Table name: sporting_goods
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  lat         :float            not null
#  lng         :float            not null
#  description :text
#  category    :string           not null
#  pic_url     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class SportingGoodTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

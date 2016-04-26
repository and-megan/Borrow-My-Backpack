# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  lender?         :boolean          default("false")
#  current_city    :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  pic_url         :string
#  phone_number    :string
#  about_me        :text
#  age             :integer
#  languages       :string
#  hobbies         :text
#  favorite_trip   :text
#  favorite_quote  :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

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

class SportingGood < ActiveRecord::Base
  validates_presence_of :user_id, :lat, :lng, :category
  validates :category, inclusion: { in: %w(backpack kayak bicycle surfboard snowboard tent),
    message: "%{value} is not a valid input" }

  belongs_to(
  :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'User'
  )

  has_many(
  :requests,
  primary_key: :id,
  foreign_key: :sporting_good_id,
  class_name: 'Request'
  )


end

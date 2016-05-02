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
#  responded?       :boolean          default("false")
#  status_response  :string
#

class Request < ActiveRecord::Base
  validates :start_date, :end_date, :sporting_good_id, :sender_id, presence: true

  validate :start_date_before_end_date

  belongs_to(
  :sender,
  primary_key: :id,
  foreign_key: :sender_id,
  class_name: 'User'
  )

  belongs_to(
  :sporting_good,
  primary_key: :id,
  foreign_key: :sporting_good_id,
  class_name: 'SportingGood'
  )

  has_one(
  :recipient,
  through: :sporting_good,
  source: :user
  )
  
  private

  def start_date_before_end_date
    return unless start_date && end_date
    errors[:start_date] << "must come before end date" if start_date > end_date
  end
end

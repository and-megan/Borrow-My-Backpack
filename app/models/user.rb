# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  lender?         :boolean
#  current_city    :string
#  fname           :string
#  lname           :string
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

class User < ActiveRecord::Base
  validates_presence_of :password_digest, :email, :session_token
  validates_uniqueness_of :email
  validates :password, length: {minimum: 6}, allow_nil: :true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many(
  :sporting_goods,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'SportingGood'
  )

  has_many(
  :requests,
  primary_key: :id,
  foreign_key: :sender_id,
  class_name: 'Request'
  )

  has_many :received_requests, through: :sporting_goods,
  source: :requests

  attr_reader :password

  def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

  def default_profile_pic
    self.pic_url ||= "http://farm8.staticflickr.com/7208/6788409332_4a73bc7cce_z.jpg"
  end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end

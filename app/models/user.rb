# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string
#  session_token   :string
#  first_name      :string
#  last_name       :string
#  location        :string
#  image_url       :string           default("/images/user/0.jpg")
#  bio             :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  joined          :datetime
#

class User < ApplicationRecord
  validates :email, :session_token, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :first_name, presence: { message: "can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_many :memberships
  has_many :organizers
  has_many :groups, through: :memberships, source: :group
  has_many :organizer_groups, through: :organizers, source: :group

  has_many :rsvps
  has_many :events, through: :rsvps, source: :event

  has_attached_file :image, default_url: "newUser.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  def self.find_by_credential(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end

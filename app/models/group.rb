# == Schema Information
#
# Table name: groups
#
#  id          :integer          not null, primary key
#  name        :string
#  category    :string
#  founded     :datetime
#  description :text
#  location    :string
#  image_url   :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Group < ApplicationRecord
  validates :name, :category, :location, :description, presence: true

  has_many :memberships
  has_many :organizers
  has_many :users, through: :memberships, source: :user
  has_many :organizer_users, through: :organizers, source: :user
end

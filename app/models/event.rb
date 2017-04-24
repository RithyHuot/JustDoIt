# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  group_id    :integer
#  name        :string
#  date        :datetime
#  description :text
#  location    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
  validates :name, :date, :description, :location, presence: true

  has_many :rsvps
  has_many :users, through: :rsvps, source: :user 
end

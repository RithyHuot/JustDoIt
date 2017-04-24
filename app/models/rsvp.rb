# == Schema Information
#
# Table name: rsvps
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  event_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rsvp < ApplicationRecord
  validates :user, :event, presence: true
  validates :user_id, uniqueness: { scope: :event_id }

  belongs_to :group
  belongs_to :user
end

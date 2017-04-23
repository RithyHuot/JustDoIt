# == Schema Information
#
# Table name: organizers
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  group_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Organizer < ApplicationRecord
  validates :group, :user, presence: true
  validates :group_id, uniqueness: { scope: :user_id }

  belongs_to :group
  belongs_to :user
end

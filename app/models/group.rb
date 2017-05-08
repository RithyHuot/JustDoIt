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
#  image_url   :string           default("/images/group/6.jpg")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Group < ApplicationRecord
  validates :name, :category, :location, :description, presence: true

  has_attached_file :image, default_url: "newGroup_:style.jpg",
                    :styles => {
                                :thumb => "35x35",
                                :small  => "150x150>",
                                :medium => "200x200"
                              }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :memberships
  has_many :organizers
  has_many :users, through: :memberships, source: :user
  has_many :organizer_users, through: :organizers, source: :user
end

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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

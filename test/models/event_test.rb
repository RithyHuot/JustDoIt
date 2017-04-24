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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

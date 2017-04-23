class AddToGroupTable < ActiveRecord::Migration[5.0]
  def change
    change_column_default :groups, :image_url, '/images/group/6.jpg'
  end
end

class AddToUserTable < ActiveRecord::Migration[5.0]
  def change
    change_column_default :users, :image_url, '/images/user/0.jpg'
    add_column :users, :joined, :datetime
  end
end

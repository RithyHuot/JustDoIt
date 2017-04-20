class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.string :category
      t.datetime :founded
      t.text :description
      t.string :location
      t.string :image_url
      t.timestamps
    end
  end
end

class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :group_id
      t.string :name
      t.datetime :date
      t.text :description
      t.string :location 
      t.timestamps
    end
  end
end

class CreateRsvps < ActiveRecord::Migration[5.0]
  def change
    create_table :rsvps do |t|
      t.integer :user_id
      t.integer :event_id
      t.timestamps
    end

    add_index :rsvps, [:user_id, :event_id], unique: true 
  end
end

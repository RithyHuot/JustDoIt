class CreateOrganizers < ActiveRecord::Migration[5.0]
  def change
    create_table :organizers do |t|
      t.integer :user_id
      t.integer :group_id
      t.timestamps
    end

    add_index :organizers, [:user_id, :group_id], unique: true
  end
end

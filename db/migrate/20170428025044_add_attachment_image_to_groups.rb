class AddAttachmentImageToGroups < ActiveRecord::Migration
  def self.up
    change_table :groups do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :groups, :image
  end
end

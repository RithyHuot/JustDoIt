@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :category, :founded,
                  :description, :location, :image_url, :created_at
    json.user_count group.user_ids.count
  end
end

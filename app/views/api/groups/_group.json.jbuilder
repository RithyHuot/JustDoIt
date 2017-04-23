json.set! group.id do
  json.extract! group, :id, :name, :category, :founded, :description, :location, :image_url, :created_at
  json.user_count group.user_ids.count
  json.users do
    json.array! group.users do |user|
      json.first_name user.first_name
      json.last_name user.last_name
      json.name
    end
  end
end

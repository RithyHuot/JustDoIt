json.set! group.id do
  json.extract! group, :id, :name, :category, :founded, :description, :location, :created_at
  json.image_url asset_path(group.image.url)
  json.user_count group.user_ids.count

  json.organizer do
    json.array! group.organizer_users do |organizer|
      json.id organizer.id
      json.first_name organizer.first_name
      json.last_name organizer.last_name
      json.image_url asset_path(organizer.image.url)
    end
  end

  json.users do
    json.array! group.users do |user|
      json.first_name user.first_name
      json.last_name user.last_name
      json.image_url asset_path(user.image.url)
      json.joined user.joined
      json.id user.id
    end
  end
end

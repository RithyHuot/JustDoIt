# json.set! event.id do
  json.extract! event, :id, :name, :date, :description, :location, :group_id

  json.user_count event.user_ids.count

  json.users do
    json.array! event.users do |user|
      json.first_name user.first_name
      json.last_name user.last_name
      json.image_url asset_path(user.image.url(:thumb))
      json.id user.id
    end
  end
# end

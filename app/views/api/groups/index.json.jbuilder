@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :category, :founded,
                  :description, :location, :image_url, :created_at
    json.user_count group.user_ids.count
    json.users do
      json.array! group.users do |user|
        json.first_name user.first_name
        json.last_name user.last_name
        json.image_url user.image_url
        json.joined user.joined
        json.id user.id
      end
    end
  end
end

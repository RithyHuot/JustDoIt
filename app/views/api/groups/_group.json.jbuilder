json.set! group.id do
  json.extract! group, :id, :name, :category, :founded, :description, :location, :image_url, :created_at
end 

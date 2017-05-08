json.extract! user, :id, :email, :first_name,
              :last_name, :location, :bio, :joined
json.image_url asset_path(user.image.url(:small))

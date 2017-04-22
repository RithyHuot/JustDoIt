User.destroy_all
Group.destroy_all

#Demo account
User.create!(email: 'demo@justdoit.com', password: 'password123',
             first_name: 'Jon', last_name: 'Snow')

#seeds users
10.times do
  User.create!(email: Faker::Internet.email, password: 'password123',
               first_name: Faker::Name.first_name,
               last_name: Faker::Name.last_name)
end

users = User.all

#generate random images
# rss = Urss.at("http://www.flickr.com/services/feeds/photos_public.gne?format=rss_200"); true
# images = rss.entries.map { |entry| entry.medias.collect(&:content_url) }.flatten

#seeds groups
18.times do
  users.sample.groups.create!(name: Faker::StarWars.vehicle,
                              category: Faker::StarWars.specie,
                              location: Faker::StarWars.planet,
                              description: Faker::StarWars.quote,
                              founded: Faker::Date.backward(100),
                              image_url: "/images/group/#{rand(30)}.jpg")
end

groups = Group.all

50.times do
  group_id = rand(17)
  user_id = rand(9)
  groups[group_id].user_ids = groups[group_id].user_ids.push(users[user_id].id)
end

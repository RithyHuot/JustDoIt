# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

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
rss = Urss.at("http://www.flickr.com/services/feeds/photos_public.gne?format=rss_200"); true
images = rss.entries.map { |entry| entry.medias.collect(&:content_url) }.flatten

10.times do
  users.sample.events.create!(name: Faker::StarWars.vehicle,
                              category: Faker::StarWars.specie,
                              location: Faker::StarWars.planet,
                              description: Faker::StarWars.quote,
                              founded: Faker::Date.backward(100),
                              image_url: images.sample)
end

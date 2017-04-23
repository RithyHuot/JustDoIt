User.destroy_all
Group.destroy_all

#Demo account
User.create!(email: 'demo@justdoit.com', password: 'password123',
             first_name: 'Jon', last_name: 'Snow')

#seeds users
25.times do
  User.create!(email: Faker::Internet.email, password: 'password123',
               first_name: Faker::Name.first_name,
               last_name: Faker::Name.last_name,
               joined: Faker::Date.backward(100),
               image_url: "/images/user/#{rand(36)}.jpg"
               )
end

users = User.all

#generate random images
# rss = Urss.at("http://www.flickr.com/services/feeds/photos_public.gne?format=rss_200"); true
# images = rss.entries.map { |entry| entry.medias.collect(&:content_url) }.flatten

#City and State
city = ['New York, NY', 'Los Angeles, CA', 'Phoenix, AZ', 'Columbus, OH', 'El Paso, TX', 'Philadelphia, PA', 'San Deigo, CA', 'San Antonio, TX', 'Austin, TX', 'Dallas, TX', 'Boston, MA', 'Poland, OR', 'Seattle, WA', 'Omaha, NE']

category =['Movements', 'Outdoors & Adventure', 'Tech', 'Family', 'Health & Wellness', 'Sports & Fitness', 'Learning', 'Photography', 'Food & Drink', 'Writing', 'Language & Culture', 'Music', 'LGBTQ', 'Film', 'Sci-Fi & Games', 'Beliefs', 'Arts', 'Book Clubs', 'Dance', 'Pets', 'Hobbies & Crafts', 'Fashion & Beauty', 'Social', 'Career & Business']

event = [
  'Harlem GO Meetup Group',
  'Software Engineers',
  'Artificial Intelligence Meetup',
  'Smashing Magazine',
  'React Native NYC',
  'Serveless Meetup',
  'Bronies NYC',
  'NY Indie Filmmarkers',
  'Let do something',
  'Let play together',
  "Paint Parties with Wine",
  "App Academy NYC",
  "Singles casual cocktail hour",
  "FinTech Meetup",
  "Picnic Baskets",
  "Overwatchers",
  "Movie Buffs",
  "Smash Bros!",
  "NYC Vegetarians",
  "Rock Climbers Anonymous"
 ]

description = [
  "Do you live, work, play or volunteer in the Harlem area? Maybe curious to find out what social and community activities are taking place uptown? The HarlemGo Meetup Group is dedicated to getting together offline to take in some of the social options available in Greater Harlem (East, Central, West), as well as to participate in the various volunteer opportunities in the community.\r\n\r\nIf you\'re new in town, new to the city, looking to meet new friends or people, or just curious about the things to do in Harlem, consider joining us! Even if you\'re not so new - you used to live or work here, come back and visit! This is a fun, diverse, and progressive group. We\'ll visit bars, restaurants, lounges, art exhibits, museums, parades, have board \/ card game parties, attend outdoor & sporting events, concerts, nightlife and many cultural events taking place. The subdistricts (villages) of Greater Harlem include Morningside Heights, Manhattanville, Hamilton Heights, Sugar Hill, Spanish Harlem (East Harlem), Striver\'s Row, Astor\'s Row, and Central Harlem.",

  "This is an exciting time for our human computer civilization and NYSE is a community organization dedicated to creating events for software engineers on emerging technologies and topics that have never been attempted before.\r\n\r\nEvents focus in on topics like Machine Learning, Robotics, Nanotechnology, Arduino, 3D Printing, Synthetic Biology, Artificial Intelligence, Computer History, Computer Vision, Big Data, Augmented Reality (AR), Wearable Devices, Software to Create Art, and Interstellar Space Travel all from a software engineers perspective.\r\n\r\nNYSE creates events only possible in NYC and the New York region with experts from all walks of life as possible speakers in panels and even debates between different languages, IDE\'s, technologies, techniques, marketing strategies and more.\r\n\r\nCoding ability is encouraged but not required to attend our events.\r\n\r\nEvents on emerging technologies may also touch on app development, OO, cloud, mobile, HTML5, Hadoop, Python, Eclipse, JavaScript, JAVA, HBASE, MapReduce, Erlang, jQuery, Swift, MongoDB, NoSQL, PHP, Agile, Ruby on Rails (RoR), Frameworks, Node.JS, Angular.JS, IDEs, animation, design, Twisted, Android, iPhone, iOS, Business Intelligence, and UI\/UX.\r\n\r\nNYSE offers unbelievable social networking opportunities with people from all backgrounds and philosophies.  We encourage everyone to join who has a love for new technologies, software engineering, and the opportunity to network with people building the future.",

  "Come explore the latest developments in Artificial Intelligence and Deep Learning. Talks will be a mix of technology and applications in all industry verticals including healthcare, finance, robotics, self-driving cars, scientific research and many more . Everybody welcome from the curious to experts & enthusiasts in Artificial Intelligence, Deep Learning, Neural Networks, Neuroscience, TensorFlow, Deeplearning4J, Machine Intgelligence.\r\n\r\nOur sponsor, Ivy Data Science, is an applied A.I. company that offers: A.I. platform for Healthcare\/ Finance\/ Energy\/ Retail, Consulting and Advisory, the world\'s first 12-week A.I. Immersive Bootcamp, and an AI startup Incubator. Ivy Data Science is a Harvard i-Lab Experfy Partner.",

  "This is a group for those attending SmashingConf! The night before the conference kicks off, we\u2019re hosting an evening Meet Up, with a few snacks, drinks and micro talks from your fellow attendees! We hope you\u2019ll join us to connect with each other ahead of the main event!\r\nOur sponsor, Ivy Data Science, is an applied A.I. company that offers: A.I. platform for Healthcare\/ Finance\/ Energy\/ Retail, Consulting and Advisory, the world\'s first 12-week A.I. Immersive Bootcamp, and an AI startup Incubator. Ivy Data Science is a Harvard i-Lab Experfy Partner.",

  "Hi! This is a group for enthusiasts and those curious about React Native, the Facebook-backed software for creating native iOS and Android apps with JavaScript. We will try to meet up once a month for a Hack Night, and we welcome suggestions from anyone in the community.",

  "Special interest group for pioneers in Serverless application architecture: the development, deployment and maintenance of distributed systems in the cloud, without the need for provisioning servers. \r\n\r\nRelated topics: Microservices, AWS Lambda, IBM OpenWhisk, Azure Cloud Functions, Google Cloud Functions, Event-driven systems, serverlessconf.io",

  "Are you a fan of My Little Pony: Friendship is Magic-- do you collect pony merch, do you identify as a \"brony\" or \"pegasister\"? Do you live in the New York City metropolitan area, or visiting NYC? Do you want to meet up with other My Little Pony fans and hang out, chat, just have fun? This is the group for you!",

  "Filmmakers!  From Concept to treatment to script to production to distribution deal. Let\'s get together and discuss it all! This meetup is for filmmakers to meet and discuss the creative side AND the business side of filmmaking. WRITERS with a script, meet filmmakers who may want to develop your film. FILMMAKERS, let\'s brainstorm and compare notes about distribution. DP\'s and DSLR shooters, let\'s talk about casting, directing, about web series, and about self-distribution.",

  "This group is for people to get together and do something fun and interactive.",

  "This group is for peopel that like to watch and play games and sport. Come join us.",

  "Our Studio is the upscale destination in NYC, where you can Paint, Drink, and enjoy the Fun of it!! At our studio, anyone can be an artist and have fun being creative - no art experience required! In two or three hours you can create a festive, whimsical and colorful painting while sipping on your favorite beverage. We are a BYOB studio. You can bring your own drinks and snacks! We provide glassware, utensils, plates and all of your art supplies! Join us for an unforgettable evening of fun, friends, and fine art where you enjoy the cocktails* and we provide the canvases! Bring your friends, open your favorite bottle of wine and get ready to be inspired by our experienced, fun loving artists who will guide you step-by-step to unleash your creativity . At the end of the night...you will leave our studio with your wonderful masterpiece.",

  "App Academy is a full-time, 12-week software engineering course. From thousands of applications, we've selected the top 3%. We're lucky to have an exceptional and diverse group of highly motivated self-starters, all super smart, and lots of fun. Our program teaches students everything they need to go to work immediately, including Ruby, Rails, SQL, JavaScript and React (for more info, check out our curriculum). The core skills we're training are completely language-agnostic. Students learn how to ramp up on new tech fast, how to write scalable, robust code and how to architect software solutions to real-world problems. They graduate with Github repos containing thousands of lines of code showing what they're capable of. By the end of our program, our graduates will be ready for whatever you have to throw at them; whether it's Ruby, JS, Python, etc. Companies employing App Academy graduates include: Facebook, Google, Apple, Airbnb, Uber, LinkedIn, Condé Nast, The New York Times, and Tumblr.",

  "We are a meet-up group revolving around singles in the LA area who like to get out, socialize, have some drinks and get to know each other. A fun laid back group always looking for new members.",

  "The NY FinTech Meetup - Those entrepreneurs creating alpha driving technology • Knowledge sharing and networking with industry thought-leaders • Expert speakers range from nascent technology evangelists to venture capital veterans • Bridging the gap between FinTech Entrepreneurs and the investment community",

  "A family oriented group hosting picnic huddles every month where families can bring their own dishes and enjoy an outdoor and indoor (winter time) setting. This is a great group for families interested in just socializing, and getting together to have some fun family game days and plenty of food! Bring all your children if you like. We are currently taking board game donations to add to our list of games for each huddle.",

  "All Overwatch players welcome! Learn strategies, make friends, and just have a good time",

  "Meet other movie buffs for viewings, discussions, and more!",

  "All things Super Smash Bros. related! Join tournaments and socialize with other players. Monthly tournaments happening! We embrace players of all skill levels",

  "Come together and meet with New York City Vegetarians for restaurant trips, cooking sessions, and more!",

  "Interested in rock climbing? Join this group to see huddles based on rock climbing events, competitions, lessons, and more. Anyone welcome, of all ages and all skill levels"
]

#seeds groups
18.times do |i|
  users.sample.groups.create!(name: event[i],
                              category: category.sample,
                              location: city.sample,
                              description: description[i],
                              founded: Faker::Date.backward(100),
                              image_url: "/images/group/#{rand(30)}.jpg")
end

groups = Group.all

100.times do
  group_id = rand(17)
  user_id = rand(9)
  groups[group_id].user_ids = groups[group_id].user_ids.push(users[user_id].id)
end

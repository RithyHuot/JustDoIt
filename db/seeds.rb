User.destroy_all
Membership.destroy_all
Rsvp.destroy_all
Group.destroy_all
Event.destroy_all

# generate random images
# rss = Urss.at("http://www.flickr.com/services/feeds/photos_public.gne?format=rss_200"); true
# images = rss.entries.map { |entry| entry.medias.collect(&:content_url) }.flatten

# City and State
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


# city  = File.readlines(Rails.root.join('lib', 'seeds', 'city.txt'))[0].split(';')
# event = File.readlines(Rails.root.join('lib', 'seeds', 'event.txt'))[0].split(',')
# description = File.readlines(Rails.root.join('lib', 'seeds', 'description.txt'))[0].split(';')
# category = File.readlines(Rails.root.join('lib', 'seeds', 'category.txt'))[0].split(',')

event_description =  [
  "True love will never put a blockade between you and your dreams. Be it the love of your family, friends or significant other, if the people who surround you do not support, encourage or urge you in the direction of your destiny, they may not be the best people to keep in your company. You are a product of your environment — choose yours carefully. Surround yourself with the doers, the believers, the dreamers and the thinkers. Only they will lift you higher",
  "Fear holds many of us back in life. The fear of failing, of rejection and of other’s opinions can impact us so heavily that we only fail ourselves by our own inaction. We’ve heard it many times before: The thought of something is often worse than the thing itself. It is no different than fearing failure if we go in search of our dreams. Don’t underestimate your own resilience",
  "There is no such thing as too old or too young when it comes to chasing your dreams. There is no such thing as a right time or a wrong time, either. It is simply a matter of deciding what it is you want to do and taking the necessary steps to get there. Wherever we are in the world, and in whatever circumstances we find ourselves, only we can decide to take the leap of faith and make our dreams realities",
  "What you think about, you bring about. If you put all your focus, energy and positive thoughts toward whatever it is you want, you’d be amazed at what opportunities come knocking. Whatever it is, however it happens, if you want something badly enough, it’s as if the stars re-align and are only too willing to give to you whatever your heart desires. Call it fate, coincidence, beginner’s luck or whatever sits best with you, but when you put that time and energy into something with all you have, you will manifest it into your life.",
  "Advocates from Dwayne “The Rock” Johnson to Michael Jordan to Johnny Depp to J.K. Rowling and many more successful people worldwide have sworn that success in life cannot come about without great failures. No matter how many times you get knocked back, rejected or turned away, either personally or professionally, the key is to never accept defeat. Always move forward and never stop learning. See your failures as valuable lessons on the road to success, learn from them, grow with them and never give up on your dreams.",
  "You will meet many a person who will share opinions regarding your life and your work, whether you ask or not. Some will agree with you, some won’t. C’est la vie! You will never, ever, please everybody. At the end of the day, the only person you need compare yourself to is the person you were yesterday. As long as you’re working toward your own happiness, don’t let the opinions of others divert you, especially those from people who have not yet found their own paths in life. We are all unique, what we decide to do with our time is entirely up to us; listen to your heart and answer only to yourself.",
  "The greatest riches we can ever hope to have are the ones that make us truly happy. Where do you find your happiness? To where does your heart call? It may be a profession, a hobby, a place, a person, a pet or a lifestyle, but it’s only when we stop and acknowledge what it is our hearts want that we will find our greatest treasures. These are the treasures that will bring joy and happiness into our lives; this is where the heart is.",
  "Above all, never stop dreaming. It’s the possibility of having a dream come true that makes life interesting. Just believe anything is possible.",
  "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
  "Be like water making its way through cracks. Do not be assertive, but adjust to the object, and you shall find a way around or through it. If nothing within you stays rigid, outward things will disclose themselves. Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.",
  "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.",
  "A turning point in my life came when love became my default choice for twenty-one straight days. I wondered what opportunities might open up. I wondered what connections might be repaired. I wondered what moments I might capture that I would have otherwise missed. I wondered who I might become",
  "Once upon a time, there was a girl who could do anything in the world she wanted.  All she had to do was choose something and focus.  So one day she sat down in front of a blank canvas and began to paint.  Every stroke was more perfect than the next, slowly and gracefully converging to build a flawless masterpiece.  And when she eventually finished painting, she stared proudly at her work and smiled",
  "A big part of your life is a result of the choices you make.  And if you don’t like your life – if it completely lacks excitement and passion – it’s time to start making changes and better choices.",
  "There is good reason why you should wake each morning and mindfully consider what and who you will give your day to.  Because unlike other things in life – money, entertainment, obligations, etc. – time is the one thing you can never get back once it’s gone.",
  "Greek philosopher Heraclitus once said: “No man ever steps in the same river twice, for it's not the same river and he's not the same man.” The world around us is rapidly changing. The rate of change is accelerating. Tech sector, evolving into a tech ecosystem, is at the forefront of many changes that we experience daily."
]

event_name = [
  "Let's meetup  @ Central Park!",
  "Let's meetup  @ Starbucks!",
  "Let's meetup  @ The Coffee Shop!",
  "Let's meetup  @ The Park!",
  "Let's meetup  @ My cafe",
  "Let's meetup  @ 5th Avenue",
  "Let's meetup  @ 7th Avenue",
  "Let's meetup  @ The Avenue of Americas",
  "Let's meetup  @ The Office",
  "Let's meetup  @ School",
  "Let's meetup  @ My house",
  "Let's meetup  @ Your house",
  "Let's meetup  @ My car",
  "Let's meetup  @ The hotel",
  "Let's meetup  @ Macys",
  "Let's meetup  @ Zheng's house",
  "Let's meetup  @ Jacky's house",
  "Let's meetup  @ Philip's house",
  "Let's meetup  @ The party",
  "Let's meetup  @ Cave",
  "Let's meetup  @ Rave",
  "Let's meetup  @ Dave",
  "Let's meetup  @ My Mealpal",
  "Let's meetup  @ Apple",
  "Let's meetup  @ Google"
]

#Demo account
User.create!(email: 'demo@justdoit.com', password: 'password123',
             first_name: 'Jon', last_name: 'Snow', joined: Faker::Date.backward(2000))

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

#seeds groups
15.times do |i|
  user = users.sample
  user.organizer_groups.create!(name: event[i],
                              category: category.sample,
                              location: city.sample,
                              description: description[i],
                              founded: Faker::Date.backward(1000),
                              image_url: "/images/group/#{rand(30)}.jpg")
  Group.all.last.user_ids = Group.all.last.user_ids.push(user.id)
end

3.times do |i|
  user = users.first
  user.organizer_groups.create!(name: event[i+15],
                              category: category.sample,
                              location: city.sample,
                              description: description[i+15],
                              founded: Faker::Date.backward(1000),
                              image_url: "/images/group/#{rand(30)}.jpg")
  Group.all.last.user_ids = Group.all.last.user_ids.push(user.id)
end

groups = Group.all

100.times do
  group_id = rand(17)
  user_id = rand(24)
  groups[group_id].user_ids = groups[group_id].user_ids.push(users[user_id].id)
end


100.times do
  user = users.sample
  group_id = rand(17)
  user.events.create!(
    name: event_name.sample,
    location: city.sample,
    date: Faker::Date.backward(100),
    description: event_description.sample,
    group_id: groups[group_id].id
  )
end

events = Event.all

200.times do
  event_id = rand(99)
  user_id = rand(24)
  events[event_id].user_ids = events[event_id].user_ids.push(users[user_id].id)
end

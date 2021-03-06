# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Business.destroy_all
Review.destroy_all
User.destroy_all


User.create!(
  email: 'demo@demo.com',
  password: 'demodemo',
  first_name: 'Guest',
  last_name: 'Demo',
  zipcode: 94521
)

User.create!(
  email: 'chuck@norris.com',
  password: 'chuckchuck',
  first_name: 'Chuck',
  last_name: 'Norris',
  zipcode: 94521
)
User.create!(
  email: 'brat@pizza.com',
  password: 'bratbrat',
  first_name: 'Brat',
  last_name: 'Pizza',
  zipcode: 94523
)

the_house = Business.create!(
  restaurant_name: 'The House',
  street: "1230 Grant Ave",
  neighborhood: 'North Beach',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94133,
  delivery: false,
  outdoor_seating: false,
  dogs_allowed: false,
  full_bar: true,
  breakfast: false,
  lunch: true,
  dinner: true,
  brunch: false,
  gender_neutral_restrooms: true,
  takeout: true,
  lat: 37.798459,
  lng: -122.407093,
  cat1: "Asian Fusion",
  cat2: "",
  img: "main1"
)

the_house_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thehouse1.jpg')
the_house.photos.attach(io: the_house_00, filename:"the_house_00.jpg")
the_house_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thehouse2.jpg')
the_house.photos.attach(io: the_house_01, filename:"the_house_01.jpg")
the_house_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thehouse3.jpg')
the_house.photos.attach(io: the_house_02, filename:"the_house_02.jpg")

the_shizen = Business.create!(
  restaurant_name: 'Shizen Vegan Sushi Bar & Izakaya',
  street: "370 14th St",
  neighborhood: 'Mission',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94103,
  delivery: false,
  outdoor_seating: false,
  dogs_allowed: false,
  full_bar: true,
  breakfast: false,
  lunch: false,
  dinner: true,
  brunch: false,
  gender_neutral_restrooms: true,
  takeout: false,
  lat: 37.768328,
  lng: -122.421641,
  cat1: "Sushi Bars",
  cat2: "Izakaya",
  img: "main2"
)

the_shizen_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theshizen1.jpg')
the_shizen.photos.attach(io: the_shizen_00, filename:"the_shizen_00.jpg")
the_shizen_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theshizen2.jpg')
the_shizen.photos.attach(io: the_shizen_01, filename:"the_shizen_01.jpg")
the_shizen_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theshizen3.jpg')
the_shizen.photos.attach(io: the_shizen_02, filename:"the_shizen_02.jpg")

the_ananda = Business.create!(
  restaurant_name: 'Ananda Fuara',
  street: "1298 Market St",
  neighborhood: 'Civic Center',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94102,
  delivery: true,
  outdoor_seating: false,
  dogs_allowed: false,
  full_bar: false,
  breakfast: false,
  lunch: true,
  dinner: true,
  brunch: false,
  gender_neutral_restrooms: true,
  takeout: false,
  lat: 37.777899,
  lng: -122.416265,
  cat1: "Breakfast",
  cat2: "",
  img: "main3"
)

the_ananda_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theananda1.jpg')
the_ananda.photos.attach(io: the_ananda_00, filename:"the_ananda_00.jpg")
the_ananda_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theananda2.jpg')
the_ananda.photos.attach(io: the_ananda_01, filename:"the_ananda_01.jpg")
the_ananda_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theananda3.jpg')
the_ananda.photos.attach(io: the_ananda_02, filename:"the_ananda_02.jpg")

the_gracias = Business.create!(
  restaurant_name: 'Gracias Madre',
  street: "2211 Mission St",
  neighborhood: 'Mission',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94110,
  delivery: true,
  outdoor_seating: true,
  dogs_allowed: true,
  full_bar: false,
  breakfast: false,
  lunch: true,
  dinner: true,
  brunch: false,
  gender_neutral_restrooms: false,
  takeout: true,
  lat: 37.761589,
  lng: -122.419006,
  cat1: "Mexican",
  cat2: "Breakfast",
  img: "main4"
)
the_gracias_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thegracias1.jpg')
the_gracias.photos.attach(io: the_gracias_00, filename:"the_gracias_00.jpg")
the_gracias_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thegracias2.jpg')
the_gracias.photos.attach(io: the_gracias_01, filename:"the_gracias_01.jpg")
the_gracias_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thegracias3.jpg')
the_gracias.photos.attach(io: the_gracias_02, filename:"the_gracias_02.jpg")

the_indochine = Business.create!(
  restaurant_name: 'Indochine Vegan',
  street: "508 Valencia St",
  neighborhood: 'Mission',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94110,
  delivery: true,
  outdoor_seating: true,
  dogs_allowed: false,
  full_bar: false,
  breakfast: false,
  lunch: true,
  dinner: true,
  brunch: false,
  gender_neutral_restrooms: false,
  takeout: true,
  lat: 37.764626,
  lng: -122.42216,
  cat1: "Asian Fusion",
  cat2: "Seafood",
  img: "main5"
)
the_indochine_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theindochine1.jpg')
the_indochine.photos.attach(io: the_indochine_00, filename:"the_indochine_00.jpg")
the_indochine_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theindochine2.jpg')
the_indochine.photos.attach(io: the_indochine_01, filename:"the_indochine_01.jpg")
the_indochine_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theindochine3.jpg')
the_indochine.photos.attach(io: the_indochine_02, filename:"the_indochine_02.jpg")

the_vegan = Business.create!(
  restaurant_name: 'Vegan Picnic',
  street: "1977A Union St",
  neighborhood: 'Marina/Cow Hollow',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94123,
  delivery: true,
  outdoor_seating: false,
  dogs_allowed: false,
  full_bar: false,
  breakfast: true,
  lunch: true,
  dinner: true,
  brunch: false,
  gender_neutral_restrooms: false,
  takeout: true,
  lat: 37.797418,
  lng: -122.431642,
  cat1: "Burgers",
  cat2: "Gluten-Free",
  img: "main6"
)

the_vegan_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thevegan1.jpg')
the_vegan.photos.attach(io: the_vegan_00, filename:"the_vegan_00.jpg")
the_vegan_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thevegan2.jpg')
the_vegan.photos.attach(io: the_vegan_01, filename:"the_vegan_01.jpg")
the_vegan_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thevegan3.jpg')
the_vegan.photos.attach(io: the_vegan_02, filename:"the_vegan_02.jpg")

the_liho = Business.create!(
  restaurant_name: 'Liholiho Yacht Club',
  street: "871 Sutter St",
  neighborhood: 'Lower Nob Hill',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94109,
  delivery: false,
  gender_neutral_restrooms: true,
  takeout: false,
  dogs_allowed: false,
  full_bar: true,
  breakfast: true,
  lunch: true,
  dinner: true,
  lat: 37.788232,
  lng: -122.414592,
  cat1: "Bars",
  cat2: "American Seafood",
  img: "main7"
)

the_liho_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theliho1.jpg')
the_liho.photos.attach(io: the_liho_00, filename:"the_liho_00.jpg")
the_liho_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theliho2.jpg')
the_liho.photos.attach(io: the_liho_01, filename:"the_liho_01.jpg")
the_liho_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theliho3.jpg')
the_liho.photos.attach(io: the_liho_02, filename:"the_liho_02.jpg")


the_burger = Business.create!(
  restaurant_name: 'VeganBurg',
  street: "1466 Haight St",
  neighborhood: 'The Haight',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94117,
  delivery: true,
  gender_neutral_restrooms: true,
  takeout: true,
  dogs_allowed: false,
  full_bar: false,
  breakfast: false,
  lunch: true,
  dinner: true,
  lat: 37.770376,
  lng: -122.446459,
  cat1: "Burgers",
  cat2: "Fast Food",
  img: "main8"
)

the_burger_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theburger1.jpg')
the_burger.photos.attach(io: the_burger_00, filename:"the_burger_00.jpg")
the_burger_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theburger2.jpg')
the_burger.photos.attach(io: the_burger_01, filename:"the_burger_01.jpg")
the_burger_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theburger3.jpg')
the_burger.photos.attach(io: the_burger_02, filename:"the_burger_02.jpg")

the_next = Business.create!(
  restaurant_name: 'Next Level Burger',
  street: "450 Rhode Island St",
  neighborhood: 'Potrero Hill',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94107,
  delivery: true,
  gender_neutral_restrooms: false,
  takeout: true,
  dogs_allowed: false,
  full_bar: false,
  breakfast: false,
  lunch: true,
  dinner: true,
  lat: 37.764564,
  lng: -122.403289,
  cat1: "Burgers",
  cat2: "Gluten-Free",
  img: "main9"
)

the_next_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thenext1.jpg')
the_next.photos.attach(io: the_next_00, filename:"the_next_00.jpg")
the_next_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thenext2.jpg')
the_next.photos.attach(io: the_next_01, filename:"the_next_01.jpg")
the_next_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thenext3.jpg')
the_next.photos.attach(io: the_next_02, filename:"the_next_02.jpg")


the_golden = Business.create!(
  restaurant_name: 'Golden Era Vegan Restaurant',
  street: "395 Golden Gate Ave",
  neighborhood: 'Civic Center',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94102,
  delivery: false,
  gender_neutral_restrooms: false,
  takeout: true,
  dogs_allowed: false,
  full_bar: false,
  breakfast: false,
  lunch: true,
  dinner: true,
  lat: 37.781270,
  lng: -122.416633,
  cat1: "Pho",
  cat2: "Vietnamese",
  img: "main10"
)

the_golden_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thegolden1.jpg')
the_golden.photos.attach(io: the_golden_00, filename:"the_golden_00.jpg")
the_golden_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thegolden2.jpg')
the_golden.photos.attach(io: the_golden_01, filename:"the_golden_01.jpg")
the_golden_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thegolden3.jpg')
the_golden.photos.attach(io: the_golden_02, filename:"the_golden_02.jpg")

the_yummy = Business.create!(
  restaurant_name: 'Yummy Yummy',
  street: "1015 Irving St",
  neighborhood: 'Inner Sunset',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94122,
  delivery: true,
  gender_neutral_restrooms: true,
  takeout: true,
  dogs_allowed: false,
  full_bar: true,
  breakfast: false,
  lunch: true,
  dinner: true,
  lat: 37.763724,
  lng: -122.468824,
  cat1: "Chinese",
  cat2: "Pho",
  img: "main11"
)
the_yummy_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theyummy1.jpg')
the_yummy.photos.attach(io: the_yummy_00, filename:"the_yummy_00.jpg")
the_yummy_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theyummy2.jpg')
the_yummy.photos.attach(io: the_yummy_01, filename:"the_yummy_01.jpg")
the_yummy_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/theyummy3.jpg')
the_yummy.photos.attach(io: the_yummy_02, filename:"the_yummy_02.jpg")

the_pho = Business.create!(
  restaurant_name: 'Pho 2000',
  street: "637 Larkin St",
  neighborhood: 'Tenderloin',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94109,
  delivery: false,
  gender_neutral_restrooms: true,
  takeout: true,
  dogs_allowed: false,
  full_bar: false,
  breakfast: false,
  lunch: true,
  dinner: true,
  lat: 37.783883,
  lng: -122.417881,
  cat1: "Chinese",
  cat2: "Noodles",
  img: "main12"
)

the_pho_00 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thepho1.jpg')
the_pho.photos.attach(io: the_pho_00, filename:"the_pho_00.jpg")
the_pho_01 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thepho2.jpg')
the_pho.photos.attach(io: the_pho_01, filename:"the_pho_01.jpg")
the_pho_02 = open('https://velg-seeds.s3-us-west-1.amazonaws.com/thepho3.jpg')
the_pho.photos.attach(io: the_pho_02, filename:"the_pho_02.jpg")

Review.create!(
  body: <<~REVIEW,
    Finally made it to The House, and it lived up to all of their amazing \
    reviews. Highly recommended for a date night, or a good spot to take the \
    parents. It's small and cozy, so not great for a big group.

    What we ordered:
    -Salmon rolls
    -Sea Bass
    -Wasabi noodles

    All 5 stars. Would come back to eat the salmon \
    rolls and sea bass again and again.

    The service is quick, the food was delicious, the wine was good.

    Cannot wait to come back, might be my new favorite SF spot!

  REVIEW
  author_id: 2,
  business_id: 1,
  useful: 2,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,
  Octopus app: 5/5 delicious deep smoky flavor and the octopus is so \
   deliciously tender. Didn't know octopus could be so tender.

Oysters: 5/5 some of the meatiest, most delicious and fresh oysters I've had. \
The sauce you pour onto each oyster has a good balance of heat and acid. \
It was delicious!

Pork chop: 5/5 sweetness that reminds of charsiu. Ate it all, fat and all! \
The potatoes and asparagus that comes with it is also yummy. As were the thin\
 crisps of, could it be taro?

Sea bass: 4/5. The sea bass itself? It was a 5/5. So deliciously tender \
and buttery. Perfectly cooked and melts in your mouth!

  REVIEW
  author_id: 3,
  business_id: 1,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 5
)
Review.create!(
  body: <<~REVIEW,

  Had dinner with my S. Seagal on a date night and had such an amazing experience!
  We did not plan on coming here specifically and surprisingly found an availability through OpenTable right away!
  The service was really good, the food was AMAZING and the atmosphere was so cozy and nice.
  I have lived in SF for the last 3.5 years now and have been to the Castro many times. I didn't notice this place before but so glad Steve took me here!
  Definitely will come back and definitely will recommend it to friends!
  A real gem!
  REVIEW
  author_id: 2,
  business_id: 1,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 3
)
Review.create!(
  body: <<~REVIEW,

  Service was decent once they realized we were there but we sat for about 15 minutes before a waiter came over to us. The soup was incredibly delicious. My friend tried a bite of my soup and then instantly ordered one for herself. Entrees were ok but not memorable. The sea bass is a full fish so be ready for that. The orecchiette had large raw greens that overshadowed the yummy pasta. Seemed like the greens were used to fill the bowl but they detracted from the pasta itself. Ambiance is cute and the vibe is lively but quiet enough for an easy conversation

  REVIEW
  author_id: 3,
  business_id: 2,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

  Such a good place to have a meal. Quaint upstairs restaurant in the middle of the Castro district. The food is really good and moderately priced (3 cocktails, 2 starters, 4 mains, 1 dessert = $145 more than enough for 4 ppl -- could have gotten 3 mains). Good for sharing. Pastas are homemade. Service is authentic Italian.

  REVIEW
  author_id: 3,
  business_id: 2,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 5
)
Review.create!(
  body: <<~REVIEW,

  The place is cute and small so reservations are definitely needed.  7:30pm and later, the noise level reaches a fever pitch so conversation is difficult.  The Staff are all friendly and charming, if not in a rush, but understandable since there are 4 of them to cover a packed restaurant.

  Their bread is generic and cold, but the citrus-herb-olive oil dipping sauce is fresh and vibrant, so it makes up for the plain bread, (Helpful Tip: Spoon some of this dipping sauce over the many mounds of arugula you're about to get with your appetizers/meal).
  REVIEW
  author_id: 2,
  business_id: 2,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

  love that they have happy hour but the oysters though really fresh get served with a very oily mignonette. The waiter didn't even know what a mignonette is. It should be.light acidic like lemon & vinegar-' not this. And the eggplant caponata is so sweet. 2 olives cut in half,
  yet no tomatoes I could find, all sweet no tart. Note to self: only order the tomato bread soup or the Branzino. These 2 items are consistently good.

  REVIEW
  author_id: 2,
  business_id: 3,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,
  The staff were so friendly! I had a really amazing time and enjoyed all of my food. It was so delicious! I especially enjoyed the squid ink pasta. Also, all of the servers were incredibly handsome and friendly! The wine selection was outstanding.

  REVIEW
  author_id: 3,
  business_id: 3,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 5
)

Review.create!(
  body: <<~REVIEW,
Really good Italian restaurant in the Castro. Came here after happy hour with friends and we had a great time.  Ordered the burrata, crostini and branzino and everything was great.  Service and ambiance were also excellent.

  REVIEW
  author_id: 3,
  business_id: 4,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,
  Had a wonderful dinner here last night with Van Damme. Excellent service, delicious food, romantic ambiance. This place feels old school Castro, which is nice in neighborhood beset with revolving door, overpriced, "trendy" eateries. And hey, this place is even good enough for Oprah who I recall eating here a few years back!
  REVIEW
  author_id: 2,
  business_id: 4,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,
Food is awesome as always... however... the kitchen was a disaster at getting things out in a timely manner... had to cancel our appetizer Bc the main courses were coming out beforehand. We'd ordered the appetizer 25 min before the main course so we could have it with our wine. I'll be back.. not my first time here...  cheers
  REVIEW
  author_id: 3,
  business_id: 4,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,
This restaurant was particularly good tonight. The salmon was seasoned and tender, with incredible flavor and freshness. It was the best salmon I ever tasted. My partner, Mike, particularly enjoyed his eggplant parmigiana, which also had incredible taste and flavor, the best eggplant parmigiana ever. I highly recommend this restaurant. It's a tribute to Italian cooking and Francesco is a wonderful host.
  REVIEW
  author_id: 2,
  business_id: 5,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

Datteri Ripieni was from the gods! Definitely a side you cannot pass up. Would be a great appetizer.
Overall service was wonderful and attentive to our needs. Quaint atmosphere enjoyed by a group of 8. They were willing to split the bill too!
  REVIEW
  author_id: 2,
  business_id: 5,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

  My only real complaint about this place is the service. I'm not sure if they were understaffed or something but I was awkwardly waiting in the front for at least 5 minutes for anyone to even acknowledge me. The waiter also served us the wrong tables food and never really came to check on us during our meal (would not been too much of a problem but I really wanted some more water...)
  REVIEW
  author_id: 3,
  business_id: 5,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

  The waiter/bartender seemed a little somewhere else, but he was attentive when we needed something. The music was middle eastern pop-y/club-y, which seemed a little odd for a wine bar, but it worked. Chill vibe overall.

  REVIEW
  author_id: 2,
  business_id: 6,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

  Great service. Great food. The restaurant is not fancy bit really clean organized and quite. Good lighting and tge sound of water is amazing. Our waiter with blond pony tail was so polite. I saw him how he served the other tables as well. Such a great behavior.
  Food was amazing. I didn't feel heavy at all. I like the fact there are ingredients in menu which says ORGANIC. Hope one day they are All organic.
  I will be back. Can't wait. I've already recommended this restaurant to my friends.
  REVIEW
  author_id: 2,
  business_id: 6,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

  The place itself is small and very hip the decor is contemporary. I wasn't aware that the restaurant is Indian food I'm not a huge fan of Indian food but I have to say this one was very delicious. Plus it's vegetarian! I got the "chicken" sandwich it was delicious. Not too over priced but yet again it is San Francisco so you can expect to pay a decent amount for food
  REVIEW
  author_id: 3,
  business_id: 6,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

I know I want to come back here and try the other items on the menu because of the soy products. I am a huge fan of veggie meat because veggie meat tries so hard to imitate real meat but fails. If veggie meat tasted like real meat, I would probably avoid eating veggie meat in a vegetarian restaurant.
  REVIEW
  author_id: 2,
  business_id: 7,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

I've had the neatloaf and TBM sandwich on ciabatta in the past. I also love their dal. This time we started with samosas (vegan and yummy) and I got the portobello quesadilla and dal lunch combo. My colleague got the neatloaf sandwich. Quesadilla was delicious and cheesy-large portion for lunch. Neatloaf is delicious here but dry (ask for extra sauce) and the texture of the loaf and the bread are very similar. Still delicious though and very filling!
  REVIEW
  author_id: 3,
  business_id: 7,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

This place is just incredible. The Tangy Tartar is the stuff dreams are made of. It's absolutely my favorite menu item. My second favorite is the smoky BBQ with an Impossible patty. The fries are good but too expensive. A large serving of loaded fries is the same price as a burger. Still, this place gets 5 stars and I'll come back every chance I get. 

Oh yeah, and they put an insane amount of red onion on each burger so you end up picking off a lot of it.
  REVIEW
  author_id: 2,
  business_id: 8,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

  If you're looking for some flavorful, satisfying, not your run of the mill vegan food, come here! The atmosphere is welcoming and the vibe puts you at ease. I had the pineapple burger, as well as a shared order or fries and "chicken nuggets". The meal was eaten in silence and quickly lol. The food was soo delicious. I could see this being a regular spot for me whenever I'm I  SF. It's worth a try for everyone.
  REVIEW
  author_id: 3,
  business_id: 8,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

  'Oh, you're back again!?' Lol.
  The last time I stayed in the 'loin for a week, I spent three lunches here. I loved the service, and the All American just spoke to me in a filthy/sexy way. I started to tell everyone to order it. 
  I've been veggie for a while, and I've dipped in and out of veganism, so sometimes I want a grain-and-veg-based party, and sometimes something really meat-like. This place has it all. But my proudest achievement has to be taking a meat-crazy friend from Texas and seeing the look on their face when they realized these burgers are both vegan and bomb!

  REVIEW
  author_id: 3,
  business_id: 9,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

  High expectations were quickly quashed upon receiving my order. Classic chzburger reminded me of the frozen veggie burgers from grocery store (morning star or boca). Had that distinctly artificial taste so familiar to processed veggie burgers. Ignoring that, it was nutritious and packed with protein so it was ok. 

Big let down were the french fries. How they can fk up the most basic American side is beyond me. Burnt fries and half of them looked like the detritus you pick out of the fryer every few hours. They didn't even salt them...terrible.

Total M.E.H rating for this place.

  REVIEW
  author_id: 2,
  business_id: 9,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 4
)
Review.create!(
  body: <<~REVIEW,

  I am blown away by the food here. I'm neither vegan nor vegetarian but this is officially one of my new favorite restaurants after my first visit! All four of our shared dishes were EXCELLENT. By far the best vegan food and tofu I've ever had. We had the lemongrass deluxe "chicken" (tofu) the Mama's Claypot (amazing) the royal fried rice and the avocado rolls. We didn't stop raving the entire meal. Meat lovers, don't miss out you won't regret giving this place a try. Great friendly fast service as well.

  REVIEW
  author_id: 2,
  business_id: 10,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 5,
)
Review.create!(
  body: <<~REVIEW,

  I have become somewhat of a vegan Chinese food connoisseur since becoming vegan three years ago and I have eaten at some pretty solid places. Golden Era is hands down the best vegan Chinese food in the US that I have had so far and definitely my favorite in California. 

  Go check this place if you're a vegan or really anyone and you have a Chinese food craving in SF.

  REVIEW
  author_id: 3,
  business_id: 10,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 5
)
Review.create!(
  body: <<~REVIEW,

  I would say hands down this is the best Vietnamese restaurant in San Francisco. Provided you can accept the fact that service's abrupt (like most traditional Asian restaurants in San Francisco), I think that you will find the service to be helpful and attentive. And the food is very good. 

  Note:  make sure you go well in advance of closing time. The owner, who has a great personality, shuts down relatively early.  Although many restaurant owners might try to milk it to the end, he knows how to end on a high note.

  REVIEW
  author_id: 3,
  business_id: 11,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 5
)
Review.create!(
  body: <<~REVIEW,

  I usually go to Y&Y on Clement instead of here, since there's usually a high chance of a line with this restaurant.  I can barely remember the last time I ate at Yummy Yummy.  But the pho I had here was just amazing.  

  Although my usual choice at Y&Y is the Five spice chicken with vermicelli, I decided to go with the Chicken noodle soup instead, and it was so good.  I didn't really have an appetite when I sat down, but once I had my first taste of the noodles, I was ready to eat.  The broth was so delicious, and the garlic included gave it an extra flavor.  

  So good, a definite must to come again.

  REVIEW
  author_id: 2,
  business_id: 11,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 5
)
Review.create!(
  body: <<~REVIEW,

  Absolutely delicious! 

Please note this please is cash only, be prepared before you sit down, otherwise there's an ATM across the street. 

The food was so incredibly delicious and tasted authentic Vietnamese. I had the Bun Bo Hue (spicy broth) with pig feet and big blood. My partner had a bowl of Pho Dac Biet. And we both shared an appetizer of pork and shrimp summer rolls. 

The service, food, and location is perfect. And super inexpensive for the quality. 

A friend recommended this place since we were visiting, and I wish we lived in San Francisco because we would be regulars weekly if we did. 

If you love Vietnamese food, do yourself a favor and visit this place.

  REVIEW
  author_id: 2,
  business_id: 12,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 5
)
Review.create!(
  body: <<~REVIEW,

  Despite the negative reviews and the food safety alert posted recently, I have been here twice and enjoyed what I ordered. 
Highlights are the Bun Rieu (i'd say the best I've had anywhere) and the catfish in caramel sauce in the clay pot. It's not the ambiance I come here for, but it's the delicious food and great prices that will keep me coming back. The service is nice enough.

  REVIEW
  author_id: 3,
  business_id: 12,
  useful: 1,
  cool: 0,
  funny: 1,
  rating: 5
)

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

Business.create!(
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
)
Business.create!(
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
)
Business.create!(
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
)
Business.create!(
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
)
Business.create!(
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
)
Business.create!(
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
)

Business.create!(
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
)

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
)
Review.create!(
  body: <<~REVIEW,

  Service was decent once they realized we were there but we sat for about 15 minutes before a waiter came over to us. The soup was incredibly delicious. My friend tried a bite of my soup and then instantly ordered one for herself. Entrees were ok but not memorable. The sea bass is a full fish so be ready for that. The orecchiette had large raw greens that overshadowed the yummy pasta. Seemed like the greens were used to fill the bowl but they detracted from the pasta itself. Ambiance is cute and the vibe is lively but quiet enough for an easy conversation

  REVIEW
  author_id: 2,
  business_id: 2,
  useful: 1,
  cool: 0,
  funny: 1,
)
Review.create!(
  body: <<~REVIEW,

  Such a good place to have a meal. Quaint upstairs restaurant in the middle of the Castro district. The food is really good and moderately priced (3 cocktails, 2 starters, 4 mains, 1 dessert = $145 more than enough for 4 ppl -- could have gotten 3 mains). Good for sharing. Pastas are homemade. Service is authentic Italian.

  REVIEW
  author_id: 2,
  business_id: 2,
  useful: 1,
  cool: 0,
  funny: 1,
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
)
Review.create!(
  body: <<~REVIEW,
  The staff were so friendly! I had a really amazing time and enjoyed all of my food. It was so delicious! I especially enjoyed the squid ink pasta. Also, all of the servers were incredibly handsome and friendly! The wine selection was outstanding.

  REVIEW
  author_id: 2,
  business_id: 3,
  useful: 1,
  cool: 0,
  funny: 1,
)

Review.create!(
  body: <<~REVIEW,
Really good Italian restaurant in the Castro. Came here after happy hour with friends and we had a great time.  Ordered the burrata, crostini and branzino and everything was great.  Service and ambiance were also excellent.

  REVIEW
  author_id: 2,
  business_id: 4,
  useful: 1,
  cool: 0,
  funny: 1,
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
)
Review.create!(
  body: <<~REVIEW,
Food is awesome as always... however... the kitchen was a disaster at getting things out in a timely manner... had to cancel our appetizer Bc the main courses were coming out beforehand. We'd ordered the appetizer 25 min before the main course so we could have it with our wine. I'll be back.. not my first time here...  cheers
  REVIEW
  author_id: 2,
  business_id: 4,
  useful: 1,
  cool: 0,
  funny: 1,
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
)
Review.create!(
  body: <<~REVIEW,

  My only real complaint about this place is the service. I'm not sure if they were understaffed or something but I was awkwardly waiting in the front for at least 5 minutes for anyone to even acknowledge me. The waiter also served us the wrong tables food and never really came to check on us during our meal (would not been too much of a problem but I really wanted some more water...)
  REVIEW
  author_id: 2,
  business_id: 5,
  useful: 1,
  cool: 0,
  funny: 1,
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
)
Review.create!(
  body: <<~REVIEW,

  The place itself is small and very hip the decor is contemporary. I wasn't aware that the restaurant is Indian food I'm not a huge fan of Indian food but I have to say this one was very delicious. Plus it's vegetarian! I got the "chicken" sandwich it was delicious. Not too over priced but yet again it is San Francisco so you can expect to pay a decent amount for food
  REVIEW
  author_id: 2,
  business_id: 6,
  useful: 1,
  cool: 0,
  funny: 1,
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
)
Review.create!(
  body: <<~REVIEW,

I've had the neatloaf and TBM sandwich on ciabatta in the past. I also love their dal. This time we started with samosas (vegan and yummy) and I got the portobello quesadilla and dal lunch combo. My colleague got the neatloaf sandwich. Quesadilla was delicious and cheesy-large portion for lunch. Neatloaf is delicious here but dry (ask for extra sauce) and the texture of the loaf and the bread are very similar. Still delicious though and very filling!
  REVIEW
  author_id: 2,
  business_id: 7,
  useful: 1,
  cool: 0,
  funny: 1,
)

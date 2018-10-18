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
and buttery. Perfectly cooked and melts in your mouth! But the sauce needs \
some work, the green beans are super plain \
(though well cooked), and the noodles a bit plain and salty. Maybe some more \
garlic to the noodles to add some flavor? Maybe a bit more acid, \
like lemon, to brighten it up? Something is missing.

Wasabi noodles: 4.5/5 the pork was a bit dry. Appreciated the kimchi \
like flavors throughout the dish. Well balanced and tasty. Not too spicy.

  REVIEW
  author_id: 3,
  business_id: 1,
  useful: 1,
  cool: 0,
  funny: 1,
)

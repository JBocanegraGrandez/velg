# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

json.extract! business, :id, :restaurant_name, :street, :city, :state, :neighborhood, :zipcode, :delivery, :takeout, :lunch, :lat, :lng, :cat1, :cat2, :img
json.photos business.photos.map { |photo| url_for(photo) }

# json.url user_url(user, format: :json)

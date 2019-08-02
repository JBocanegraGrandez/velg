json.extract! business, :id, :restaurant_name, :street, :city, :state, :neighborhood, :zipcode, :delivery, :takeout, :lunch, :lat, :lng, :cat1, :cat2, :img
json.photos business.photos.map { |photo| url_for(photo) }


# json.url user_url(user, format: :json)
reviews = business.reviews
json.set! :reviews do
  json.array! reviews do |review|

    json.extract! review, :id, :author_id, :business_id, :useful, :funny, :cool, :author, :body, :created_at
  end
end

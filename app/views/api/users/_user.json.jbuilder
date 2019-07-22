json.extract! user, :id, :first_name, :last_name, :email, :zipcode

# json.url user_url(user, format: :json)
reviews = user.reviews
json.set! :reviews do
    json.array! reviews do |review|
        json.extract! review, :id, :author_id, :business_id, :useful, :funny, :cool, :author, :body, :created_at
    end
end
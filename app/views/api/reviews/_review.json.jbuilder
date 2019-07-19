json.extract! review, :id, :author_id, :business_id, :useful, :funny, :cool, :body, :created_at
# json.url user_url(user, format: :json)
json.set! :author do
  json.extract! review.author, :first_name, :last_name
end

 # YOU ARE NOT HITTING THIS

require "json"
# require "http"
# require "optparse"

class YelpSearch::SessionsController < ApplicationController

  API_KEY = "tAKjoALiA1pZmZf3VHT2zMe4jrdv7NEK0pSdcOLSzSjBBcGq1xCPdt9aXXx5h5G4bNPpPQ2RXZHkU5RT60Ow7TK_h45p-GnWtZP2kgZs3XXbZpJfBO_0rSifYBvEW3Yx"



  API_HOST = "https://api.yelp.com"
  SEARCH_PATH = "/v3/businesses/search"
  BUSINESS_PATH = "/v3/businesses/"

  DEFAULT_BUSINESS_ID = "yelp-san-francisco"
  DEFAULT_TERM = "dinner"
  DEFAULT_LOCATION = "San Francisco, CA"
  SEARCH_LIMIT = 10


  def search(term, location)
    url = "#{API_HOST}#{SEARCH_PATH}"
    params = {
      term: term,
      location: location,
      limit: SEARCH_LIMIT
    }

    response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
    response.parse
  end

  def business(business_id)
    url = "#{API_HOST}#{BUSINESS_PATH}#{business_id}"

    response = HTTP.auth("Bearer #{API_KEY}").get(url)
    response.parse
  end

end

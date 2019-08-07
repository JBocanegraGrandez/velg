# Velg

[Velg Heroku live](https://velg.herokuapp.com/#/)

Velg is a Yelp clone site that allows users to browse vegan friendly business

![Yelp screenshot](https://github.com/JBocanegraGrandez/velg/blob/master/readme/velg_screenshot.png)
## Technologies
  ### Backend:
    Ruby on Rails (2.5.1)
    PostgreSQL as database
  ### Frontend:
    React.js
    Redux
    Html/CSS
  ### API CALLS
    Google Maps
    
## Features
  Maintain User Auth security Frontend-Backend via BCrypt
  Users can search business by name or category
  Search Results are showed in google maps using GoogleMap API 
  
  ### Search 

  Users can look up for businesses by typing part/all of the business name or category. The default location is San Francisco.
  
  The center of the map the location of the first search result. If there is no matching result, the map won't be rendered.

  ### Showing Business Pictures
  
  Each business has only 3 pictures showing at a time in the business show page.
  The picture in the middle is bigger and stands out from the rest. However when the user hovers on another picture. That picture will pop out.
  
  I acomplished this by using transitions on CSS:
  
  
  
Additional notes:

This repo includes a seed file. Make sure to run the seed command before using this app.

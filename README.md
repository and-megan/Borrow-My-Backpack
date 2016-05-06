# Borrow My Backpack

[Heroku link][heroku]

[heroku]: http://borrowmybackpack.site/

## About

Borrow My Backpack is a web application inspired by CouchSurfing. Borrow My Backpack is built using Ruby on Rails and React.js.

Borrow My Backpack allows users to share sports equipment. Lenders can post their equipment, such as backpacks and kayaks. Borrowers search through listed equipment and send requests with specific dates to the lender. Lenders can accept or reject borrower requests. Borrow My Backpack would allow people to experience outdoor activities without necessitating large purchases. This app was not built for commercial purposes, but rather to showcase the skills of the developer.

## Features

Borrow My Backpack allows users to do the following:
* Sign in and out using front-end authentication
* Dynamically search for sports equipment listings through backend filtering
* Make requests to borrow sports equipment for a given period of time
* Add, remove, edit sports equipment
* Approve and deny requests
* View and click on listings on a map


## Sign In
![sign-in-page]
[sign-in-page]: (./app/assets/images/sign-in-screen.png)
The Sign-in page uses BCrypt to encrypt and salt passwords before they are saved to the database. A guest demo account was created for people to easily test the site's features.

## Home Page
![home-page]
[home-page](/app/assets/images/home-page.png)
The home page hosts all available sporting goods. Users can click on items to view details. Users can toggle on or off categories to dynamically search through the listings. The map utilizes Google's API to find locations on a map and place markers indicating the location of the sporting good.

## Create, edit, and delete listings
![new-listing]
[new-listing](/app/assets/images/new-listing.png)
Users can quickly load new sporting goods to lend. A thumbnail of the listing and a new marker are created as soon as the listing is saved.

## Respond and view requests
![request-response]
[request-response](/app/assets/images/request-response.png)

### Technology
* React.js/Flux
* Ruby/Rails
Borrow My Backpack uses Ruby/Rails to implement its database and uses React.js/Flux to implement its frontend. It makes use of Google Maps API to geocode locations and place markers with click listeners on the map. These markers dynamically change when filters are applied. The site's styling uses hand-rolled CSS and makes liberal use of Flexbox. Npm packages include babel, react-router, react-modal, and linked-state to support jsx.

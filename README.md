# Borrow My Backpack

[Heroku link][heroku]

[heroku]: http://borrowmybackpack.site/

## About

Borrow My Backpack is a web application inspired by CouchSurfing. It is built using Ruby on Rails and React.js.

This app allows users to share sports equipment. Lenders can post their equipment, such as backpacks and kayaks. Borrowers search through listed equipment and send requests with specific dates to the lender. Lenders can accept or reject borrower requests. Borrow My Backpack would allow people to experience outdoor activities without necessitating large purchases. This app was not built for commercial purposes, but rather to showcase the skills of Megan Anderson, the developer.

## Features

Borrow My Backpack allows users to do the following:
* Sign in and out using front-end authentication
* Dynamically search for sports equipment listings through backend filtering
* Make requests to borrow sports equipment for a given period of time
* Add, remove, edit sports equipment
* Approve and deny requests
* View and click on listings on a map

## Single Page App
Borrow My Backpack exists as a single page app. React components are rendered into one static page. DOM Elements are altered depending on user input. This allows for fast rendering, responsive design, immediate visual feedback, and little server load.

## Associations
This app makes liberal use of associations. Associations allow for an elegant, quick way to make Active Record queries. JSON information is rendered through jBuilder files and returned to the front-end.
``` ruby
json.extract! request, *request.attributes.keys
json.sender request.sender
json.sporting_good request.sporting_good
json.start_date request.start_date.strftime("%B %d, %Y")
json.end_date request.end_date.strftime("%B %d, %Y")
```
## React Router
This app utilizes the react router library. This allows for an easy way to manage state throughout the site. React router makes navigation simple and quick, by rendering components and giving the app the ability to use HashHistory.

``` javascript
<Route path="/" component={App}>
  <Route path="login" onEnter={requireNotSignedIn} component={LoginForm} />
  <Route component={Landing} >
    <IndexRoute component={SportingGoodIndex} />
    <Route path="sporting_goods/received_requests" component={RequestInbox} />
    <Route path="sporting_goods/sent_requests" component={SentRequestInbox} />
    <Route path="sporting_goods/:sportingGoodId" component={SportingGoodShow} />
    <Route path="sporting_goods/:sportingGoodId/edit" component={SportingGoodEdit} />
  </Route>
</Route>
```
## Flux Cycles
Borrow My Backpack shows mastery of Flux cycles. Several Flux cycles have been implemented. This allows for clear, one-way paths of information travel and retrieval. User actions and database retrieval are explicitly linked. The below code features a click-handler which sets filters to a component's state and fires off a message to the back-end to filter data by the given parameters.
``` javascript
toggleFilterState: function (e) {
  if (this.state.filters.indexOf(e.target.value) === -1) {
    var newState = {};
    var newFilterState = this.state.filters.concat(e.target.value);
    newState[e.target.value] = true;
    newState['filters'] = newFilterState;
    this.setState(newState);
    this.updateStore(newFilterState);
  } else {

    var parameter = this.state.filters.indexOf(e.target.value);
    var newFilters = this.state.filters.splice(parameter, 1);

    var updatedState={};
    updatedState[e.target.value] = true;
    updatedState['filters'] = this.state.filters;
    this.setState(updatedState);
    this.updateStore(this.state.filters);
  }
},
```

## Sign In
The Sign-in page uses BCrypt to encrypt and salt passwords before they are saved to the database. A guest demo account was created for people to easily test the site's features.
![sign-in-screen](https://github.com/and-megan/Borrow-My-Backpack/blob/master/docs/sign-in-screen.png)


## Home Page
The home page hosts all available sporting goods. Users can click on items to view details. Users can toggle on or off categories to dynamically search through the listings. The map utilizes Google's API to find locations on a map and place markers indicating the location of the sporting good.
![home-page](https://github.com/and-megan/Borrow-My-Backpack/blob/master/docs/home-page.png)


## Create, edit, and delete listings
Users can quickly load new sporting goods to lend. A thumbnail of the listing and a new marker are created as soon as the listing is saved.
![new-listing](https://github.com/and-megan/Borrow-My-Backpack/blob/master/docs/new-listing.png)

## Respond and view requests
Users can view received and sent requests. They are able to toggle between the two inboxes. Received requests can be approved or denied.
![request-response](https://github.com/and-megan/Borrow-My-Backpack/blob/master/docs/request-response.png)

### Technology
* React.js/Flux
* Ruby/Rails
Borrow My Backpack uses Ruby/Rails to implement its database and uses React.js/Flux to implement its frontend. It makes use of Google Maps API to geocode locations and place markers with click listeners on the map. These markers dynamically change when filters are applied. The site's styling uses hand-rolled CSS and makes liberal use of Flexbox. Npm packages include babel, react-router, react-modal, and linked-state to support jsx.

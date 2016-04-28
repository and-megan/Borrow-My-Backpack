# Borrow My Backpack

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Borrow My Backpack is a web application inspired by CouchSurfing. Borrow My Backpack is built using Ruby on Rails and React.js.

Borrow My Backpack allows users to share sports equipment. Lenders can post their equipment, such as backpacks and kayaks. Borrowers search through listed equipment and send requests with specific dates to the lender. Lenders can accept or reject borrower requests. Borrow My Backpack could connect people with outdoor adventures without necessitating large purchases. This app was not built for commercial purposes, but rather to showcase the skills of the developer.

By the end of Week 9, Borrow My Backpack will, at a minimum, satisfy the following criteria:

- [ ] Sign in/out with authentication, including a demo account
- [ ] Responsive, bug-free navigation
- [ ] Interesting & adequate seed data to show off site's features
- [ ] Minimum features for a CouchSurfing-inspired app: equipment listings, requests, approvals, search functionality, and user accounts
- [ ] Hosting on Heroku
- [ ] Aesthetic CSS styling
- [ ] A production README

## Product Goals and Priorities

Borrow My Backpack (BMB) will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create, edit, and view sports equipment listings (MVP)
- [ ] Edit profile (MVP)
- [ ] Make and respond to rental requests (MVP)
- [ ] Search listings based on location and type (MVP)
- [ ] View upcoming equipment rentals (lender and borrower) on homepage (expected feature, but not MVP)
- [ ] Create and attend BMB Events. View upcoming events on homepage feed (expected feature, but not MVP)
- [ ] View equipment listings on a map (if all other features completed)
- [ ] View equipment availability calendar on equipment listings (if all other features completed)


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup, User Authentication, SportingGood model & controller (1 day)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication (SessionsController)
- [X] sign in, sign out pages for User
- [X] blank landing page after signin
- [X] create `SportingGood` model
- [X] CRUD API for SportingGoods (`SportingGoodsController`)
- [ ] seed the database with a small amount of test data

### Phase 2: Models, API, and basic APIUtil (1.5 days)

**Objective:** SportingGoods, Profiles, and Requests can be created, read, edited and destroyed through
the API.


- [ ] Profiles Model & Controller
- [ ] Requests Model & Controller
- [X] jBuilder views for SportingGoods
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (3 days)

**Objective:** SportingGoods can be created, requested, edited, and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router -partially set up
- implement each SportingGood component, building out the flux loop as needed.
  - [X] `SportingGoodsIndex`
  - [X] `SportingGoodIndexItem`
  - [X] `SportingGoodForm` - but need to not display for not logged in
  - [ ] `& edit`
  - implement each Requests component, building out the flux loop as needed.
    - [ ] `RequestsIndex`
    - [ ] `RequestIndexItem`
    - [ ] `RequestForm & edit`
  <!-- - implement each Events component, building out the flux loop as needed. IF TIME.
    - [ ] `EventsIndex`
    - [ ] `EventIndexItem`
    - [ ] `EventForm & edit` -->



### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Profiles React (1 day)

**Objective:** Get Profile component stuff fleshed out.
- implement each Profile component, building out the flux loop as needed.
  <!-- - [ ] `ProfilesIndex` -->
  - [ ] `ProfileIndexItem`
  - [ ] `ProfileForm & edit`
- Use CSS to style new views
- [ ] Catch up on anything you've fallen behind on (especially phase 3)


### Phase 6: NavBar Component (1 day)

**Objective:** Create and style Navigation Bar

- [ ] create `NavigationBar` component
- [ ] create `SearchBar` component
- [ ] Style new elements

### Phase 7: Allow Complex Styling (1 day)

**objective:** Enable complex styling.

- [ ] Style with BootStrap & CSS
- [ ] fancy splash page

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.
- [ ] Add hover features, fix colors, add permanent picture behind nav bar, look at other websites for inspo.


### Bonus Features (TBD)
- [ ] users can create and attend events
- [ ] messaging functionality (outside of requests)
- [ ] personalized dashboard with upcoming events, borrowings, and lendings
- [ ] show sporting goods on a map based on lat & lng
- [ ] comments on sporting goods & events
- [ ] pre-filter information based on geolocation
- [ ] create groups
- [ ] availability calendar for sporting goods
- [ ] sporting goods ratings
- [ ] splash page counter with stats, dashboard with stats


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

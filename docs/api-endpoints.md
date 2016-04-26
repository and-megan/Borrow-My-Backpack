# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`


### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Sporting Goods
- `GET /api/sporting_goods/index` - shows all sporting goods
  - search through sporting goods
  - accept `type` as query param
  - accept `location (lat and lng)` as query param
  - accept `user` as query param
- `POST /api/sporting_goods/new` - add sporting good to user
- `GET /api/sporting_goods/index` - shows all sporting goods of a user
- `GET /api/sporting_goods/:id` - show single sporting good of a user
- `PATCH /api/sporting_goods/:id` - edit sporting good of a user
- `DELETE /api/sporting_goods/:id` - delete sporting good of a user

### Profiles
- `GET /api/profiles/index` - show all users
 - search through profiles
- `GET /api/profiles/:id` - show user profile
- `PATCH /api/profiles/:id/edit` - edit profile

### Requests

- `GET /api/requests/index`
  - shows all of user's requests
  - request index items will be included in this component
- `POST /api/requests/new`: new request
- `PATCH /api/requests/:id/edit`: edit request

### Events (not MVP)
- `GET /api/events/index`
  - show all of user's events
- `GET /api/events/index`
  - show all events
  - search through sporting goods
  - accept `start date` as query param
  - accept `location (lat and lng)` as query param
  - accept `user` as query param
- `POST /api/events/new` - add new event with user as author
- `PATCH /api/events/:id/edit` - edit event with user as author
- `DELETE /api/events/events/:id` - delete event of a user

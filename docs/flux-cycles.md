# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Sporting Goods Cycles

### Sporting Goods API Request Actions
#### *sg = sporting good*

* `fetchAllSportingGoods`
  0. invoked from `SportingGoodsIndex` `didMount`
  0. `GET /api/sporting_goods` is called.
  0. `receiveAllSportingGoods` is set as the callback.

* `createSportingGood`
  0. invoked from new sg button `onClick`
  0. `POST /api/users/:id/sporting_goods` is called.
  0. `receiveSportingGood` is set as the callback.

* `fetchSportingGood`
  0. invoked from `SportingGoodDetail` `didMount`/`willReceiveProps`
  0. `GET /api/users/:id/sporting_goods/:id` is called.
  0. `receiveSportingGood` is set as the callback.

* `updateSportingGood`
  0. invoked from `SportingGoodForm` `onSubmit`
  0. `PATCH /api/users/:id/sporting_goods/:id` is called.
  0. `receiveSportingGood` is set as the callback.

* `destroySportingGood`
  0. invoked from delete sporting_good button `onClick`
  0. `DELETE /api/sporting_goods/user_id/sporting_good_id` is called.
  0. `removeSportingGood` is set as the callback.

### SportingGoods API Response Actions

* `receiveAllSportingGoods`
  0. invoked from an API callback.
  0. `SportingGood` store updates `_sporting_goods` and emits change.

* `receiveSportingGood`
  0. invoked from an API callback.
  0. `SportingGood` store updates `_sporting_goods[id]` and emits change.

* `removeSportingGood`
  0. invoked from an API callback.
  0. `SportingGood` store removes `_sporting_goods[id]` and emits change.

### Store Listeners

* `SportingGoodsIndex` component listens to `SportingGood` store.
* `SportingGoodDetail` component listens to `SportingGood` store.


## Profile Cycles

### Profiles API Request Actions

* `fetchAllProfiles`
  0. invoked from `ProfilesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/profiles` is called.
  0. `receiveAllProfiles` is set as the callback.

* `createProfile`
  0. invoked from new profile (when new user is created) button `onClick`
  0. `POST /api/profiles` is called.
  0. `receiveProfile` is set as the callback.

* `fetchProfile`
  0. invoked from `ProfileDetail` `didMount`/`willReceiveProps`
  0. `GET /api/profiles/:id` is called.
  0. `receiveProfile` is set as the callback.

* `updateProfile`
  0. invoked from `ProfileForm` `onSubmit`
  0. `POST /api/profiles` is called.
  0. `receiveProfile` is set as the callback.



### Profiles API Response Actions

* `receiveAllProfiles`
  0. invoked from an API callback.
  0. `Profile` store updates `_profiles` and emits change.

* `receiveProfile`
  0. invoked from an API callback.
  0. `Profile` store updates `_profiles[id]` and emits change.

* `removeProfile`
  0. invoked from an API callback.
  0. `Profile` store removes `_profiles[id]` and emits change.

### Store Listeners

* `ProfilesIndex` component listens to `Profile` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SportingGoodSearchBar` `onChange` when there is text
  0. `GET /api/sporting_goods` is called with `type`, `location`, and/or `user`  param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `SportingGoodSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SportingGoodSearchBar` `onChange` when there is text
  0. `GET /api/sporting_goods` is called with `type`, `location`, and/or `user`  param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `SportingGoodSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.


## Request Cycles NOT MVP

### Requests API Request Actions

* `fetchAllRequests`
  0. invoked from `RequestsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/user/:id/requests` is called.
  0. `receiveAllRequests` is set as the callback.

* `createRequest`
  0. invoked from new profile (when new user is created) button `onClick`
  0. `POST /api/users/:id/requests/new` is called.
  0. `receiveRequest` is set as the callback.

* `fetchRequest`
  0. invoked from `RequestDetail` `didMount`/`willReceiveProps`
  0. `GET /api/users/:id/requests/:id` is called.
  0. `receiveRequest` is set as the callback.

* `updateRequest`
  0. invoked from `RequestForm` `onSubmit`
  0. `PATCH /api/users/:id/requests/:id/edit` is called.
  0. `receiveRequest` is set as the callback.



### Requests API Response Actions

* `receiveAllRequests`
  0. invoked from an API callback.
  0. `Request` store updates `_requests` and emits change.

* `receiveRequest`
  0. invoked from an API callback.
  0. `Request` store updates `_requests[id]` and emits change.


### Store Listeners

* `RequestsIndex` component listens to `Request` store.

## Event Cycles *NOT MVP*

### Events API Request Actions

* `fetchAllEvents`
  0. invoked from `EventsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/events` is called.
  0. `receiveAllevents` is set as the callback.

* `createEvent`
  0. invoked from new profile (when new user is created) button `onClick`
  0. `POST /api/users/:id/events/new` is called.
  0. `receiveProfile` is set as the callback.

* `fetchEvent`
  0. invoked from `ProfileDetail` `didMount`/`willReceiveProps`
  0. `GET /api/users/:id/events/:id` is called.
  0. `receiveEvent` is set as the callback.

* `updateEvent`
  0. invoked from `EventForm` `onSubmit`
  0. `PATCH /api/users/:id/events/:id/edit` is called.
  0. `receiveEvent` is set as the callback.



### Events API Response Actions

* `receiveAllEvents`
  0. invoked from an API callback.
  0. `Event` store updates `_events` and emits change.

* `receiveEvent`
  0. invoked from an API callback.
  0. `Event` store updates `_events[id]` and emits change.

* `removeEvent`
  0. invoked from an API callback.
  0. `Event` store removes `_events[id]` and emits change.

### Store Listeners

* `EventsIndex` component listens to `Event` store.

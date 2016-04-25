# Phase 5: Profile and Garbage Collection

## Rails
### Models
* Profile

### Controllers
* Api::ProfilesController (create, destroy, index, show, update)
* requests/show.json.jbuilder
### Views
* requests/show.json.jbuilder

## Flux
### Views (React Components)
* ProfilesIndex
  - ProfilesIndexItem
* ProfileForm & edit

### Stores
* Profile

### Actions
* ApiActions.receiveAllProfiles -> triggered by ApiUtil
* ApiActions.receiveProfile
* ProfileActions.fetchAllProfiles -> triggers ApiUtil
* ProfileActions.fetchProfile
* ProfileActions.editProfile


### ApiUtil
* ApiUtil.fetchAllProfiles
* ApiUtil.fetchProfile
* ApiUtil.createProfile
* ApiUtil.editProfile

## Gems/Libraries

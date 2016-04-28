# Phase 2: Flux Architecture and Request and Sporting Good CRUD (2 days)

## Rails
### Models

* Request

### Controllers

 * Api::RequestsController(show, update, new)

### Views

## Flux
### Views (React Components)


### Stores


### Actions
<!-- * ApiActions.receiveAllSportingGoods -> triggered by ApiUtil -->
* ApiActions.receiveAllRequests -> triggered by ApiUtil
<!-- * ApiActions.receiveSportingGood -->
* ApiActions.receiveRequest
<!-- * ApiActions.deleteSportingGood -->
<!-- * SportingGoodActions.fetchAllSportingGoods -> triggers ApiUtil -->
* RequestActions.fetchAllRequests -> triggers ApiUtil
<!-- * SportingGoodActions.fetchSportingGood X -->
* RequestActions.fetchRequest
<!-- * SportingGoodActions.editSportingGood X -->
* RequestActions.editRequest
<!-- * SportingGoodActions.destroySportingGood X -->

### ApiUtil
<!-- * ApiUtil.fetchAllSportingGoods X -->
* ApiUtil.fetchAllRequests
<!-- * ApiUtil.fetchSportingGood X -->
* ApiUtil.fetchRequest
<!-- * ApiUtil.createSportingGood X -->
* ApiUtil.createRequest
<!-- * ApiUtil.editSportingGood X -->
* ApiUtil.editRequest
<!-- * ApiUtil.destroySportingGood X -->

## Gems/Libraries
* Flux Dispatcher (npm)

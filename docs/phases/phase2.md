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
* ApiActions.receiveAllSportingGoods -> triggered by ApiUtil
* ApiActions.receiveAllRequests -> triggered by ApiUtil
* ApiActions.receiveSportingGood
* ApiActions.receiveRequest
* ApiActions.deleteSportingGood
* SportingGoodActions.fetchAllSportingGoods -> triggers ApiUtil
* RequestActions.fetchAllRequests -> triggers ApiUtil
* SportingGoodActions.fetchSportingGood
* RequestActions.fetchRequest
* SportingGoodActions.editSportingGood
* RequestActions.editRequest
* SportingGoodActions.destroySportingGood

### ApiUtil
* ApiUtil.fetchAllSportingGoods
* ApiUtil.fetchAllRequests
* ApiUtil.fetchSportingGood
* ApiUtil.fetchRequest
* ApiUtil.createSportingGood
* ApiUtil.createRequest
* ApiUtil.editSportingGood
* ApiUtil.editRequest
* ApiUtil.destroySportingGood

## Gems/Libraries
* Flux Dispatcher (npm)

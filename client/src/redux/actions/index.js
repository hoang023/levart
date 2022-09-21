import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const showModal = createAction('SHOW_MODAL')
export const hideModal = createAction('HIDE_MODAL')

export const showHotelModal = createAction('SHOW_HOTEL_MODAL')
export const hideHotelModal = createAction('HIDE_HOTEL_MODAL')

export const showChooseCollectionModal = createAction('SHOW_CHOOSE_COLLECTION_MODAL')
export const hideChooseCollectionModal = createAction('HIDE_CHOOSE_COLLECTION_MODAL')

export const showCreateCollectionModal = createAction('SHOW_CREATE_COLLECTION_MODAL')
export const hideCreateCollectionModal = createAction('HIDE_CREATE_COLLECTION_MODAL')

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload) => payload,
  getPostsFailure: (err) => err,
});

export const getProfiles = createActions({
  getProfilesRequest: undefined,
  getProfilesSuccess: (payload) => payload,
  getProfilesFailure: (err) => err,
});

export const getProvinces = createActions({
  getProvincesRequest: undefined,
  getProvincesSuccess: (payload) => payload,
  getProvincesFailure: (err) => err,
});

export const getPlaces = createActions({
  getPlacesRequest: undefined,
  getPlacesSuccess: (payload) => payload,
  getPlacesFailure: (err) => err,
});

export const getHotels = createActions({
  getHotelsRequest: undefined,
  getHotelsSuccess: (payload) => payload,
  getHotelsFailure: (err) => err,
});

export const getFoodAndDrinks = createActions({
  getFoodAndDrinksRequest: undefined,
  getFoodAndDrinksSuccess: (payload) => payload,
  getFoodAndDrinksFailure: (err) => err,
});

export const getAttractions = createActions({
  getAttractionsRequest: undefined,
  getAttractionsSuccess: (payload) => payload,
  getAttractionsFailure: (err) => err,
});

export const getMyTrips = createActions({
  getMyTripsRequest: (payload) => payload,
  getMyTripsSuccess: (payload) => payload,
  getMyTripsFailure: (err) => err,
});

export const createCollections = createActions({
  createCollectionsRequest: (payload)=>payload,
  createCollectionsSuccess: (payload)=>payload,
  createCollectionsFailure: (err)=>err,
})

export const createPlaceLists = createActions({
  createPlaceListsRequest: (payload)=>payload,
  createPlaceListsSuccess: (payload)=>payload,
  createPlaceListsFailure: (err)=>err,
})


import { takeLatest, call, put, take } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";



function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* fetchProfileSaga(action) {
  try {
    const profiles = yield call(api.fetchProfile);

    yield put(actions.getProfiles.getProfilesSuccess(profiles.data));
  } catch (error) {
    yield put(actions.getProfiles.getProfilesFailure(error));
  }
}

function* fetchProvinceSaga(action) {
  try {
    const provinces = yield call(api.fetchProvince);

    yield put(actions.getProvinces.getProvincesSuccess(provinces.data));
  } catch (error) {
    yield put(actions.getProvinces.getProvincesFailure(error));
  }
}

function* fetchPlaceSaga(action) {
  try {
    const places = yield call(api.fetchPlace);

    yield put(actions.getPlaces.getPlacesSuccess(places.data));
  } catch (error) {
    yield put(actions.getPlaces.getPlacesFailure(error));
  }
}

function* fetchHotelSaga(action) {
  try {
    const hotels = yield call(api.fetchHotel);

    yield put(actions.getHotels.getHotelsSuccess(hotels.data));
  } catch (error) {
    yield put(actions.getHotels.getHotelsFailure(error));
  }
}


function* fetchUserSaga(action) {
  try {
    const Users = yield call(api.fetchUser);

    yield put(actions.getUsers.getUsersSuccess(Users.data));
  } catch (error) {
    yield put(actions.getUsers.getUsersFailure(error));
  }
}
function* createHotelSaga(action) {
  try {
    const hotel = yield call(api.createHotels, action.payload);
    // console.log(hotel.data)
    yield put(actions.createHotels.createHotelsSuccess(hotel.data));
  } catch (error) {
    yield put(actions.createHotels.createHotelsFailure(error.response.data));
  }
}
function* updateHotelSaga(action) {
  try {
    const hotel = yield call(api.updateHotel, action.payload);

    yield put(actions.updateHotels.updateHotelsSuccess(hotel.data));
  } catch (error) {
    yield put(actions.updateHotels.updateHotelsFailure(error.response.data));
  }
}
function* deleteHotelSaga(action) {
  try {
    const Hotels = yield call(api.deleteHotels, action.payload);
    yield put(actions.deleteHotels.deleteHotelsSuccess(Hotels.data._id));
  } catch (error) {
    yield put(actions.deleteHotels.deleteHotelsFailure(error.response.data));
  }
}
function* createUserSaga(action) {
  try {
    const user = yield call(api.createUsers, action.payload);
    yield put(actions.createUsers.createUsersSuccess(user.data));
  } catch (error) {
    yield put(actions.createUsers.createUsersFailure(error.response.data));
  }
}
// function* updateUserSaga(action) {
//   try {
//     const user = yield call(api.updateUser, action.payload);

//     yield put(actions.updateUsers.updateUsersSuccess(user.data));
//   } catch (error) {
//     yield put(actions.updateUsers.updateUsersFailure(error.response.data));
//   }
// }
function* deleteUserSaga(action) {
  try {
    const Users = yield call(api.deleteUsers, action.payload);
    yield put(actions.deleteUsers.deleteUsersSuccess(Users.data._id));
  } catch (error) {
    yield put(actions.deleteUsers.deleteUsersFailure(error.response.data));
  }
}
function* fetchFoodAndDrinkSaga(action) {
  try {
    const foodAndDrink = yield call(api.fetchFoodAndDrink);

    yield put(actions.getFoodAndDrinks.getFoodAndDrinksSuccess(foodAndDrink.data));
  } catch (error) {
    yield put(actions.getFoodAndDrinks.getFoodAndDrinksFailure(error));
  }
}

function* fetchAttractionSaga(action) {
  try {
    const attractions = yield call(api.fetchAttraction);

    yield put(actions.getAttractions.getAttractionsSuccess(attractions.data));
  } catch (error) {
    yield put(actions.getAttractions.getAttractionsFailure(error));
  }
}

function* fetchMyTripsSaga(action) {
  try {
    const myTrip = yield call(api.fetchMyTrip, action.payload);

    yield put(actions.getMyTrips.getMyTripsSuccess(myTrip.data));
  } catch (error) {
    yield put(actions.getMyTrips.getMyTripsFailure(error));
  }
}

function* fetchCreateCollectionsSaga(action) {
  try {

    const collections = yield call(api.createCollections, action.payload);

    yield put(actions.createCollections.createCollectionsSuccess(collections.data));
  } catch (error) {
    yield put(
      actions.createCollections.createCollectionsFailure(error.response.data)
    );
  }
}

function* fetchCreatePlaceListsSaga(action) {
  try {
    const placeList = yield call(api.createPlaceLists, action.payload);

    yield put(actions.createPlaceLists.createPlaceListsSuccess(placeList.data));
  } catch (error) {
    yield put(
      actions.createPlaceLists.createPlaceListsFailure(error.response.data)
    );
  }
}

function* fetchRequestsSaga(action) {
  try {
    const requests = yield call(api.fetchRequest);

    yield put(actions.getRequests.getRequestsSuccess(requests.data));
  } catch (error) {
    yield put(actions.getRequests.getRequestsFailure(error));
  }
}
function* updateRequestSaga(action) {
  try {
    const request = yield call(api.updateRequest, action.payload);

    yield put(actions.updateRequests.updateRequestsSuccess(request.data));
  } catch (error) {
    yield put(actions.updateRequests.updateRequestsFailure(error.response.data));
  }
}
function* createRequestsSaga(action) {
  try {
    const request = yield call(api.createRequests, action.payload)
    yield put(actions.createRequests.createRequestsSuccess(request.data))
  } catch (error) {
    yield put(actions.createRequests.createRequetsFailure(error.response.data));
  }
}


function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);

  yield takeLatest(actions.getProfiles.getProfilesRequest, fetchProfileSaga);

  yield takeLatest(actions.getProvinces.getProvincesRequest, fetchProvinceSaga);

  yield takeLatest(actions.getPlaces.getPlacesRequest, fetchPlaceSaga);

  yield takeLatest(actions.getUsers.getUsersRequest, fetchUserSaga);
  yield takeLatest(actions.getUsers.getUsersRequest, createUserSaga)
  // yield takeLatest(actions.updateUsers.updateUsersRequest, updateUserSaga)
  yield takeLatest(actions.deleteUsers.deleteUsersRequest, deleteUserSaga);

  yield takeLatest(actions.getHotels.getHotelsRequest, fetchHotelSaga);
  yield takeLatest(actions.createHotels.createHotelsRequest, createHotelSaga);
  yield takeLatest(actions.updateHotels.updateHotelsRequest, updateHotelSaga);
  yield takeLatest(actions.deleteHotels.deleteHotelsRequest, deleteHotelSaga);

  yield takeLatest(actions.getFoodAndDrinks.getFoodAndDrinksRequest, fetchFoodAndDrinkSaga);

  yield takeLatest(actions.getAttractions.getAttractionsRequest, fetchAttractionSaga);

  yield takeLatest(actions.getMyTrips.getMyTripsRequest, fetchMyTripsSaga);
  yield takeLatest(actions.createCollections.createCollectionsRequest, fetchCreateCollectionsSaga);
  yield takeLatest(actions.createPlaceLists.createPlaceListsRequest, fetchCreatePlaceListsSaga);

  yield takeLatest(actions.getRequests.getRequestsRequest, fetchRequestsSaga);
  yield takeLatest(actions.updateRequests.updateRequestsRequest, updateRequestSaga);
  yield takeLatest(actions.createRequests.createRequestsRequest,createRequestsSaga)
}

export default mySaga;

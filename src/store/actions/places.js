
import { SET_PLACES, REMOVE_PLACE } from "./actionTypes";
import { uiStartLoading, uiStopLoading, authGetToken } from "./index";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    let authToken;
    dispatch(uiStartLoading());
    dispatch(authGetToken())
      .catch(() => {
        alert("No valid token found!");
      })
      .then(token => {
        authToken = token;
        return fetch(
          "https://us-central1-pilosh-53dc9.cloudfunctions.net/storeImage",
          {
            method: "POST",
            body: JSON.stringify({
              image: image.base64
            }),
            headers: {
              Authorization: "Bearer " + authToken
            }
          }
        );
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again    1111!");
        dispatch(uiStopLoading());
      })
      .then(res => res.json())
      .then(parsedRes => {
        const placeData = {
          name: placeName,
          location: location,
          image: parsedRes.imageUrl
        };
        return fetch(
          "https://pilosh-53dc9.firebaseio.com/places.json?auth=" +
            authToken,
          {
            method: "POST",
            body: JSON.stringify(placeData)
          }
        );
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        dispatch(uiStopLoading());
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again! 22222");
        dispatch(uiStopLoading());
      });
  };
};

export const getPlaces = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        return fetch(
          "https://pilosh-53dc9.firebaseio.com/places.json?auth=" +
            token
        );
      })
      .catch(() => {
        alert("No valid token found!");
      })
      .then(res => res.json())
      .then(parsedRes => {
        const places = [];
        for (let key in parsedRes) {
          places.push({
            ...parsedRes[key],
            image: {
              uri: parsedRes[key].image
            },
            key: key
          });
        }
        dispatch(setPlaces(places));
      })
      .catch(err => {
        alert("Something went wrong, sorry :/22222");
        console.log(err);
      });
  };
};

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places: places
  };
};

export const deletePlace = key => {
  return dispatch => {
    dispatch(authGetToken())
      .catch(() => {
        alert("No valid token found!");
      })
      .then(token => {
        dispatch(removePlace(key));
        return fetch(
          "https://pilosh-53dc9.firebaseio.com/places/" +
            key +
            ".json?auth=" +
            token,
          {
            method: "DELETE"
          }
        );
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log("Done!");
      })
      .catch(err => {
        alert("Something went wrong, sorry :/skncN");
        console.log(err);
      });
  };
};

export const removePlace = key => {
  return {
    type: REMOVE_PLACE,
    key: key
  };
};


// import { SET_PLACES, REMOVE_PLACE } from './actionTypes';
// import { uiStartLoading, uiStopLoading, authGetToken } from "./index";
//
// export const addPlace = (placeName, location, image) => {
//     return dispatch => {
//         dispatch(uiStartLoading());
//         dispatch(authGetToken())
//           .catch(() => {
//             alert("No valid token found!");
//           })
//           .then(token => {
//             authToken = token;
//             return fetch(
//         "https://us-central1-pilosh-53dc9.cloudfunctions.net/storeImage", {
//             method: "POST",
//             body: JSON.stringify({
//                 image: image.base64
//               }),
//               headers: {
//                 Authorization: "Bearer " + authToken
//             }
//           }
//           );
//         })
//         .catch(err => {
//           console.log(err);
//           alert("Something went wrong, please try again!");
//           dispatch(uiStopLoading());
//         })
//         .then(res => res.json())
//         .then(parsedRes => {
//           const placeData = {
//             name: placeName,
//             location: location,
//             image: parsedRes.imageUrl
//           };
//             return fetch(
//               "https://pilosh-53dc9.firebaseio.com/places.json" + authToken,
//               {
//                 method: "POST",
//                 body: JSON.stringify(placeData)
//               }
//             );
//           })
//           .then(res => res.json())
//           .then(parsedRes => {
//             console.log(parsedRes);
//             dispatch(uiStopLoading());
//           })
//           .catch(err => {
//             console.log(err);
//             alert("Something went wrong, please try again!");
//             dispatch(uiStopLoading());
//           });
//       };
//     };
//
//     export const getPlaces = () => {
//       return dispatch => {
//         dispatch(authGetToken())
//           .then(token => {
//             return fetch(
//               "https://pilosh-53dc9.firebaseio.com/places.json?auth=" + token);
//               })
//               .catch(() => {
//                 alert("No valid token found!");
//               })
//               .then(res => res.json())
//               .then(parsedRes => {
//                 const places = [];
//                 for (let key in parsedRes) {
//                   places.push({
//                     ...parsedRes[key],
//                     image: {
//                       uri: parsedRes[key].image
//                     },
//                     key: key
//                   });
//                 }
//                 dispatch(setPlaces(places));
//               })
//               .catch(err => {
//                 alert("Something went wrong, sorry :/");
//                 console.log(err);
//               });
//           };
//         };
//
//         export const setPlaces = places => {
//           return {
//             type: SET_PLACES,
//             places: places
//           };
//         };
//
//         export const deletePlace = key => {
//           return dispatch => {
//             dispatch(authGetToken())
//               .catch(() => {
//                 alert("No valid token found!");
//               })
//               .then(token => {
//                 dispatch(removePlace(key));
//                 return fetch(
//                   "https://pilosh-53dc9.firebaseio.com/places/" + key +
//                   ".json?auth=" +
//                   token,
//                   {
//                     method: "DELETE"
//                   }
//                 );
//               })
//               .then(res => res.json())
//               .then(parsedRes => {
//                 console.log("Done!");
//               })
//               .catch(err => {
//                 alert("Something went wrong, sorry :/");
//                 console.log(err);
//               });
//           };
//         };
//
//         export const removePlace = key => {
//           return {
//             type: REMOVE_PLACE,
//             key: key
//           };
//         };





// // export const deletePlace = (key) => {
// //     return dispatch => {
// //       dispatch(removePlace(key));
//   //   fetch("https://pilosh-53dc9.firebaseio.com/places/" + key + ".json", {
// //           method: "DELETE"
// //       })
// //       .catch(err => {
// //           alert("Something went wrong, sorry :/");
// //           console.log(err);
// //       })
// //       .then(res => res.json())
// //       .then(parsedRes => {
// //         console.log("done!");
// //       })
// //     }
// // };
// //
// // export const removePlace = key => {
// //   return {
// //     type: REMOVE_PLACE,
// //     key: key
// //   }
// // }

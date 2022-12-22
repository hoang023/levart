import { AttractionModel } from "../models/AttractionModel.js";

export const getAttractions = async (req, res) => {
  try {
    // const post = new AttractionModel(
    // {
    //   name: "Nui Dat hill",
    //   location: "Ba Ria City, Ba Ria - Vung Tau",
    //   description:
    //     "Nui Dat (Núi Đất) is a former 1st Australian Task Force (1 ATF) base now part of Ba Ria city in Ba Ria–Vung Tau province, Vietnam. It is not the name of an official ward, it just means dirt hill.",
    //   phone: "0254 354 076",
    //   price: 0,
    //   openTime: "7:30",
    //   closeTime: "17:00",
    //   duration: 2,
    //   image: [
    //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/95/58/f3/with-harry-smith-at-nui.jpg?w=1200&h=-1&s=1",
    //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/4e/52/e7/piper-at-ltc.jpg?w=1200&h=-1&s=1",
    //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/95/55/bd/dave-sabben-was-talking.jpg?w=1200&h=-1&s=1",
    //   ],
    //   website: "",
    //   type: {
    //     museum: true,
    //   },
    //   evaluatePoint: 5,
    //   placeID: "62835f98dc4dd1b7495ea898",
    //   provinceID: "62834d22d587a5f7b2b82bac",
    // }
    // );

    // post.save();

    await AttractionModel.find()
      .populate({
        path: "placeID",
      })
      .populate({
        path: "provinceID",
      })
      .exec()
      .then((attractions) => {
        res.status(200).json(attractions);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//     const post = new AttractionModel(
// {
//   name: "Nui Dat hill",
//   location: "Ba Ria City, Ba Ria - Vung Tau",
//   description:
//     "Nui Dat (Núi Đất) is a former 1st Australian Task Force (1 ATF) base now part of Ba Ria city in Ba Ria–Vung Tau province, Vietnam. It is not the name of an official ward, it just means dirt hill.",
//   phone: "0254 354 076",
//   price: 0,
//   openTime: "7:30",
//   closeTime: "17:00",
//   duration: 2,
//   image: [
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/95/58/f3/with-harry-smith-at-nui.jpg?w=1200&h=-1&s=1",
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/4e/52/e7/piper-at-ltc.jpg?w=1200&h=-1&s=1",
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/95/55/bd/dave-sabben-was-talking.jpg?w=1200&h=-1&s=1",
//   ],
//   website: "",
//   type: {
//     museum: true,
//   },
//   evaluatePoint: 5,
//   placeID: "62835f98dc4dd1b7495ea898",
//   provinceID: "62834d22d587a5f7b2b82bac",
// }
// );
//       //   {
//       //   name: "Christ The King Statue",
//       //   location: "01, Ba Ria, Vung Tau",
//       //   description:
//       //     "The Statue of Christ the King (or the Statue of God with outstretched arms, the Statue of Christ on top of Mount Tao Phung) is a statue of Jesus placed on top of Small Mountain of Vung Tau city (built in 1974). The statue was established as the largest Jesus statue in Asia in 2012",
//       //   phone: "0254 354 076",
//       //   price: 0,
//       //   openTime: "7:30",
//       //   closeTime: "17:00",
//       //   duration: 2,
//       //   image: [
//       //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/8f/7f/19/tuong-thanh-gioc.jpg?w=1200&h=-1&s=1" <
//       //       "https://daytripvietnam.com/wp-content/uploads/jesus-christ-statue-vung-tau-1.jpg",
//       //     "https://vnn-imgs-f.vgcloud.vn/2019/06/24/20/towering-statue-of-jesus-christ-in-vung-tau-3.jpg",
//       //   ],
//       //   website:
//       //     "https://www.travelfish.org/sight_profile/vietnam/saigon_and_surrounds/ba_ria_vung_tau/vung_tau/2487",
//       //   type: {
//       //     landmark: true,
//       //   },
//       //   evaluatePoint: 5,
//       //   placeID: "62835e50bbcfaf241dc01a16",
//       //   provinceID: "62834d22d587a5f7b2b82bac",
//       // },
//       // {
//       //   name: "Upside Down House",
//       //   location: "13-1 Ky Con, Ward 4, Vung Tau",
//       //   description:
//       //     "Unique coffee shop themed upside down, arrange furniture on the ceiling and create other illusions.",
//       //   phone: "0254 354 0768",
//       //   price: 49,
//       //   openTime: "7:00",
//       //   closeTime: "22:00",
//       //   duration: 1,
//       //   image: [
//       //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/a6/12/83/vung-tau-is-open-again.jpg?w=1200&h=-1&s=1",
//       //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/e7/2c/67/bedroom.jpg?w=1000&h=-1&s=1",
//       //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/a6/12/a3/vung-tau-is-open-again.jpg?w=1100&h=-1&s=1",
//       //   ],
//       //   website: "https://www.nhaupnguoc.com/",
//       //   type: {
//       //     museum: true,
//       //   },
//       //   evaluatePoint: 4.5,
//       //   placeID: "62835e50bbcfaf241dc01a16",
//       //   provinceID: "62834d22d587a5f7b2b82bac",
//       // },
//       // {
//       //   name: "Nha Seo Fì / Seo Fi House",
//       //   location: "76b Vo Thi Sau, Ward 2, Vung Tau",
//       //   description:
//       //     "Unique coffee shop themed upside down, arrange furniture on the ceiling and create other illusions.",
//       //   phone: "0254 354 0768",
//       //   price: 49,
//       //   openTime: "7:00",
//       //   closeTime: "22:00",
//       //   duration: 1,
//       //   image: [
//       //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ee/a3/dc/house-of-madness.jpg?w=1200&h=-1&s=1",
//       //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/e7/2c/67/bedroom.jpg?w=1000&h=-1&s=1",
//       //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/a6/12/a3/vung-tau-is-open-again.jpg?w=1100&h=-1&s=1",
//       //   ],
//       //   website: "https://www.nhaupnguoc.com/",
//       //   type: {
//       //     museum: true,
//       //   },
//       //   evaluatePoint: 4.5,
//       //   placeID: "62835e50bbcfaf241dc01a16",
//       //   provinceID: "62834d22d587a5f7b2b82bac",
//       // }
// //        {
// //         name: "The Marble Mountains",
// //         location: "81 Huyen Tran Princess, Hoa Hai, Ngu Hanh Son, Da Nang 550000",
// //         description:
// //         "Ngu Hanh Son or Non Nuoc mountain is a scenic spot consisting of 5 limestone mountains jutting out on a coastal sandy beach, on an area of about 2 km², located about 8 km east of Da Nang city center, Vietnam. South, right on the route Da Nang - Hoi An; now belongs to Hoa Hai ward, Ngu Hanh Son district, Da Nang city",
// //         phone: "0236 391 114",
// //         price: 1,
// //         openTime: "7:00",
// //         closeTime: "17:00",
// //         duration: 4,
// //         image: [
// //           "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/04/5e/07/img-20160914-110613-largejpg.jpg?w=1000&h=-1&s=1",
// // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/0c/30/3c/steep-steps.jpg?w=1200&h=-1&s=1",
// // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/07/75/eb/20160914-153846-hdr-largejpg.jpg?w=1200&h=-1&s=1",
// // ],
// //         website: "https://nguhanhson.org/",
// //         type: {
// //           landmark : true,
// //         },
// //         evaluatePoint: 5,
// //         provinceID: "628350433f67b71a8812d62b",
// //       },
// //       {
// //         name: "Ba Na Hills",
// //         location: "An Son village, Hoa Ninh commune, Hoa Vang district, Da Nang city, Vietnam.",
// //         description:
// //         "Belonging to the Sun World entertainment brand system, more than 20 km from the center of Da Nang city, Sun World Ba Na Hills is the most luxurious resort complex combining entertainment in Vietnam. Located at an altitude of 1,487m above sea level, Sun World Ba Na Hills is known as a fairyland, possessing a wonderful climate and amazing natural landscape. Come to Sun World Ba Na Hills to experience the 4-season climate in one day with a variety of festival, entertainment, and culinary activities.",
// //          phone: "0905 766 777",
// //         price: 37,
// //         openTime: "7:00",
// //         closeTime: "23:30",
// //         duration: 8,
// //         image: [
// //           "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a3/2a/f2/big-hand-ang-golden-bridge.jpg?w=900&h=-1&s=1",
// // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/ac/4a/e0/banahillsdailytoursinfo.jpg?w=1200&h=-1&s=1",
// // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/bd/5f/92/c-2017-ba-na-hills-daily.jpg?w=1200&h=-1&s=1",
// //         ],
// //         website:"https://banahills.sunworld.vn/",
// //         type: {
// //           landmark : true,
// //           amusementPark: true,
// //         },
// //         evaluatePoint: 5,
// //         provinceID: "628350433f67b71a8812d62b",
// //       },
// //       {
// //         name: "3D Museum Art in Paradise Danang",
// //         location: "Lot C2-10 Tran Nhan Tong, Tho Quang Ward, Son Tra District, Da Nang City",
// //         description:
// //         "Art in Paradise Danang is the first 3D Trick Art Museum in Danang and the largest one in Viet Nam. Come to the museum, you will be suprised by hundreds of 3D art works. They were all drawn and painted by hand that used three-dimensional and scientific method combinations to make the paintings look realistic and live, and you can be part of them. It's not just an art, but a paradise. You will have a lot of happy memories with your family and friends here. Love!",
// //          phone: "0236 393 110",
// //         price: 10,
// //         openTime: "9:00",
// //         closeTime: "20:30",
// //         duration: 2,
// //         image: [
// //           "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/fa/86/fd/b-o-tang-3d-art-in-paradise.jpg?w=1100&h=-1&s=1",
// // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/6f/f1/bb/b-o-tang-3d-art-in-paradise.jpg?w=1200&h=-1&s=1",
// // "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/6f/f1/6f/b-o-tang-3d-art-in-paradise.jpg?w=1200&h=-1&s=1",
// //     ],
// //         website:"https://artinparadise.com.vn/",
// //         type: {
// //           museum : true,

// //         },
// //         evaluatePoint: 4.5,
// //         provinceID: "628350433f67b71a8812d62b",
// //       }
//     );
//     post.save();

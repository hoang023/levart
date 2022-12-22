import { PlaceModel } from "../models/PlaceModel.js";

export const getPlaces = async (req, res) => {
  try {

    await PlaceModel.find()
      .populate({
        path: "provinceID",
      })
      .exec()
      .then((places) => {
        res.status(200).json(places);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createPlace = async (req, res) => {
  try{
    const dataPlace = req.body
    const place = new PlaceModel(dataPlace)
    await place.save().then((place)=>{
      PlaceModel.findById(place._id)
      .populate({
        path:"provinceID"
      })
      .exec()
      .then((place)=>{
        res.status(200).json(place)
      })
    })
  } catch(err) {
    res.status(500).json({ error: err });
  }
}

// const province = new PlaceModel(
//   //   {
//   //   name: "Vũng Tàu",
//   //   location: "Bà Rịa – Vũng Tàu",
//   //   title:
//   //   "Vung Tau is a city in Ba Ria - Vung Tau province, Southeast region, Vietnam.",
//   //   description:
//   //   "This is the center of economy, finance, culture, tourism, transportation - transportation and education and is one of the economic centers of the Southeast region. Possessing many beautiful beaches and fully invested infrastructure, Vung Tau is a famous tourist destination in the South. In addition, the city is also the logistics area of Vietnam's oil and gas industry.",
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fe/96/vung-tau.jpg?w=700&h=500&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/59/c3/1c/mua-he-d-y-n-ng-gio-t.jpg?w=500&h=300&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/1c/57/2c/khu-du-l-ch-van-hoa-sinh.jpg?w=500&h=300&s=1",
//   //   ],
//   //   provinceID: "62834d22d587a5f7b2b82bac",
//   // },
//   // {
//   //   name: "Bà Rịa",
//   //   location: "Bà Rịa – Vũng Tàu",
//   //   title:
//   //     "Ba Ria is the capital city of Ba Ria - Vung Tau province, Vietnam.",
//   //   description:
//   //     "The topography of the city is quite flat, slightly sloping in the north. Soil consists of two main types of soil: gray soil and red basalt soil. Because it is located in the Southeast region, it is influenced by the general tropical monsoon climate of the whole region, including 2 distinct seasons including the rainy season and the dry season.",
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/60/ec/da/caption.jpg?w=700&h=500&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/31/de/caption.jpg?w=500&h=300&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/64/8e/58/photo6jpg.jpg?w=500&h=-1&s=1",
//   //   ],
//   //   provinceID: "62834d22d587a5f7b2b82bac",
//   // },
//   // {
//   //   name: "Phan Thiet",
//   //   location: "Binh Luan",
//   //   title:
//   //     "Phan Thiet is a coastal city and the provincial capital, the political, economic, cultural and scientific and technical center of Binh Thuan province, Vietnam.",
//   //   description:
//   //     "Phan Thiet city is located in the center of Binh Thuan province, 1,500 km south of Hanoi capital, about 200 km east of Ho Chi Minh City, 175 km northeast of Vung Tau city. Nha Trang city is about 240 km to the southwest along National Highway 1. The city has a bow shape stretching along the 57.4 km long coastline from the north of Mui Ke Ga up to Mui Ne.",
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/62/31/4c/mui-ne-harbor.jpg?w=700&h=500&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/5b/9e/93/fairy-stream.jpg?w=500&h=300&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/1b/70/77/ta-cu-mountain.jpg?w=500&h=300&s=1",
//   //   ],
//   //   provinceID: "62834e2e91c992ac9ac2fa82",
//   // },
//   // {
//   //   name: "Nha Trang",
//   //   location: "Khanh Hoa",
//   //   title: "The relaxing riviera of southern Vietnam",
//   //   description:
//   //     "Nha Trang is best known for its beautiful sandy beaches. But visitors will also find amusement parks, mud baths, golf, and the historic Po Ngar temple complex, as well as a variety of hotels and restaurants. Adventurous foodies can sample bun cha ca, a soup made from sailfish and jellyfish, while most everyone can appreciate the region's fresh seafood, noodles, and pancakes, which have mass appeal.",
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fb/69/nha-trang.jpg?w=700&h=500&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/8f/33/26/vinpearl-land-at-sun.jpg?w=500&h=300&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/0f/5a/03/img-20170413-124159-largejpg.jpg?w=500&h=300&s=1",
//   //   ],
//   //   provinceID: "6283505bee2dada1503e1407",
//   // },
//   // {
//   //   name: "Cam Ranh",
//   //   location: "Khanh Hoa",
//   //   title: "Cam Ranh is a coastal city in Khanh Hoa province, Vietnam.",
//   //   description:
//   //     "Cam Ranh city is 45 km south of Nha Trang city, located on National Highway 1, located on the shores of Cam Ranh Bay, a natural bay considered the best natural bay in Southeast Asia, where the Natural conditions are very favorable for the development of seaport services and tourism",
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/62/a4/d5/photo3jpg.jpg?w=700&h=500&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/46/01/c9/binh-hung-island.jpg?w=500&h=300&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/ea/a0/17/cam-ranh-bay.jpg?w=500&h=300&s=1",
//   //   ],
//   //   provinceID: "6283505bee2dada1503e1407",
//   // },
//   // {
//   //   name: "Rach Gia",
//   //   location: "Kien Giang",
//   //   title: "Rach Gia is the capital city of Kien Giang province, Vietnam.",
//   //   description:
//   //     "Rach Gia is home to many landscapes and potentials of rivers, seas and islands, and has a strong attraction for diners from far away when visiting the city. The Vietnamese, Chinese and Khmer are the people who have built and created a unique culture imbued with national identity that ordinary people call Rach Gia civilization, along with countless temples and pagodas. and hundreds of famous worshiping works throughout the Southern region.",
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e3/c0/7f/photo1jpg.jpg?w=700&h=500&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/bb/73/fc/photo0jpg.jpg?w=500&h=300&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/0d/7b/98/vmd-eventhotel.jpg?w=500&h=300&s=1",
//   //   ],
//   //   provinceID: "6283506599449f9fb38d4acb",
//   // },
//   // {
//   //   name: "Phu Quoc Island",
//   //   location: "Kien Giang",
//   //   title: "About Phu Quoc Island",
//   //   description:
//   //     "Soak up the sun and some Vietnamese culture on Phu Quoc Island, where white sands and tropical waters entice beachgoers from all over the globe. Snorkeling, scuba diving and fishing are the most popular water sports here, though jet-skiing, wind sailing and squid fishing—yes, squid fishing—are also at your vacationing fingertips. Check out the early-morning Duong Dong Market for an authentic local experience.",
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ad/a9/2b/sao-beach.jpg?w=700&h=500&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8f/db/da/phu-qu-c-countryside.jpg?w=500&h=300&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/06/79/23/ho-quoc-pagoda.jpg?w=500&h=300&s=1",
//   //   ],
//   //   provinceID: "6283506599449f9fb38d4acb",
//   // },
//   // {
//   //   name: "Ha Tien",
//   //   location: "Kien Giang",
//   //   title:
//   //     "Ha Tien is a city located in the northwest of Kien Giang province, Vietnam.",
//   //   description:
//   //     "Ha Tien city is located in the west of Kien Giang province, 88 km from Rach Gia city, 350 km from Ho Chi Minh City.",
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/01/04/2c/view-from-balcony.jpg?w=700&h=500&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/3b/30/60/nos-iles-privees.jpg?w=500&h=300&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/22/4d/db/ile-privee.jpg?w=500&h=300&s=1",
//   //   ],
//   //   provinceID: "6283506599449f9fb38d4acb",
//   // },
//   // {
//   //   name: "Tam Ky",
//   //   location: "Quang Nam",
//   //   title: "Tam Ky is the capital city of Quang Nam province, Vietnam.",
//   //   description:
//   //     "Tam Ky city is located in the east of Quang Nam province, 820 km from Hanoi capital to the north, 60 km from Da Nang city to the north and 900 km from Ho Chi Minh City to the south.",
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/ca/b5/1a/trau-ne.jpg?w=700&h=500&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7d/46/85/caption.jpg?w=500&h=300&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/9e/13/a1/photo3jpg.jpg?w=500&h=300&s=1",
//   //   ],
//   //   provinceID: "62835071287c1060eac3cf91",
//   // },
//   // {
//   //   name: "Hoi An",
//   //   location: "Quang Nam",
//   //   title: "About Hoi An",
//   //   description:
//   //     "This city on the central Vietnamese coast is a well-preserved example of the important Southeast Asian trading port it was from the 15th-19th centuries. Already a common stop for backpackers, it is becoming better known to tourists. On the 14th day of each lunar month, the town trades its electric lights for traditional colored lanterns. Sights include the Japanese Covered Bridge and the Quan Cong Temple. Let the town’s expert tailors make you some bespoke clothing.",
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/b4/95/1e/20161110-163943-largejpg.jpg?w=700&h=500&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/42/a1/77/photo0jpg.jpg?w=500&h=300&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/89/7b/3d/img-20160815-182345-largejpg.jpg?w=500&h=300&s=1",
//   //   ],
//   //   provinceID: "62835071287c1060eac3cf91",
//   // }
// );
// province.save();

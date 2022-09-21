import { FoodAndDrinkModel } from "../models/FoodAndDrinkModel.js";

export const getFoodAndDrinks = async (req, res) => {
  try {
    // const post = new FoodAndDrinkModel(
    // {
    //   name: "Muoi",
    //   location:
    //     "Coastal Road, Ho Tram Hamlet Meliá Ho Tram Beach Resort, Ba Ria 790000 Vietnam",
    //   phone: "0334 830 185",
    //   price: 40,
    //   openTime: "8:00",
    //   closeTime: "22:00",
    //   image: [
    //     "https://media-cdn.tripadvisor.com/media/photo-s/17/ed/ab/87/outdoor.jpg",
    //     "https://media-cdn.tripadvisor.com/media/photo-s/17/e4/b7/00/getlstd-property-photo.jpg",
    //     "https://media-cdn.tripadvisor.com/media/photo-w/19/78/6c/10/muoi.jpg",
    //   ],
    //   website: "",
    //   meal: {
    //     breakfast: true,
    //     lunch: true,
    //     dinner: true,
    //   },
    //   type: {
    //     restaurant: true,
    //   },
    //   evaluatePoint: 4,
    //   placeID: "62835f98dc4dd1b7495ea898",
    //   provinceID: "62834d22d587a5f7b2b82bac",
    // }
    // );

    // post.save();

    await FoodAndDrinkModel.find()
      .populate({
        path: "placeID",
      })
      .populate({
        path: "provinceID",
      })
      .exec()
      .then((foodAndDrinks) => {
        res.status(200).json(foodAndDrinks);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// const post = new FoodAndDrinkModel(
// {
//   name: "Muoi",
//   location:
//     "Coastal Road, Ho Tram Hamlet Meliá Ho Tram Beach Resort, Ba Ria 790000 Vietnam",
//   phone: "0334 830 185",
//   price: 40,
//   openTime: "8:00",
//   closeTime: "22:00",
//   image: [
//     "https://media-cdn.tripadvisor.com/media/photo-s/17/ed/ab/87/outdoor.jpg",
//     "https://media-cdn.tripadvisor.com/media/photo-s/17/e4/b7/00/getlstd-property-photo.jpg",
//     "https://media-cdn.tripadvisor.com/media/photo-w/19/78/6c/10/muoi.jpg",
//   ],
//   website: "",
//   meal: {
//     breakfast: true,
//     lunch: true,
//     dinner: true,
//   },
//   type: {
//     restaurant: true,
//   },
//   evaluatePoint: 4,
//   placeID: "62835f98dc4dd1b7495ea898",
//   provinceID: "62834d22d587a5f7b2b82bac",
// }
//   //   {
//   //   name: "Pizza Leo",
//   //   location: "2a Phan Chu Trinh, Vung Tau 790000 Vietnam",
//   //   phone: "0334 830 185",
//   //   price: 15,
//   //   openTime: "13:00",
//   //   closeTime: "22:00",
//   //   image: [
//   //     "https://media-cdn.tripadvisor.com/media/photo-s/1a/21/93/56/yummy.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-s/1a/1c/0c/9d/chicken-pizza.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-f/1a/70/a4/62/christmas-get-together.jpg",
//   //   ],
//   //   website: "https://www.facebook.com/pizzaleovungtau/",
//   //   meal: {
//   //     lunch: true,
//   //     dinner: true,
//   //   },
//   //   type: {
//   //     restaurant: true,
//   //     quickBites: true,
//   //   },
//   //   evaluatePoint: 5,
//   //   placeID: "62835e50bbcfaf241dc01a16",
//   //   provinceID: "62834d22d587a5f7b2b82bac",
//   // },
//   // {
//   //   name: "Matildas",
//   //   location: "6 Nguyen Du, Vung Tau 790000 Vietnam",
//   //   phone: "0933 216 425",
//   //   price: 30,
//   //   openTime: "8:00",
//   //   closeTime: "22:00",
//   //   image: [
//   //     "https://media-cdn.tripadvisor.com/media/photo-f/23/37/76/06/rib-eye-steak-australian.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-s/22/72/72/2d/meat-pastry.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-s/22/72/72/28/desert.jpg",
//   //    ],
//   //   website: "https://www.facebook.com/MatildasPubVietnam",
//   //   meal: {
//   //     breakfast: true,
//   //     lunch: true,
//   //     dinner: true,
//   //   },
//   //   type: {
//   //     restaurant: true,
//   //   },
//   //   evaluatePoint: 4,
//   //   placeID: "62835e50bbcfaf241dc01a16",
//   //   provinceID: "62834d22d587a5f7b2b82bac",
//   // },
//   // {
//   //   name: "Cariban coffee",
//   //   location: "126D Hoang Hoa Tham, Phuong 02, Vung Tau 790000 Vietnam",
//   //   phone: "0868 210 268",
//   //   price: 5,
//   //   openTime: "8:00",
//   //   closeTime: "20:00",
//   //   image: [
//   //     "https://media-cdn.tripadvisor.com/media/photo-s/15/e9/28/3e/guests.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-s/15/e9/28/26/this-is-in-front-of-coffee.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-f/15/e9/28/3f/tourists.jpg",
//   //   ],
//   //   website: "https://www.facebook.com/caribancoffee/",
//   //   meal: {
//   //     breakfast: true,
//   //     lunch: true,
//   //     dinner: true,
//   //   },
//   //   type: {
//   //     coffeeAndTea: true,
//   //   },
//   //   evaluatePoint: 5,
//   //   placeID: "62835e50bbcfaf241dc01a16",
//   //   provinceID: "62834d22d587a5f7b2b82bac",
//   // },
//   // {
//   //   name: "Roots Plant-based Cafe",
//   //   location:
//   //     "1 An Thuong 30 Bac My Phu, Ngu Hanh Son, Da Nang 550000 Vietnam",
//   //   phone: "0865 528 252",
//   //   price: 5,
//   //   openTime: "8:30",
//   //   closeTime: "20:00",
//   //   image: [
//   //     "https://media-cdn.tripadvisor.com/media/photo-s/16/9d/cf/ef/breakfast.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-s/16/9d/d4/92/japanese-nori-bowl.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-f/16/9d/d4/93/budda-bowls.jpg",
//   //   ],
//   //   website: "https://rootsplantbasedcafe.com/",
//   //   meal: {
//   //     breakfast: true,
//   //     lunch: true,
//   //     dinner: true,
//   //   },
//   //   type: {
//   //     restaurant: true,
//   //     localFood: true,
//   //   },
//   //   evaluatePoint: 5,
//   //   provinceID: "628350433f67b71a8812d62b",
//   // },
//   // {
//   //   name: "Cong Ca Phe",
//   //   location:
//   //     "96-98 Bach Dang Hai Chau 1, Hai Chau, Da Nang 550000 Vietnam",
//   //   phone: "0911 811 150",
//   //   price: 3,
//   //   openTime: "7:30",
//   //   closeTime: "23:00",
//   //   image: [
//   //     "https://media-cdn.tripadvisor.com/media/photo-s/10/b2/1f/5a/come-at-night-with-less.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-s/07/05/95/f0/getlstd-property-photo.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-f/0d/72/1b/b0/photo0jpg.jpg",
//   //   ],
//   //   website: "http://congcaphe.com/",
//   //   meal: {
//   //     breakfast: true,
//   //     lunch: true,
//   //     dinner: true,
//   //   },
//   //   type: {
//   //     coffeeAndTea: true,
//   //     quickBites: true,
//   //   },
//   //   evaluatePoint: 4.5,
//   //   provinceID: "628350433f67b71a8812d62b",
//   // },
//   // {
//   //   name: "Moc Seafood",
//   //   location: "26 To Hien Thanh Son Tra, Da Nang 550000 Vietnam",
//   //   phone: "0905 665 058",
//   //   price: 10,
//   //   openTime: "10:30",
//   //   closeTime: "22:00",
//   //   image: [
//   //     "https://media-cdn.tripadvisor.com/media/photo-s/17/b2/25/6e/moc-seefood.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-f/1a/a2/53/f2/the-food-is-delicious.jpg",
//   //     "https://media-cdn.tripadvisor.com/media/photo-f/17/b2/21/5d/moc-seefood.jpg",
//   //   ],
//   //   website: "https://www.facebook.com/mocseafood/",
//   //   meal: {
//   //     lunch: true,
//   //     dinner: true,
//   //   },
//   //   type: {
//   //     restaurant: true,
//   //   },
//   //   evaluatePoint: 3,
//   //   provinceID: "628350433f67b71a8812d62b",
//   // }
// );
// post.save();

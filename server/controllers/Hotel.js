import { HotelModel } from "../models/HotelModel.js";

export const getHotels = async (req, res) => {
  try {
    // const post = new HotelModel(
    // {
    //   name: "Motel Quoc Viet",
    //   location:
    //     "Hùng Vương, Phước Hưng, Bà Rịa, Ba Ria - Vung Tau, Vietnam, Ba Ria, Vietnam",
    //   description: "",
    //   phone: "0118 425 437",
    //   price: 12,
    //   start: 0,
    //   image: [
    //     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/282737717.jpg?k=915b93d36185eecf3eb910559b967a71366ff02da0fa0a97ad42923e7c3094a3&o=&hp=1",
    //     "https://q-xx.bstatic.com/xdata/images/hotel/840x460/282680006.jpg?k=0401d80a02b556c9c4e033d023a4fd3577b6af36976421d7253aae1f67aa56ac&o=",
    //     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/282676223.jpg?k=f176f5b36933658f28403754cbc7937b18dd7257f328994e96d0601635c7d2e0&o=&hp=1",
    //   ],
    //   website:
    //     "https://www.ihg.com/holidayinnresorts/hotels/us/en/vung-tau/vtght/hoteldetail",
    //   placeID: "62835f98dc4dd1b7495ea898",
    //   provinceID: "62834d22d587a5f7b2b82bac",
    //   evaluatePoint: 3.5,
    // }
    // );

    // post.save();

    await HotelModel.find()
      .populate({
        path: "placeID",
      })
      .populate({
        path: "provinceID",
      })
      .exec()
      .then((hotels) => {
        res.status(200).json(hotels);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// const post = new HotelModel(
// {
//   name: "Motel Quoc Viet",
//   location:
//     "Hùng Vương, Phước Hưng, Bà Rịa, Ba Ria - Vung Tau, Vietnam, Ba Ria, Vietnam",
//   description: "",
//   phone: "0118 425 437",
//   price: 12,
//   start: 0,
//   image: [
//     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/282737717.jpg?k=915b93d36185eecf3eb910559b967a71366ff02da0fa0a97ad42923e7c3094a3&o=&hp=1",
//     "https://q-xx.bstatic.com/xdata/images/hotel/840x460/282680006.jpg?k=0401d80a02b556c9c4e033d023a4fd3577b6af36976421d7253aae1f67aa56ac&o=",
//     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/282676223.jpg?k=f176f5b36933658f28403754cbc7937b18dd7257f328994e96d0601635c7d2e0&o=&hp=1",
//   ],
//   website:
//     "https://www.ihg.com/holidayinnresorts/hotels/us/en/vung-tau/vtght/hoteldetail",
//   placeID: "62835f98dc4dd1b7495ea898",
//   provinceID: "62834d22d587a5f7b2b82bac",
//   evaluatePoint: 3.5,
// }
//   // {
//   //   name: "Holiday Inn Resort Ho Tram Beach",
//   //   location:
//   //     "The Grand Ho Tram Strip Phuoc Thuan, Xuyen Moc, Ba Ria, Vung Tau 790000 Vietnam",
//   //   description:
//   //     "Revel in the joy of travel at the Holiday Inn Resort Ho Tram Beach. With 502 stylishly appointed rooms and suites inside The Grand Ho Tram Strip complex, this inviting tower features panoramic sea-views and artistic hues of marine decor. The tower offerings include a gourmet food court and expansive entertainment options with specialty restaurants & bars. Bright, airy, fun, and young, the Holiday Inn Resort is the brand's first entry into Vietnam and to the emerging Ho Tram destination.",
//   //   phone: "0118 425 437",
//   //   price: 86,
//   //   start: 4,
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/e7/57/59/holiday-inn-resort-ho.jpg?w=1200&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/e7/54/92/holiday-inn-resort-ho.jpg?w=1200&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3e/48/39/premium-suite-two-bedroom.jpg?w=1200&h=-1&s=1",
//   //   ],
//   //   website:
//   //     "https://www.ihg.com/holidayinnresorts/hotels/us/en/vung-tau/vtght/hoteldetail",
//   //   placeID: "62835e50bbcfaf241dc01a16",
//   //   provinceID: "62834d22d587a5f7b2b82bac",
//   //   evaluatePoint: 5,
//   // },
//   // {
//   //   name: "ibis Styles Vung Tau",
//   //   location: "117 Thuy Van Thang Tam, Vung Tau 790000 Vietnam",
//   //   description:
//   //     "Exuding the ocean-inspired, playful and stylish ambiance, ibis Styles Vung Tau features 250 guest rooms, StrEATs Restaurant, OnTheTop Rooftop Pool & Bar, a meeting room and a fitness. This design hotel is centrally located on Vung Tau's back beach and a few minutes from must-see attractions. ibis Styles Vung Tau is a perfect choice as a business hotel, besides its appeal to leisure travellers.",
//   //   phone: "0254 352 008",
//   //   price: 49,
//   //   start: 3,
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d3/bc/70/exterior-view.jpg?w=1100&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/1b/95/bf/rooftop-swimmingpool.jpg?w=1200&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/51/ea/be/family.jpg?w=1100&h=-1&s=1",
//   //   ],
//   //   website:
//   //     "https://all.accor.com/hotel/B2U9/index.en.shtml?utm_term=mar&gclid=CjwKCAjwj42UBhAAEiwACIhADiRme_zEu4GvHo5Fbidnux5oxueLssmaj_NfJtRgCvL-Y2Ca33n-nRoCVWYQAvD_BwE&utm_campaign=ppc-ibs-mar-goo-vn-en-vn-exa-sear-vn&utm_medium=cpc&utm_content=vn-en-all-all&utm_source=google",
//   //   placeID: "62835e50bbcfaf241dc01a16",
//   //   provinceID: "62834d22d587a5f7b2b82bac",
//   //   evaluatePoint: 4.5,
//   // }
//   // {
//   //   name: "Fusion Suites Vung Tau",
//   //   location: "02 Truong Cong Dinh Ward 2, Vung Tau 790000 Vietnam",
//   //   description:
//   //     "Fusion Suites Vung Tau brings originality and a wellness inspired hotel to the seaside town of Vung Tau. It has set a new trend with 170 stylish suites, studios and apartments with expansive ocean and mountain views. Featuring daily spa treatments at no extra cost, yoga classes, fitness center, 8 uniquely designed sky pools and a rooftop infinity pool. You can enjoy breakfast, lunch or dinner in the 19th floor restaurant Fresh with 360 degree views or indulge in a few cocktails in the best rooftop bar in town Breeze. The ground floor features Fusion Courtyard with a café, weekend burger bar, bubble tea station and wine shop. Fusion Suites also offers banquet meeting rooms for up to 240 people.",
//   //   phone: "0254 625 272",
//   //   price: 30,
//   //   start: 2,
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/58/89/2f/breeze-roof-top-sky-bar.jpg?w=1200&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/12/58/3a/caption.jpg?w=1200&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/12/58/39/caption.jpg?w=1200&h=-1&s=1",
//   //   ],
//   //   website:
//   //     "https://mytour.vn/khach-san/47741-khach-san-fusion-suites-vung-tau.html?listReview=true&gclid=CjwKCAjwj42UBhAAEiwACIhADofejhhexn1G5ZRBUW05UQzlxkVdnteRKYRf0ozg2iMnmwYKfZx4ORoCe3kQAvD_BwE",
//   //   placeID: "62835e50bbcfaf241dc01a16",
//   //   provinceID: "62834d22d587a5f7b2b82bac",
//   //   evaluatePoint: 4,
//   // }
// {
//   name: "Vanda Hotel",
//   location:
//     "05 Truong Sa Street Hoa Hai Ward, Ngu Hanh Son District, Da Nang 550000 Vietnam",
//   description:
//     "Surrounded by the famous UNESCO heritage sites including Hoi An Ancient Town, Hoi An Sanctuary and Hue the Citadel, Da Nang City with the title of as the best city for living in Viet Nam is not only a symbol of economy - culture growth but also an idea destination for tourism and leisure. Located on one of the most beautiful streets of Da Nang City, right next to the unique Dragon Bridge, Vanda Hotel including 114 elegant rooms with luxurious amenities and high quality services will surely satisfy even the most demanding Guests. Whoever you are - a business man on his business trip, a just-married couple for honeymoon or a group of friends looking for a weekend getaway, you can definitely have the right type of accommodation with excellent services here in Vanda Hotel",
//   phone: "0118 425 437",
//   price: 60,
//   start: 5,
//   image: [
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e1/2f/75/vanda-hotel.jpg?w=1200&h=-1&s=1",
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/c2/20/44/deluxe-river-view.jpg?w=1200&h=-1&s=1",
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/23/52/6b/vanda-hotel.jpg?w=1200&h=-1&s=1",
//   ],
//   website: "https://www.vandahotel.vn/",
//    provinceID: "628350433f67b71a8812d62b",
//   evaluatePoint: 5,
// }
//   // {
//   //   name: "Hyatt Regency Danang Resort & Spa",
//   //   location:
//   //     "05 Truong Sa Street Hoa Hai Ward, Ngu Hanh Son District, Da Nang 550000 Vietnam",
//   //   description:
//   //     "Situated on a tranquil stretch of white sandy beach, at the gateway to the vibrant city of Danang, Hyatt Regency Danang Resort and Spa is an ideal base to explore the exotic charms of Central Vietnam no matter the occasion, from meetings and events to memorable family vacations. Dine throughout the day at Green House. Enjoy authentic local Vietnamese dishes or Western comfort food at Pool House. Savor seafood and grilled cuisine on the beach at Beach House. VIE Spa, located at Hyatt Regency Danang Resort and Spa in Vietnam is designed to immerse you in the local environment and its traditions of wellness and healing. Cradled between the mountains and the sea, VIE Spa promotes the healing powers of nature through specialized spa treatments that guide you on a path to personal wellness.",
//   //   phone: "0118 236 398",
//   //   price: 60,
//   //   start: 5,
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/4c/dc/bc/exterior.jpg?w=1100&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/04/e8/f1/exterior-aerial.jpg?w=1200&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/2d/9a/a6/hyatt-regency-danang.jpg?w=1200&h=-1&s=1",
//   //   ],
//   //   website:
//   //     "https://www.hyatt.com/en-US/hotel/vietnam/hyatt-regency-danang-resort-and-spa/danhr?src=prop_tripadvisor_businesslisting_danhr_en_homepage",
//   //   provinceID: "628350433f67b71a8812d62b",
//   //   evaluatePoint: 5,
//   // },
//   // {
//   // {
//   //   name: "Sala Danang Beach Hotel",
//   //   location:
//   //     "36 - 38 Lam Hoanh St. Phuoc My Ward, Son Tra District, Da Nang 550000 Vietnam",
//   //   description:
//   //     "Sala Danang Beach Hotel is located by the famous My Khe beach, only 2km from the Han River and Danang city center. The hotel offers 162 rooms with views of the sea and the city center, SALA restaurant serving all day meals with international and local cuisines. You can enjoy drinks at the S Café and let us make your meeting more professional with our business center. We also offer many opportunities for fitness, rejuvenation & relaxation, with a fully equipped fitness center with classes at our ZEN Spa & Gym. In addition, ZEN Spa offers private and couples rooms with a diverse menu of treatments based on traditional Asian healing principles. Coming to the 25th floor, you can take a dip in the infinity pool with panoramic views of My Khe beach and Son Tra peninsula. There is also a rooftop bar serving drinks and snacks. Come and enjoy your stay with us, we will surely bring you the most wonderful holiday!",
//   //   phone: "0118 423 381 ",
//   //   price: 49,
//   //   start: 4,
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/04/e8/f1/exterior-aerial.jpg?w=1200&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/4c/dc/bc/exterior.jpg?w=1100&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/2d/9a/a6/hyatt-regency-danang.jpg?w=1200&h=-1&s=1",
//   //   ],
//   //   website:
//   //     "https://mytour.vn/khach-san/35132-khach-san-sala-da-nang-beach.html?gclid=CjwKCAjwj42UBhAAEiwACIhADoDe6GmpDoj5R0tGh3-S4o9PPioYnLbyaNYTJdYvD2mO6_e8lTQ9eBoCijUQAvD_BwE",
//   //   provinceID: "628350433f67b71a8812d62b",
//   //   evaluatePoint: 5,
//   // },
//   // {
//   //   name: "Sala Hotel",
//   //   location:
//   //     "36 - 38 Lam Hoanh St. Phuoc My Ward, Son Tra District, Da Nang 550000 Vietnam",
//   //   description:
//   //     "Sala Danang Beach Hotel is located by the famous My Khe beach, only 2km from the Han River and Danang city center. The hotel offers 162 rooms with views of the sea and the city center, SALA restaurant serving all day meals with international and local cuisines. You can enjoy drinks at the S Café and let us make your meeting more professional with our business center. We also offer many opportunities for fitness, rejuvenation & relaxation, with a fully equipped fitness center with classes at our ZEN Spa & Gym. In addition, ZEN Spa offers private and couples rooms with a diverse menu of treatments based on traditional Asian healing principles. Coming to the 25th floor, you can take a dip in the infinity pool with panoramic views of My Khe beach and Son Tra peninsula. There is also a rooftop bar serving drinks and snacks. Come and enjoy your stay with us, we will surely bring you the most wonderful holiday!",
//   //   phone: "0118 423 381 ",
//   //   price: 30,
//   //   start: 3,
//   //   image: [
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/4c/dc/bc/exterior.jpg?w=1100&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/04/e8/f1/exterior-aerial.jpg?w=1200&h=-1&s=1",
//   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/2d/9a/a6/hyatt-regency-danang.jpg?w=1200&h=-1&s=1",
//   //   ],
//   //   website:
//   //     "https://mytour.vn/khach-san/35132-khach-san-sala-da-nang-beach.html?gclid=CjwKCAjwj42UBhAAEiwACIhADoDe6GmpDoj5R0tGh3-S4o9PPioYnLbyaNYTJdYvD2mO6_e8lTQ9eBoCijUQAvD_BwE",
//   //   provinceID: "628350433f67b71a8812d62b",
//   //   evaluatePoint: 4.3,
//   // }
// );

// post.save();

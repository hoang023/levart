import { ProvinceModel } from "../models/ProvinceModel.js";

export const getProvinces = async (req, res) => {
  try {
    // const province = new ProvinceModel({
    //   name: "Quang Nam",
    //   location: "Viet Nam",
    //   title: "Quang Nam is a province in the South Central Coast region of Vietnam.",
    //   description: "Quang Nam province is located in the central region of Vietnam, 820 km from Hanoi capital to the north, 126 km from Hue city to the south, bordering Da Nang city in the north and 900 km from Ho Chi Minh City. km to the South along National Highway 1",
    //   image: [
    //   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/e0/89/99/da-nang-beach.jpg?w=700&h=-1&s=1",
    //   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/97/56/82/caption.jpg?w=500&h=300&s=1",
    //   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f9/23/2e/vinpearl-resort-golf.jpg?w=500&h=300&s=1"
    // ],
    //   path: "Province",
    // })
    // province.save()
 

    const provinces = await ProvinceModel.find();

    res.status(200).json(provinces);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
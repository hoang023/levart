import { RequestModel } from "../models/RequestModel.js"


export const getRequest = async (req, res) => {
  try {
    // const requests = new RequestModel(
    // {
    //     ProfileID: "639e8070a9df86c2c62a3bbc",
    //     HotelID: "639e86c45eb3dbe81f5ac46b",
    //     noticeTitle:"abjjhdnshdbjs",
    //     checkIn:"2022-12-18",
    //     checkOut:"2022-12-21",
    //     statusRequest: "Not Approved"
    // }
    // )

    // requests.save();

    await RequestModel.find()
      .populate({
        path: "ProfileID",
        populate: {
          path: "UserID",
        }
      })
      .populate({
        path: "HotelID",
        populate: {
          path: "supplierID"
        },
        populate: {
          path: "placeID",
          populate: {
            path: "provinceID"
          }
        }
      })
      .exec()
      .then((requests) => {
        res.status(200).json(requests);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createRequest = async (req, res) => {
  try {
    const dataRequest = req.body
    const request = new RequestModel(dataRequest)
    await request.save().then((request) => {
      RequestModel.findById(request._id)
        .populate({
          path: "ProfileID",
          populate: {
            path: "UserID",
          }
        })
        .populate({
          path: "HotelID",
          populate: {
            path: "supplierID"
          },
          populate: {
            path: "placeID",
            populate: {
              path: "provinceID"
            }
          }
        })
        .exec()
        .then((request) => {
          res.status(200).json(request)
        })
    })
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

export const updateRequest = async (req, res, next) => {
  try {
    const dataRequest = req.body

    await RequestModel.findOneAndUpdate(
      { _id: dataRequest._id },
      dataRequest,
      { new: true }
    )
        .populate({
          path: "HotelID",
          populate: {
            path: "supplierID"
          },
          populate: {
            path: "placeID",
            populate: {
              path: "provinceID"
            }
          }
        })
        .exec()
        .then((request) => {
          res.status(200).json(request)
        });
  } catch (err) {
  res.status(500).json({ error: err });
  next()
}
}

import { MyTripModel } from "../models/MyTripModel.js";

export const getMyTrip = async (req, res) => {
  try {
    const { UserID } = req.params;
    await MyTripModel.findOne({ UserID: UserID })
      .populate("collections.placeList.placeList_id")
      .exec()
      .then((myTrip) => {
        res.status(200).json(myTrip);
      });

    // return res.status(200).json(myTrip);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createCollections = async (req, res) => {
  try {
    const dataCollection = req.body;
    // console.log(dataCollection);

    const newCollection = {
      name: dataCollection.name,
      placeList: [
        {
          placeList_id: dataCollection.placeList_id,
          externalModelType: dataCollection.externalModelType,
        },
      ],
    };

    const { UserID } = req.params;

    const myTrip = await MyTripModel.findOne({ UserID: UserID });

    myTrip.collections.push(newCollection);

    await myTrip.save().then((trip) =>
      MyTripModel.findById(trip._id)
        .populate("collections.placeList.placeList_id")
        .exec()
        .then((myTrip) => {
          res.status(200).json(myTrip);
        })
    );

    // res.status(200).json(myTrip);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPlaceList = async (req, res) => {
  try {
    const { placeList_id, externalModelType } = req.body;

    const { UserID, collectionID } = req.params;
    // console.log("MyTripModel", MyTripModel);

    await MyTripModel.findOneAndUpdate(
      { UserID: UserID, "collections._id": collectionID },
      {
        $push: {
          "collections.$.placeList": {
            placeList_id: placeList_id,
            externalModelType: externalModelType,
          },
        },
      },
      { new: true }
    )
      .populate("collections.placeList.placeList_id")
      .exec()
      .then((myTrip) => {
        res.status(200).json(myTrip);
      });

    // res.status(200).json(myTrip);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

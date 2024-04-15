const roomschema = require("../model/roomschemamodel");

exports.createroomschema = async (req, res) => {
  try {
    const { roomCategory, roomNumber, totalBeds, beds } = req.body;

    const newRoom = new Room({
      roomCategory,
      roomNumber,
      totalBeds,
      beds,
    });
    const savedRoom = await newRoom.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id).populate('roomCategory').populate('beds');
        if (room) {
            res.status(200).json(room);
        } else {
            res.status(404).json({ message: "Room not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.createname = async (req, res) => {
    try {
        const { roomCategory, roomNumber, totalBeds, beds } = req.body;

        const newRoom = new Room({
            roomCategory,
            roomNumber,
            totalBeds,
            beds
        });

        
        const savedRoom = await newRoom.save();


        await RoomCategory.findByIdAndUpdate(
            roomCategory,
            { $push: { rooms: savedRoom._id } },
            { new: true, useFindAndModify: false }
        );

        res.status(201).json(savedRoom);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


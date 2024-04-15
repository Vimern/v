
const categorymodel = require("../model/categorymodel");


exports.createRoomCategory = async(req,res)  =>{
  try {
    const{ roomCategoryName,rooms } = req.body;
    const newRoomCategory = new RoomCategory({roomCategoryName,rooms});
    const savedRoomCategory = await newRoomCategory.save();
    res.status(201).send(savedRoomCategory);

  } catch (error) {
    res.status(400).send({messgae:error});
  }
};









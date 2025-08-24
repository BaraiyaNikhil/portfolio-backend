const Massage = require("../models/massage.model");

exports.createMassage = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, massage } = req.body;
    const newMassage = new Massage({ firstName, lastName, email, phone, massage });
    await newMassage.save();
    res.status(201).json(newMassage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getMassages = async (req, res) => {
  try {
    const massages = await Massage.find();
    res.json(massages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

import Queen from "../models/Queen.js";

export const getQueens = async (req, res) => {
  try {
    const queens = await Queen.find();
    res.json(queens);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getQueen = async (req, res) => {
  try {
    const { id } = req.params;
    const queen = await Queen.findById(id).populate("name");

    if (queen) {
      return res.json(queen);
    }

    res.status(404).json({ message: "Queen not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createQueen = async (req, res) => {
  try {
    const queen = new Queen(req.body);
    await queen.save();
    res.status(201).json(queen);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateQueen = async (req, res) => {
  try {
    const { id } = req.params;
    const queen = await Queen.findByIdAndUpdate(id, req.body);
    res.status(201).json(queen);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteQueen = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Queen.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Queen deleted!");
    }

    throw new Error("Queen not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
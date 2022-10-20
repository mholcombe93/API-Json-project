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
    const queen = await Queen.findById(id);

    if (queen) {
      return res.json(queen);
    }

    res.status(404).json({ message: "Queen not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
export const getQueenName = async (req, res) => {
  try {
    const { name } = req.params;
    const queen = await Queen.find({name:name});

    if (queen) {
      return res.json(queen);
    }

    res.status(404).json({ message: "Queen not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
export const getQueenOrder = async (req, res) => {
  try {
    const { order } = req.params;
    const queen = await Queen.find({order:order});

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
export const updateQueenByName = async (req, res) => {
  try {
    const { name } = req.params;
    const queen = await Queen.findOneAndUpdate({ name: name }, req.body);
    res.status(201).json(queen);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
export const updateQueenByOrder = async (req, res) => {
  try {
    const { order } = req.params;
    const queen = await Queen.findOneAndUpdate({order: order}, req.body);
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
export const deleteQueenByName = async (req, res) => {
  try {
    const { name } = req.params;
    const deleted = await Queen.findOneAndDelete({name: name});

    if (deleted) {
      return res.status(200).send("Queen deleted!");
    }

    throw new Error("Queen not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
export const deleteQueenByOrder = async (req, res) => {
  try {
    const { order } = req.params;
    const deleted = await Queen.findOneAndDelete({ order:order});

    if (deleted) {
      return res.status(200).send("Queen deleted!");
    }

    throw new Error("Queen not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

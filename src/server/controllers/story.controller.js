import storyService from "../services/story.service.js";

export const getAllStory = async (req, res) => {
  try {
    const data = await storyService.getAll();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching story data" });
  }
};

export const getActiveStory = async (req, res) => {
  try {
    const data = await storyService.getActive();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching active story" });
  }
};

export const getStoryById = async (req, res) => {
  try {
    const data = await storyService.getById(req.params.id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching story" });
  }
};

export const insertStory = async (req, res) => {
  try {
    await storyService.insert(req.body);
    res.status(201).json({ message: "Story added" });
  } catch (err) {
    res.status(500).json({ message: "Error adding story" });
  }
};

export const updateStory = async (req, res) => {
  try {
    await storyService.update(req.params.id, req.body);
    res.status(200).json({ message: "Story updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating story" });
  }
};

export const deleteStory = async (req, res) => {
  try {
    await storyService.deleteById(req.params.id);
    res.status(200).json({ message: "Story deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting story" });
  }
};

import carouselService from "../services/carousel.service.js";

export const getAllCarousel = async (req, res) => {
  try {
    const [rows] = await carouselService.getAllCarousel();
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error("Error fetching carousel:", error);
    res.status(500).json({ message: "Failed to fetch carousel" });
  }
};

export const getActiveCarousel = async (req, res) => {
  try {
    const [rows] = await carouselService.getActiveCarousel();
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error("Error fetching active carousel:", error);
    res.status(500).json({ message: "Failed to fetch active carousel" });
  }
};

export const getCarouselById = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await carouselService.getCarouselById(id);

    if (rows && rows.length > 0) {
      res.status(200).json({ data: rows[0] });
    } else {
      res.status(404).json({ message: "Carousel not found" });
    }
  } catch (error) {
    console.error("Error fetching carousel by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const insertCarousel = async (req, res) => {
  try {
    const { title, deskripsi, image } = req.body;
    await carouselService.insertCarousel(title, deskripsi, image);
    res.status(201).json({ message: "Carousel created successfully" });
  } catch (error) {
    console.error("Error inserting carousel:", error);
    res.status(500).json({ message: "Failed to insert carousel" });
  }
};

export const updateCarousel = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    await carouselService.updateCarousel(id, updateData);

    res.status(200).json({ message: "Carousel updated successfully" });
  } catch (error) {
    console.error("Error updating carousel:", error);
    res.status(500).json({ message: "Failed to update carousel" });
  }
};

export const deleteCarousel = async (req, res) => {
  try {
    const { id } = req.params;
    await carouselService.deleteCarousel(id);

    res.status(200).json({ message: "Carousel deleted successfully" });
  } catch (error) {
    console.error("Error deleting carousel:", error);
    res.status(500).json({ message: "Failed to delete carousel" });
  }
};

export const prescriptionImageController = async (req, res) => {
    try {
        const { image } = req.files;
    if (!image) {
        return res.status(400).send({ error: "Image is required" });
    }
        let newImage = new Image({
            image,
        });
    newImage = await newImage.save();
    res.json(newImage);
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: "Error in uploading photo",
        });
    };
};
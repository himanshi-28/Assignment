// ocrRoutes.js
const express = require('express');
const router = express.Router();
const { createWorker } = require('tesseract.js');
const Jimp = require('jimp');
const path = require('path');

// OCR route
router.get('/ocr', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/ocr.html'));
});

router.post('/ocr', async (req, res) => {
  try {
    const { imagePath } = req.body;

    const worker = createWorker();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    await worker.setParameters({});

    const image = await Jimp.read(imagePath);
    image.rgba(false);
    image.greyscale();
    await image.write('edited_' + imagePath);

    const data = await worker.recognize('edited_' + imagePath);
    console.log('Total Accuracy', data.data.confidence);
    console.log('Total Accuracy', data.data.text);

    const recognizedText = data.data.text;

    await worker.terminate();

    res.status(200).json(recognizedText);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error processing OCR.' });
  }
});

module.exports = router;

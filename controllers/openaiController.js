const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {

    const { prompt,size }  = req.body;
    const image_size = size === "small" ? "256*256" : size === "medium" ? "512*512" : "1024*1024"
  try {

    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size:image_size,
    });
    image_url = response.data.data[0].url;

    res.status(200).json({
      success: true,
      data: image_url,
    });
  } catch (error) {
    if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }

    res.status(400).json({
      success:false,
      error:'unable to generate image'
    });
  }
};

module.exports = { generateImage };

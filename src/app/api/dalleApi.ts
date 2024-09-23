import axios from 'axios';


const DALLE_API_ENDPOINT = 'https://api.openai.com/v1/davinci';

const generateImage = async (description) => {
  try {
    const response = await axios.post(
      DALLE_API_ENDPOINT + '/images',
      {
        prompt: description,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' 
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};

export default generateImage;




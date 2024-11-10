const axios = require('axios');

async function getItems() {
  try {
    const response = await axios.get('https://api.totalum.app/api/v1/crud/video?sort[createdAt]=1&pagination[page]=0&pagination[limit]=50', {
      headers: {
        'api-key': 'sk-eyJrZXkiOiIxODNmMDJlN2JkNGU2MjYwNzQ4MzY1ZDUiLCJuYW1lIjoiRGVmYXVsdCBBUEkgS2V5IGF1dG9nZW5lcmF0ZWQgajA3aiIsIm9yZ2FuaXphdGlvbklkIjoiZWNob3N0cmVhbSJ9'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.toString());
    console.error(error?.response?.data);
  }
}

getItems()

const axios = require('axios');

async function getItem() {
  try {
    const response = await axios.get('https://api.totalum.app/api/v1/crud/video/{id}', {
      headers: {
        'api-key': 'sk-eyJrZXkiOiIxODNmMDJlN2JkNGU2MjYwNzQ4MzY1ZDUiLCJuYW1lIjoiRGVmYXVsdCBBUEkgS2V5IGF1dG9nZW5lcmF0ZWQgajA3aiIsIm9yZ2FuaXphdGlvbklkIjoiZWNob3N0cmVhbSJ9'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.toString());
    console.error(error?.response?.data);
  }
}
getItem();

const axios = require('axios');

async function createItem() {
  try {
    const response = await axios.post('https://api.totalum.app/api/v1/crud/video',
    {
  "video_url": "exampleString",
  "video_title": "exampleString",
  "user_id": "exampleString",
  "upload_date": "2015-03-25"
},
      {
      headers: {
        'api-key': 'sk-eyJrZXkiOiIxODNmMDJlN2JkNGU2MjYwNzQ4MzY1ZDUiLCJuYW1lIjoiRGVmYXVsdCBBUEkgS2V5IGF1dG9nZW5lcmF0ZWQgajA3aiIsIm9yZ2FuaXphdGlvbklkIjoiZWNob3N0cmVhbSJ9',
        'content-type': 'application/json'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.toString());
    console.error(error?.response?.data);
  }
}

createItem();
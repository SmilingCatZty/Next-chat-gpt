import { OpenAI } from 'openai'
import { openai } from './init-openai'

const openaiErrorHandle = async () => {
  // Old
  try {
    // const completion = await openai.createCompletion({ ...});
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status); // e.g. 401
      console.log(error.response.data.message); // e.g. The authentication token you passed was invalid...
      console.log(error.response.data.code); // e.g. 'invalid_api_key'
      console.log(error.response.data.type); // e.g. 'invalid_request_error'
    } else {
      console.log(error);
    }
  }

  // New
  try {
    // const response = await openai.completions.create({ ...});
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(error.status);  // e.g. 401
      console.error(error.message); // e.g. The authentication token you passed was invalid...
      console.error(error.code);  // e.g. 'invalid_api_key'
      console.error(error.type);  // e.g. 'invalid_request_error'
    } else {
      // Non-API error
      console.log(error);
    }
  }
}
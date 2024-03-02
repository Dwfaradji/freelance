import axios, { AxiosResponse } from 'axios';

interface PropsApi {
  url: string;
  data: any; // ou le type approprié pour vos données
}

async function callApi({ url, data }: PropsApi): Promise<AxiosResponse<any, any>> {
  try {
    return await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Une erreur s'est produite lors de l'envoi :", error);
    throw error; // Vous pouvez lever l'erreur pour que le code appelant puisse la gérer
  }
}

export default callApi;

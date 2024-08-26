import axios, { AxiosResponse } from 'axios';

interface PropsApi {
  url: string;
  data: any;
}

async function callApi({ url, data }: PropsApi): Promise<AxiosResponse<any>> {
  try {
    return await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(
      `Erreur lors de l'envoi de la requête à l'URL ${url} :`,
      error,
    );
    throw error; // Lève l'erreur pour permettre au code appelant de la gérer
  }
}

export default callApi;

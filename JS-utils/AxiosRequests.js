import axios from 'axios';

var Base_URL = "";

export const getApi = async (ENDPOINT,payload)  => {

        console.log("Endpoint",`${Base_URL}${ENDPOINT}`);
        console.log("Payload",payload);

        const options = {
            url: `${Base_URL}${ENDPOINT}`,
            method: 'get',
            data:payload,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
          };

    try 
    {
        const response = await axios(options);
        return {data:response.data};
    } 
    catch (error) 
    {
        return {error:error.response.data}
    }
}

export const postApi = async (ENDPOINT,payload) => {

  console.log("Endpoint",ENDPOINT);
  console.log("Payload",payload);

    const options = {
        url: `${Base_URL}${ENDPOINT}`,
        method: 'post',
        data:payload,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      };

        try 
        {
            const response = await axios(options);
            return {data:response.data};
        } 
        catch (error) 
        {
            return {error:error.response}
        }
}


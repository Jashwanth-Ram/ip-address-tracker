import { useCallback } from "react"
import { IPDATA } from "../@types/map";

export const useIP = ()=>
{
    const getIPData = useCallback(async (ip? : string) : Promise<IPDATA | void> =>
    {
        try
        {
            //first api for fetching timezone,isp... etc : 
            const url = ip
            //if ip address given -
            ?`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}&ipAddress=${ip}`
            // default -
            :`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}`;
            // fetch data and convert to json :
            const response = await (await fetch(url)).json();

            console.log(response);


            //second api for fetching for fetching longitude and latitude only :
            const geolocationUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${
                import.meta.env.VITE_IPGEO_API_KEY
              }&ip=${response?.ip}`;
             // fetch data and convert to json :
            const geoResponse = await (await fetch(geolocationUrl)).json();


            const responseObj = {
                longitude: geoResponse?.longitude,
                latitude: geoResponse?.latitude,
                isp: response?.isp,
                timezone: response?.location?.timezone,
                ip: response?.ip,
                region: response?.location?.region,
                country: response?.location?.country,
              };
              return responseObj;
        }
        catch(error)
        {
            console.log(error);
            return;
        }
    },[]);

    return{ getIPData }
};
import { Property } from "../typings";

export const fetchProperty = async() => {
    const res = await fetch(`https://beachlandproperties.vercel.app/api/getProperty`);
    
    const data = await res.json();
    const properties: Property[] = data.properties;

    return properties;
};
import { Property } from "../typings";

export const fetchProperty = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProperty`);
    
    const data = await res.json();
    const properties: Property[] = data.properties;

    return properties;
};
import { Town } from "../typings";

export const fetchSantiago = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSantiago`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
import { Town } from "../typings";

export const fetchSantiago = async() => {
    const res = await fetch(`https://beachlandproperties.vercel.app/api/getSantiago`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
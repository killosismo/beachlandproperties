import { Town } from "../typings";

export const fetchBavaro = async() => {
    const res = await fetch(`https://beachlandproperties.vercel.app/api/getBavaro`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
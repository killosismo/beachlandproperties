import { Town } from "../typings";

export const fetchLasTerrenas = async() => {
    const res = await fetch(`https://beachlandproperties.vercel.app/api/getLasTerrenas`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
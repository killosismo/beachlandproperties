import { Town } from "../typings";

export const fetchTown = async() => {
    const res = await fetch(`https://beachlandproperties.vercel.app/api/getTowns`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
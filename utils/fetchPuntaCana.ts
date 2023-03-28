import { Town } from "../typings";

export const fetchPuntaCana = async() => {
    const res = await fetch(`https://beachlandproperties.vercel.app/api/getPuntaCana`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
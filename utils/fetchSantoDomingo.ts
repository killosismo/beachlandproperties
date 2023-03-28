import { Town } from "../typings";

export const fetchSantoDomingo = async() => {
    const res = await fetch(`https://beachlandproperties.vercel.app/api/getSantoDomingo`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
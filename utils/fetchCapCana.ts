import { Town } from "../typings";

export const fetchCapCana = async() => {
    const res = await fetch(`https://beachlandproperties.vercel.app/api/getCapCana`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
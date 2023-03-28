import { Town } from "../typings";

export const fetchVistaCana = async() => {
    const res = await fetch(`https://beachlandproperties.vercel.app/api/getVistaCana`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
import { Town } from "../typings";

export const fetchVistaCana = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getVistaCana`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
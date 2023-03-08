import { Town } from "../typings";

export const fetchCapCana = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCapCana`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
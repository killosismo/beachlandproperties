import { Town } from "../typings";

export const fetchSantoDomingo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSantoDomingo`);
    
    const data = await res.json();
    const towns: Town[] = data.towns;

    

    return towns;
};
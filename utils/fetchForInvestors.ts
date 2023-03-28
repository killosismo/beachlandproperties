import { ForInvestors } from "../typings";

export const fetchForInvestors = async() => {
    const res = await fetch(`https://beachlandproperties.vercel.app/api/getForInvestors`);
    
    const data = await res.json();
    const forInvestorss: ForInvestors[] = data.forInvestorss;

    

    return forInvestorss;
};
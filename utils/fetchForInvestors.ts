import { ForInvestors } from "../typings";

export const fetchForInvestors = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getForInvestors`);
    
    const data = await res.json();
    const forInvestorss: ForInvestors[] = data.forInvestorss;

    

    return forInvestorss;
};
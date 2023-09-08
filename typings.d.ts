import { SelectHTMLAttributes } from "react";


export interface Property{
    _type: "property"
    
    _id: string;
    _createdAt: string;
    title: string;
    price: string;
    bedrooms: string;
    bathrooms: string;
    location: geopoint;
    propertyType: string;
    ft: number;
    mt: number;
    delDate: date;
    reserve: number;
    appliances: string;
    furnished: string;
    content: array;

    slug: {
        current: string;
    }

    mainImage: {
        asset:{
            url: string;
        }
    }
    images: [];

    description: string;
    seller: seller;


}

export interface ForInvestors{
    _type: "forInvestors"
    
    _id: string;
    _createdAt: string;
    title: string;
    price: string;
    bedrooms: string;
    bathrooms: string;
    location: geopoint;
    propertyType: string;
    ft: number; 
    mt: number;
    delDate: date;
    reserve: number;
    appliances: string;
    furnished: string;
    content: array;

    slug: {
        current: string;
    }

    mainImage: {
        asset:{
            url: string;
        }
    }
    images: [];

    description: string;
    seller: seller;
    nombre: string;

}

export interface Town{
    
    _type: "town"
   
    _id: string;
    _createdAt: string;
    title: string;
    url: Url;
    properties: PropertyTown[];
    
    mainImage: {
        asset:{
            url: string;
        }
    }
    


}

export interface PropertyTown{
    
        _type: "property"
        
        _id: string;
        _createdAt: string;
        title: string;
        price: string;
        bedrooms: string;
        bathrooms: string;
        location: geopoint;
        propertyType: string;
        ft: number;
        mt: number;
        delDate: date;
        reserve: number;
        appliances: string;
        furnished: string;
        content: array;
    
        slug: {
            current: string;
        }
    
        mainImage: {
            asset:{
                url: string;
            }
        }
        images: [];
    
        description: string;
        seller: seller;
    
    
    }



    
    
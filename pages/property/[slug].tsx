import { sanityClient, urlFor } from "../../sanity"
import Header from "../../components/Header"
import { GetStaticProps } from "next"
import { Property } from "../../typings"
import PortableText from "react-portable-text";
import Link from "next/link";
import Footer from "../../components/Footer";
import Image from "../../components/Image"
import ModalImage from "react-modal-image";
import ContactForm from "../../components/ContactForm";

interface Props {
  property: Property;

}


function Property ( {property}: Props)  {
 

    return(
        <main>
          <Header />
          <div className=" flex flex-col max-w-7xl mx-auto px-8 sm:px-16 my-8">

          <div className="images-section flex rounded-xl overflow-hidden">
          
            <div className="overflow-hidden w-1/2 h-82">
            <ModalImage className="w-full rounded-xl"
  small={urlFor(property.mainImage).url()!}
  large={urlFor(property.mainImage).url()!}
  hideDownload={true}
  alt=""
/>
            </div>
            <div className="sub-images-section flex flex-wrap overflow-hidden w-1/2">
              {property.images.map(({ _key, asset }, image) => (
            <Image key={_key} identifier="image" image={asset} />
            ))}
           </div>
      </div>

            
            
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
            <div className="px-5 col-span-2">
            <h1 className="text-3xl mt-10 mb-3"><b>{property.title}</b></h1>
            <h2>{property.propertyType} selling by <b>{property.seller.name}</b></h2>
            <br/>
            <hr/>
            <br/>
            <h2><b>Price starting at US$ </b>{property.price}</h2>
            <br/>
            <h4><b>Bedrooms:</b> {property.bedrooms}</h4>
            <br/>
            <h4><b>Bathrooms:</b> {property.bathrooms}</h4>
            <br/>
            <h4><b>Square FT:</b> {property.ft}</h4>
            <br/>
            <h4><b>Square MT:</b> {property.mt}</h4>
            <br/>
            <h4><b>Delivery date:</b> {property.delDate}</h4>
            <br/>
            <h4><b>Reserve: US$</b> {property.reserve}</h4>
            <br/>
            <h4><b>Payplan:</b> {property.description}</h4>
            <br/>
            <h4><b>Appliances (linea blanca):</b> {property.appliances}</h4>
            <br/>
            <h4><b>Furnished:</b> {property.furnished}</h4>
            <br/>
            <hr/>
            <br/>
                  
            <div>
              <PortableText 
              dataset= {process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId= {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content ={property.content}
              serializers={{
                
                h1: (props:any) => {
                  <h1 className="text-2xl font-bold my-5" {...props}></h1>
                },
                h2: (props:any) => {
                  <h2 className="text-xl font-bold my-5" {...props}></h2>
                },
                li: ({ children }: any) => {
                  <li className="ml-4 list-disc" {...children}></li>
                },
                link: ({ href,children }: any) => {
                  <a href={href} className="text-blue-500 hover:underline" {...children}></a>
                },
              }}
              />
              

            
            </div>
            </div>
            
            <div className=" sticky top-20 w-96 h-fit border rounded-lg shadow-md p-8 mt-10 items-center flex-grow flex-col">
            <h1><b>Contact the seller by filling out this form</b></h1>
            <br/>
            
            <ContactForm  property={property}/>
              
              
            </div>
          </div>
            
          </div>
          <Footer />
        </main>
    )

}


export default Property;

export const getStaticPaths = async () => {
    
  const query = `*[ _type == "property"]{
      _id,
      slug {
        current
      }
    }`
  
    const properties = await sanityClient.fetch(query)

    const paths = properties.map((property : Property) =>({
      params:{
        slug: property.slug.current
      }
    }))

      return {
        paths,
        fallback: "blocking",
      }
     
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
const query = `*[ _type == "property" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  location,
  propertyType,
  mainImage,
  images,
  price,
  rooms,
  content,
  bedrooms,
  bathrooms,
  ft,
  mt,
  delDate,
  reserve,
  appliances,
  description,
  furnished,
  slug,
  seller->{
    _id,
    name,
    slug,
    image
  },
  
}`

const property = await sanityClient.fetch(query, {
  slug: params?.slug,
})

if (!property) {
  return {
    notFound: true
  }
}



  return {
    props: {
      property,
    },
    revalidate: 10,
  }
}

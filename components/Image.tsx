import { urlFor } from "../sanity"
import ModalImage from 'react-modal-image';
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";



const Image = ( { identifier, image } : { identifier : any , image: any }) => {
 
  const [toggler, setToggler] = useState(false);

  return (
    <div onClick={() => setToggler(!toggler)} className=  {identifier === "main-image" ? "main-image" : "image w-1/2"}>
      <img 
        src={urlFor(image).url()!}
        alt=""
        className="w-full rounded-xl p-1"
      />
      <FsLightbox
				toggler={toggler}
				sources={[urlFor(image).url()!
				]}
			/>
      
			 
    </div>
  )
}

export default Image
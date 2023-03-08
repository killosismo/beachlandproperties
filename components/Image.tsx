import { urlFor } from "../sanity"
import ModalImage from 'react-modal-image';




const Image = ({ identifier, image } : { identifier : any , image: any }) => {
  return (
    <div className={identifier === "main-image" ? "main-image" : "image w-1/2"}>
      <ModalImage className="w-full rounded-xl p-1"
  small={urlFor(image).url()!}
  large={urlFor(image).url()!}
  alt=""
  hideDownload={true}
/>
      
    </div>
  )
}

export default Image
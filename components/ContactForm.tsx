import useForm from "../hooks/useForm"
import { Property } from "../typings";


type Props = {
  property: Property
};

const ContactForm = ({ property }: Props) => {

  
  return (
    <div>
    <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col space-y-2'>
  <input type="hidden" name="access_key" value="05f938e8-ab82-462e-9ccc-35843cb2df6e"/>

<div className="">
  <label htmlFor="title" className="">
                      
</label>
<select 
  name="Title"
  className="mt-1 block w-full rounded-md border py-2 px-3"
   >
    <option>Select the property</option>
<option>{property.title}</option>

</select>
</div>


      <label className='form-label'>Name</label>
      <input required type="text" className='border-2 rounded-lg py-2 px-3' name="Name"/>
      

      <label className='form-label'>Email</label>
      <input required type="email" className='border-2 rounded-lg py-2 px-3' name="Email"/>
      

      <label className='form-label'>Phone number</label>
      <input required type="tel" className='border-2 rounded-lg py-2 px-3'name="Phone"/>
      

      <div className="">
                      <label htmlFor="purpose" className="">
                      What's the goal of your investment in DR?
                      </label>
                      <select
                      name="Purpose" 
                      className="mt-1 block w-full rounded-md border py-2 px-3"
                      >
                        <option>Select an option</option>
                        <option>To have a second home</option>
                        <option>Have a vacation home for occasional use and short-term rental</option>
                        <option>100% Investment, for short or long term rental</option>
                      </select>
                      
                    </div>
      
      <label className='form-label'>Message</label>
      <textarea required className='border-2 rounded-lg py-2 px-3' name="Message"/>
      

      <button type="submit" className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>Send</button>
    </form>
    <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  )
}

export default ContactForm
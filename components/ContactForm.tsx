import useForm from "../hooks/useForm"
import { Property } from "../typings";


type Props = {
  property: Property
};

const ContactForm = ({ property }: Props) => {

  const initialData = {
    titulo: '',
    nombre: '',
    correo: '',
    numero: '',
    proposito: '',
    mensaje: ''
  }

  const onValidate = (form: any) => {
   
  }

  const { form, errors, loading, handleChange, handleSubmit } = useForm(initialData, onValidate)

  return (
    <form className='flex flex-col space-y-2' onSubmit={handleSubmit}>

<div className="">
  <label htmlFor="title" className="">
                      
</label>
<select 
  name="titulo"
  value={form.titulo}
  onChange={handleChange}
  className="mt-1 block w-full rounded-md border py-2 px-3"
   >
    <option>Select the property</option>
<option>{property.title}</option>

</select>
</div>


      <label className='form-label'>Name</label>
      <input required type="text" className='border-2 rounded-lg py-2 px-3' name="nombre" value={form.nombre} onChange={handleChange}/>
      

      <label className='form-label'>Email</label>
      <input required type="email" className='border-2 rounded-lg py-2 px-3' name="correo" value={form.correo} onChange={handleChange}/>
      

      <label className='form-label'>Number</label>
      <input required type="tel" className='border-2 rounded-lg py-2 px-3'name="numero" value={form.numero} onChange={handleChange}/>
      

      <div className="">
                      <label htmlFor="purpose" className="">
                      What' is the purpose of your investment in DR?
                      </label>
                      <select
                      name="proposito" 
                      value={form.proposito} 
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border py-2 px-3"
                      >
                        <option>Select an option</option>
                        <option>To have a second home</option>
                        <option>Have a vacation home for occasional use and short-term rental</option>
                        <option>100% Investment, for short or long term rental</option>
                      </select>
                      
                    </div>
      
      <label className='form-label'>Message</label>
      <textarea required className='border-2 rounded-lg py-2 px-3' name="mensaje" value={form.mensaje} onChange={handleChange}/>
      

      <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5' disabled={loading}>{loading ? "Sending..." : "Send"}</button>
    </form>
  )
}

export default ContactForm
import { useState } from 'react'

const useForm = (initialData : any, onValidate : any) => {
  const [form, setForm] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [errors, setErros] = useState({})

  

  const handleChange = (event :any) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const err = onValidate(form)
    setErros(err)

    if (Object.keys(err).length === 0) {
      setLoading(true)
      fetch("https://formsubmit.co/ajax/enriquillo.billini@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          data.success === "true" && setForm(initialData)
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
          setLoading(false)
        });
    }
  }

  return { form, errors, loading, handleChange, handleSubmit }
}

export default useForm;
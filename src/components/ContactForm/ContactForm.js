import { useState } from 'react'
import './ContactForm.css'

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            phone,
            address,
            comment
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setAddress('')
        setComment('')
    }

    return (
        <div className='PrincipalContainer'>
          <div className='ContactContainer col-8'>
            <h1>Contacto</h1>
              <div>
                <form className='ContactForm' onSubmit={handleContactForm}>
                  <label className='LabelContact'>Nombre:
                    <input
                      className='InputContact'
                      type='text'
                      value={name}
                      onChange={({ target }) => setName(target.value)}
                    />
                  </label>
                  <label className='LabelContact'>Telefono:
                    <input
                      className='InputContact'
                      type='text'
                      value={phone}
                      onChange={({ target }) => setPhone(target.value)}
                    />
                  </label>
                  <label className='LabelContact'>Direccion:
                    <input
                      className='InputContact'
                      type='text'
                      value={address}
                      onChange={({ target }) => setAddress(target.value)}
                    />
                  </label>
                  <label className='LabelContact'>Comentario:
                    <input
                      className='InputContact'
                      type='text'
                      value={comment}
                      onChange={({ target }) => setComment(target.value)}
                    />
                  </label>
                  <button className='fila bordeTablaProductos btnConfirmarInfo' type='submit'>Confirmar</button>
                </form>
              </div>  
          </div>
        </div>
      )
}

export default ContactForm
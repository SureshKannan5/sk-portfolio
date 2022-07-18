import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';;
// import TextField from '@mui/material/TextField'
// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
// import Box from '@mui/material/Box';
// import { ThemeProvider } from "@mui/material/styles";
// import { Button } from '@mui/material'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_z73zsj7', 'template_1yyn57j', form.current, 'rIt8Ndgt5IXMi5EES')
    .then((result) => {
        alert('Message successfully sent!')
          window.location('https://skaynaruto.github.io/portfolio/contact')
    }, (error) => {
        alert('Failed to send the message, please try again')
    });
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              setArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" 
                  type="text" 
                  name="name" 
                  required 
                  autoComplete='off'
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                    autoComplete='off'
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                    autoComplete='off'
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    autoComplete='off'
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact

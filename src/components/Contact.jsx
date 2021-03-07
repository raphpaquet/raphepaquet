import './Contact.scss'
import axios from 'axios'
import react, { useState, useRef } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FloatingActionButtons from './FloatingButton';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
 

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },

  buttonProgress: {
    color: '#006466',
    position: 'flex',
    justifyContent: 'center',
    alignItem:'center',
    marginTop: '1em',
  }
}))

export default function Contact(props) {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const classes = useStyles();
  const timer = useRef()
  const [state, setState] = useState(
    {
    email: '',
    name: '', 
    subject: '', 
    message: ''
  })

  const handleChange = e => {
    const {name, value} = e.target
    setState(prev => ({...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    //destructure from state 
    const {email, name, subject, message} = state
    axios.post('/sendtome', {
      //make an object to be handled from req.body on the backend. 
      email,
      name,
      subject,
      text: message
    })
    .then((res) => {
      setLoading(false)
      setSuccess(true)
      if(res.status == 200) {
        alert('Thank you for your email. Please expect a response from me as soon as possible. 😊');
        console.log('message sent success')
        clearState()
      } else if (res.status == 'fail') {
        alert('Sorry message failed to send. 😞 You can always connect with me on Linkedin!')
        console.log('ERROR')
      }
    })
    clearState()
  };

  const clearState = () => {
    setState({
      email: '',
      name: '', 
      subject: '', 
      message: ''
    })
  }

  let content = {
    english: {
      title: "Contact Me",
      name: "Full Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      click: "SEND"
    },
    french: {
      title: "Contactez-Moi",
      name: "Nom Complet",
      email: "Votre Courriel",
      subject: "Object",
      message: "Votre Message",
      click: "ENVOYER"
    }
  }

  props.language === "french" ? (content = content.french) : (content = content.english);

  return (
    <section id="contact">
      <div className="title-button">
        <FloatingActionButtons />
      </div>
        <h1>{content.title}</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input id="name" className="form-input" type="text" name="name" placeholder={content.name} value={state.name} onChange={handleChange} required/>
        <br></br>
        <input id="email" className="form-input" type="email" name="email" placeholder={content.email} value={state.email} onChange={handleChange} required/>
        <br></br>
        <input id="subject" className="form-input" type="text" name="subject" placeholder={content.subject} value={state.subject} onChange={handleChange}/>
        <br></br>
        <TextareaAutosize aria-label="empty textarea" id="message" className="form-input msg" name="message" placeholder={content.message} value={state.message} onChange={handleChange} required/>
        <br></br>
        <div class="box-1">
          <button class="btn btn-one" type="submit" variant="contained" disabled={loading} >
            <span>{content.click}</span>
         </button>
         <div className="progress">
          {loading && <CircularProgress color="secondary" size={40} className={classes.buttonProgress} /> }
         </div>
        </div>
      </form>
    </section>
  )
}


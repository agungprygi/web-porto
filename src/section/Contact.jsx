import {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const fromRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name : '',
    email : '',
    message : '',
  })
  const handleChange = ({target:{name, value}}) => {
    setForm({...form, [name] : value})
  }

  //service_b8bni5i
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send('service_b8bni5i', 'template_g4tx5as', {
        from_name : form.name,
        to_name : 'Agung Prayogi',
        message : form.message,
        reply_to : form.email,
      }, import.meta.env.VITE_EMAIL_PUBLIC_KEY).then(() => {
        setLoading(false)
        alert('Thank you. I will get back to you as soon as possible.')
        setForm({
          name : '',
          email : '',
          message : '',
        })
      })
    } catch (e) {
      console.log(e)
      alert("Something went wrong. Please try again.")
    }
  }
  return (
    <section className="c-space my-20">
      <div className="relative sm:min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen hidden sm:block"/>
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-gray-500 mt-2">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <form ref={fromRef} className="mt-12 flex flex-col space-y-8" onSubmit={handleSubmit}>
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input type="text"  name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="Your Full Name"/>
            </label><label className="space-y-3">
              <span className="field-label">Email</span>
              <input type="email"  name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="Your Email"/>
            </label><label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea  name="message" value={form.message} onChange={handleChange} required className="field-input" placeholder="Hi, I'm interested in..." rows={5}/>
            </label>
            <button type="submit" className="field-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact

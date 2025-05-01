import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errMessage, setErrMessage] = useState(null);

  const validateForm = (formValues) => {
    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrMessage('Please fill in all fields');
      return false;
    }
    if (formValues.name.length < 5) {
      setErrMessage('Name must be at least 5 characters');
      return false;
    }
    if (formValues.subject.length < 10) {
      setErrMessage('Subject must be at least 10 characters');
      return false;
    }
    if (formValues.message.length < 10) {
      setErrMessage('Message must be at least 10 characters');
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      setErrMessage('Email is invalid');
      return false;
    }
    return true;
  }

  const handleChange = (e) => {
    setFormData(prev => ({ 
      ...prev, 
      [e.target.name]: e.target.value 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrMessage('');

    //= Validate Form
    if (!validateForm(formData)) return;
    
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try { emailjs.send(serviceID, templateID, emailParams, userID);
      
      // Reset form on successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Show success message
      setErrMessage('Message sent successfully!');
      
    } catch (error) {
      console.error('Failed to send message:', error);
      setErrMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="box-shadow to-up">
            <form id="contact-form" onSubmit={handleSubmit}>
              {errMessage && (
                <div className={`messages ${errMessage.includes('successfully') ? 'success' : 'error'}`}>
                  {errMessage}
                </div>
              )}

              <div className="controls row">
                {/* ... rest of your form JSX ... */}
                <div className="col-lg-6 md-mb30">
                  <div className="form-group mb-30">
                    <input id="form_name" type="text" name="name" placeholder="Name" required onChange={handleChange} value={formData.name} />
                  </div>

                  <div className="form-group mb-30">
                    <input id="form_email" type="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
                  </div>

                  <div className="form-group">
                    <input id="form_subject" type="text" name="subject" placeholder="Subject" required onChange={handleChange} value={formData.subject} />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group sam-height">
                    <textarea id="form_message" name="message" placeholder="Message" rows="4" required onChange={handleChange} value={formData.message}></textarea>
                  </div>
                </div>

                <div className="col-12">
                  <div className="text-center mt-40">
                    <button type="submit">
                      <span>Let&lsquo;s Talk</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;
import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrorState {
  name: string | null;
  email: string | null;
  message: string | null;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  message: '',
};

const initialFormErrorState: FormErrorState = {
  name: null,
  email: null,
  message: null,
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [formErrorState, setFormErrorState] = useState<FormErrorState>(initialFormErrorState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(formState);
      // Call your API or do any other required action with form data
      setFormState(initialFormState);
      setFormErrorState(initialFormErrorState);
    }
  };

  const validateForm = () => {
    const errors: FormErrorState = {
      name: null,
      email: null,
      message: null,
    };

    let isValid = true;

    if (formState.name.trim() === '') {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (formState.email.trim() === '') {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (formState.message.trim() === '') {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrorState(errors);

    return isValid;
  };

  return (
    <div className="form-container max-w-[808px] mx-auto min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-[url(../../public/images/form-bg.svg)] bg-center bg-no-repeat bg-cover md:bg-contain pt-32 px-4 pb-11 md:pt-36 lg:pt-52 lg:pb-20 lg:px-32 ">
      <h2 className="text-3xl md:text-5xl text-center text-primary mb-14 font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="font-medium text-gray-700 mb-2 hidden">
            Name
          </label>
          <input className={`appearance-none block w-full  text-gray-700 border ${formErrorState.name ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="name" type="text" name="name" value={formState.name} onChange={handleInputChange} placeholder="Name" />
          {formErrorState.name && <p className="text-red-500 text-xs italic">{formErrorState.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="hidden font-medium text-gray-700 mb-2">
            Email
          </label>
          <input type="email" placeholder="Email" id="email" name="email" value={formState.email} onChange={handleInputChange} className={`appearance-none border ${formErrorState.name ? 'border-red-500' : 'border-gray-200'} rounded w-full py-2 mb-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} />
          {formErrorState.email && <p className="text-red-500 text-xs italic">{formErrorState.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="hidden font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea id="message" placeholder="Message" name="message" value={formState.message} onChange={handleInputChange} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight {formErrorState.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:shadow-outline`} rows={5}></textarea>
          {formErrorState.message && <p className="text-red-500 text-xs italic">{formErrorState.message}</p>}
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

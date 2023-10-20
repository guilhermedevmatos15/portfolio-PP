import React, { useCallback } from 'react';

// * components

// * style
import './Contact.scss';

// * scripts

// * contexts

// * img

// * icons
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Contact = () => {
   const goToLink = useCallback((link) => {
      window.open(link);
   }, []);

   return (
      <section className="Contact" id="contato">
         <h2 className="title-section">Contato</h2>

         <div className="container-contacts">
            <div
               className="contact-option"
               onClick={(e) =>
                  goToLink('mailto:devguilhermeferreira@gmail.com')
               }
            >
               <AiOutlineMail className="contact-option-icon" />
               <p className="contact-option-name">Email</p>
               <p className="contact-option-value">devguilhermeferreira@gmail.com</p>
            </div>
            <div
               className="contact-option"
               onClick={(e) =>
                  goToLink('https://github.com/guilhermedevmatos15')
               }
            >
               <AiFillGithub className="contact-option-icon" />
               <p className="contact-option-name">Github</p>
               <p className="contact-option-value">@guilhermedevmatos15</p>
            </div>
            <div
               className="contact-option"
               onClick={(e) => goToLink('https://wa.me/+5537999819687')}
            >
               <AiOutlineWhatsApp className="contact-option-icon" />
               <p className="contact-option-name">Whatsapp</p>
               <p className="contact-option-value">(37) 99981-9687</p>
            </div>
         </div>
      </section>
   );
};

export default Contact;

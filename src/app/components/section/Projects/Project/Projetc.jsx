import React, { useState } from 'react';

// * components
import Modal from '../../../shared/Modal/Modal';

// * style
import './Project.scss';

// * scripts

// * contexts

// * img

// * icons

const Project = ({
   name,
   link,
   repositoryLink,
   date,
   type,
   about,
   image,
   lowImage,
}) => {
   const [openModal, setOpenModal] = useState(false);

   return (
      <>
         <section className="Project" onClick={(e) => setOpenModal(true)}>
            <div className="project-image">
               <img
                  className={`${lowImage && 'low-image'}`}
                  src={image}
                  alt={`project ${name}`}
               />
            </div>
         </section>

         {/* Modal */}
         <Modal open={openModal} setOpen={setOpenModal}>
            <div className="project-modal">
               <img
                  className={`${lowImage && 'low-image'}`}
                  src={image}
                  alt={`project ${name}`}
               />

               <div className="project-modal-interations">
                  <button className="btn" onClick={(e) => window.open(link)}>
                     Visitar projeto
                  </button>
                  <button
                     className="btn"
                     onClick={(e) => window.open(repositoryLink)}
                  >
                     Visitar repositório
                  </button>
               </div>

               <p className="project-modal-about">{about}</p>
               <span className="project-modal-date">{date}</span>
            </div>
         </Modal>
      </>
   );
};

export default Project;

import React from 'react'
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

import { SelectedPage } from '@/types/types';
import HText from '@/components/HText';
import image10 from "@/assets/10 - Cabdi Mahamoud.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void; 
}

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg border-2 border-gray-100 px-5 py-3 placeholder-black`;

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async(e:any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
      {/* HEADER */}
        <motion.div 
          className="md:w-3/5 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">CONTACT </span>US
          </HText>
          <p className="my-5">
            <b>Make a Difference Today:</b> Every dollar, every effort, and every voice matters in the fight for clean water access.Contact us to learn more.
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
              }}
          >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/myemail.com"
            method="POST"
          >
            <input 
              className={inputStyles}
              type="text"
              placeholder="NAME"
              {...register
                ("name", {
                  required:true,
                  maxLength:100,
                }
              )}
            />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 characters."}
                </p>
              )}
              <input 
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register
                  ("email", {
                    required:true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  }
                  )}
              />
                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "email" && "Invalid email address."}
                  </p>
                )}
                <textarea 
                  className={inputStyles}
                  rows={4}
                  cols={50}
                  placeholder="MESSAGE"
                  {...register
                    ("message", {
                      required:true,
                      maxLength:2000,
                    }
                  )}
                />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
          >
            <div>
              <img 
                className="w-full rounded-2xl"
                alt="contact-us-page-graphic"
                src={image10}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
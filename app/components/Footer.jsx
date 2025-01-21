import { assets } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Footer = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='mt-20'>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          deshmukhvipin111@gmail.com
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >© 2025 Vipin Deshmukh. All right reserved.</motion.p>
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' herf="https://www.instagram.com/vipindeshmukh111">Instagram</a></li>
          <li><a target='_blank' herf="https://www.linkedin.com/in/vipin-deshmukh-b9a5a9225">LinkedIn</a></li>
          <li><a target='_blank' herf="https://github.com/deshmukhvipin10">GitHub</a></li>
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}

export default Footer

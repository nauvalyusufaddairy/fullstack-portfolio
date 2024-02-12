'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'
import { MdSunny } from 'react-icons/md'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import styles from '../app/home.module.css'
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa'

import Image from 'next/image'
import deved from '../../public/gj.png'
import Link from 'next/link'
export default function Hero() {
  const { toggle, theme } = useContext(ThemeContext)
  const handleClick = () => {
    console.log('am hit')
    toggle()
  }
  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <p className=" font-burton text-xl font-bold">{'</nvl>'.toLowerCase()}</p>
        <ul className="flex items-center">
          <li onClick={() => handleClick()} className=" cursor-pointer text-2xl dark:text-yellow-500 text-slate-800 ">
            <AnimatePresence>
              {theme === 'dark' ? (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1, damping: 200, stiffness: 600 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}>
                  <MdSunny />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1, damping: 200, stiffness: 600 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}>
                  <BsFillMoonStarsFill />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center">
        <div className={` `}>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                opacity: 1,

                bounce: 0.4,
                duration: 0.6
              }
            }}
            className={` ${styles.grad} text-5xl py-2 text-transparent font-medium md:text-6xl`}>
            Nauval Yusuf Addairy
          </motion.h2>
        </div>

        <motion.h3
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              bounce: 1,
              duration: 0.6
            }
          }}
          className="text-2xl py-2 dark:text-white md:text-3xl">
          Fullstack Developer and Certified Cloud Engineer
        </motion.h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          As a seasoned freelancer, I specialize in crafting high-performance web applications with top-notch architectures. Join me, and lets make things
          happen!
        </p>
        <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <Link href={'https://github.com/nauvalyusufaddairy'}>
            <FaGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/nauval-yusuf-addairy/'}>
            <FaLinkedin />
          </Link>
          <Link href={'https://youtube.com'}>
            <FaYoutube />
          </Link>
        </div>
        <div className={`mx-auto  ${styles.animated_border}  w-[300px] h-80 relative overflow-hidden mt-20 md:h-96 md:w-96`}>
          <div className={`w-full h-full z-0 absolute top-0 ${styles.avatar} `}></div>
          <Image alt="deved" src={deved} layout="fill" objectFit="cover" className="z-10" />
          <div className="w-full h-full z-20  absolute top-0 "></div>
        </div>
      </div>
    </section>
  )
}

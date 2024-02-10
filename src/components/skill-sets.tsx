'use client'
import { motion } from 'framer-motion'
import { AiOutlineCloud } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { SiConsul } from 'react-icons/si'
import styles from '../app/home.module.css'
export default function SkillSets() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I specialize in creating powerful web applications using the <span className="text-teal-500">MERN</span> {'  '}stack and excel in{' '}
          <span className="text-teal-500">Cloud Development</span> {'  '}
          with certifications to prove it. Whether you are a small business or a large enterprise, my services offer a seamless user experience, secure
          infrastructure, and tailored solutions. From custom software development to optimizing databases and implementing e-commerce platforms, I deliver
          robust and efficient technology solutions. Lets elevate your digital presence together.
        </p>
      </div>
      <div className=" mt-16 ">
        <h3 className="text-3xl py-1 dark:text-white ">My Skill Sets</h3>

        <motion.div className="md:flex gap-10 no-underline">
          {/* skill 1 */}
          <motion.div
            initial={{ y: -500, opacity: 0 }}
            transition={{ duration: 1, bounce: 100, stiffness: 600 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center shadow-lg p-10 rounded-xl my-10 bg-white  dark:bg-slate-400/10 flex flex-col items-center flex-1">
            <AiOutlineCloud className="border-none w-[100px] h-[100px] font-bold text-gray-950  dark:text-white " />
            <h3 className="border-none text-lg font-medium pt-8 pb-2  text-gray-950  dark:text-white">Cloud Engineering</h3>
            <p className="py-2 border-none  text-gray-800/80 dark:text-white/60  ">
              Build your enterprise app to be scalable, secure, always up and running, even during peak traffic using cloud computing. Additionally, remove
              unnecessary costs when your system at idling state by leveraging serverless technology
            </p>
            <h4 className="py-4 text-teal-600 font-[500] border-none">Technologies I Use</h4>
            <p className=" text-gray-800/80  dark:text-white/60 border-none  py-1">Amazon Web Service</p>
            <p className="text-gray-800/80 dark:text-white/60 border-none   py-1">Firebase</p>
          </motion.div>
          {/* skill 2 */}
          <motion.div
            initial={{ opacity: 0, y: -400 }}
            transition={{ duration: 1, bounce: 100, stiffness: 600 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center shadow-lg p-10 rounded-xl my-10 bg-white  dark:bg-slate-400/10 flex flex-col items-center flex-1">
            <CgWebsite className="border-none w-[100px] h-[100px] font-bold  text-gray-950  dark:text-white " />
            <h3 className="border-none text-lg font-medium pt-8 pb-2   text-gray-950  dark:text-white"> Web Developing</h3>
            <p className="py-2 border-none  text-gray-800/80 dark:text-white/60 ">
              Do you have a project idea? I can develop your project from the front end to the back end. Lets talk !.
            </p>
            <h4 className="py-4 text-teal-600 font-[500] border-none">Technologies I Use</h4>
            <p className=" text-gray-800/80  dark:text-white/60 border-none  py-1">Reactjs</p>
            <p className=" text-gray-800/80  dark:text-white/60 border-none  py-1">Nextjs</p>
            <p className=" text-gray-800/80  dark:text-white/60 border-none py-1">Nodejs</p>
            <p className=" text-gray-800/80  dark:text-white/60 border-none py-1">Express.js</p>
            <p className=" text-gray-800/80  dark:text-white/60 border-none  py-1">PostgreSQL</p>
            <p className=" text-gray-800/80  dark:text-white/60 border-none py-1">MongoDB</p>
            <p className=" text-gray-800/80  dark:text-white/60 border-none  py-1">DynamoDB</p>
          </motion.div>
          {/* skill 3 */}
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1, bounce: 100, stiffness: 600 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center shadow-lg p-10 rounded-xl my-10 bg-white  dark:bg-slate-400/10 flex flex-col items-center flex-1">
            <SiConsul className="border-none w-[100px] h-[100px] font-bold  text-gray-950   dark:text-white " />
            <h3 className="border-none text-lg font-medium pt-8 pb-2   text-gray-950   dark:text-white"> Consulting</h3>
            <p className="py-2 border-none  text-gray-800/80 dark:text-white/60 ">
              Are you interested in feedback for your current project? I can give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-teal-600 font-[500] border-none">Communication tools I use</h4>
            <p className=" text-gray-800/80  dark:text-white/60 border-none  py-1">Google Meet</p>

            <p className=" text-gray-800/80  dark:text-white/60 border-none  py-1">Slack</p>
            <p className=" text-gray-800/80  dark:text-white/60 border-none py-1">TeamViewer</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

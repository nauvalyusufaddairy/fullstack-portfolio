import Image from 'next/image'
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'
export default function Projects() {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-gray-950 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and developer, I have done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design, programming and teaching.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className=" basis-1/3 flex-1 ">
          <Image alt="s" className=" w-full h-full rounded-lg object-cover" layout="responsive" src={web1} />
        </div>
        <div className="basis-1/3 flex-1">
          <Image className="w-full h-full rounded-lg object-cover" alt="w2" src={web2} />
        </div>
        <div className="basis-1/3 flex-1">
          <Image alt="web3" className="h-full w-full rounded-lg object-cover" src={web3} />
        </div>
        <div className="basis-1/3 flex-1">
          <Image className="w-full h-full rounded-lg object-cover" alt="sd" src={web4} />
        </div>
        <div className="basis-1/3 flex-1">
          <Image className="w-full h-full rounded-lg object-cover" alt="d" src={web5} />
        </div>

        <div className="basis-1/3 flex-1">
          <Image className="h-full w-full rounded-lg object-cover" alt="t" layout="responsive" src={web6} />
        </div>
      </div>
    </section>
  )
}

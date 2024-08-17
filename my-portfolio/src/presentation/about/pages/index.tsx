import _ from 'lodash'
import React from 'react'

import { MainLayout } from '@/core/components/layouts/main.layout'
import { Badge } from '../components/badge'

export const AboutMe = () => {
  //---------------------
  //   CONST
  //---------------------
  const toolsAndTech = ['React', 'NextJS', 'HTML', 'CSS', 'TailwindCSS', 'Express (Basic)', 'Git', 'Figma', 'JavaScript', 'TypeScript', 'ANTD', 'MUI']
  //---------------------
  //   RENDER
  //---------------------
  return (
    <MainLayout>
      <div className="mt-[200px] mb-[100px] max-w-[1440px] mx-auto">
        <div className="flex">
          <div className="rounded-[40px] overflow-hidden min-w-[300px] h-[300px]">
            <img src="/images/pic.jpg" alt="Pic" className="w-[300px] h-[300px] object-cover" />
          </div>
          <div className="ml-[50px] flex-grow">
            <div className="textNameAbout mobile:mr-[30px]">Peenchayakorn Tanakornpornsawas</div>
            <div className="mt-[20px] texttitleAbout mobile:mr-[20px]">
              I am studying as an undergraduate in College of Industrial Technology&lsquo; Electronic Engineering (Computer) at KMUTNB I had an
              internship as a Frontend Developer for 4 months&lsquo; always learning and developing myself.
            </div>
            <div className="mt-[20px] texttitleAbout mobile:mr-[20px]">
              My strength is opening my mind and willing to learn new things to achieve targets and objectives.
            </div>
          </div>
        </div>
        <div className="mt-[100px] grid gap-[20px] grid-cols-3">
          <div className="textA text-4xl text-pink-500">Education</div>
          <div className="bg-indigo-300 w-fit p-[5px] rounded-lg textA text-xl  ">2017-2019</div>
          <div className="bg-orange-300 w-fit p-[5px] rounded-lg textA text-xl  ">2019-Present</div>
        </div>
        <div className="mt-[30px] grid grid-cols-3 gap-[20px]">
          <div></div>
          <div>
            <div className="textA text-[19px]">Sriyapai School Chumphon</div>
            <div className="textA text-[19px]">Math-Sci Progrram</div>
          </div>
          <div>
            <div className="textA text-[19px]">College of Industrial Technology, Electronic Engineering (Computer)</div>
            <div className="textA text-[19px]">King Mongkut&apos;ss University of Technology North Bangkok</div>
          </div>
        </div>
        <div className="mt-[100px] grid grid-cols-3 gap-[20px]">
          <div className="textA text-4xl text-teal-500">Certificate</div>
          <div>
            <div className="textA text-2xl text-nowrap font-medium">Front-end Developer Internship at innovasive Co.,Ltd</div>
            <div className="border border-black rounded-[30px] mt-[50px] overflow-hidden">
              <img src="/images/certificate.jfif" alt="" className="object-cover" />
            </div>
          </div>
          <div>
            <div className="mt-[90px] ml-[20px] textA text-lg">Front-end Developer Internship at innovasive Co.,Ltd</div>
            <div className="ml-[20px] textA text-lg">
              - Learned to develop web applications. Manage UX/UI parts to meet the needs of the designer.
            </div>
            <div className="ml-[20px] textA text-lg">
              - Learned how to work as a team with Backend Developer, UX/UI Designer, practice responsibility in one&apos;s own work.
            </div>
            <div className="ml-[20px] textA text-lg">- Learned integration api to receive data. or send data back to the server.</div>
          </div>
        </div>
        <div className="mt-[100px] grid grid-cols-3 gap-[20px]">
          <div className="textA text-4xl text-yellow-500 ">Tools & Tech</div>
          <div className="mt-[50px] grid grid-cols-3 gap-6 text-nowrap">
            {_.map(toolsAndTech, (item, i) => (
              <div key={`item${i}`}>
                <Badge title={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

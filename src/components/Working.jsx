import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Decor, Fiverr, Hopmercy } from "../components/index";

const Working = () => {

     return (
          <>
               <div className="w-full bg-gradient-to-b from-gray-800 to-black py-10">
                    <div className="h-full mx-auto flex flex-col justify-center w-[90%] lg:w-4/5 text-white">
                         <div>
                              <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Work Experience</p>
                              <p className="py-6">These are the companies I`ve  worked with</p>
                         </div>
                    </div>
                    <VerticalTimeline className="mb-5">
                         <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: 'teal', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid teal' }} date="2019 - 2020" iconStyle={{ background: 'brown', color: '#fff' }}
                              icon={<Fiverr />}>
                              <h3 className="vertical-timeline-element-title">Web Designer</h3>
                              <h4 className="vertical-timeline-element-subtitle">Freelancer</h4>
                              <p>As a freelance web developer on Fiverr, I offer a wide range of web development services to clients worldwide. My work includes creating websites, developing web applications, and providing various web-related solutions tailored to meet client needs.</p>
                         </VerticalTimelineElement>
                         <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: 'indigo', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  indigo' }} date="2022 - present" icon={<Decor />}>
                              <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                              <h4 className="vertical-timeline-element-subtitle">Dimmy Decor Events</h4>
                              <p>Dimmy décor event management knows how to best structure your  events(wedding), which will have the biggest impact on your guests. Having an organized wedding means that everything will run smoothly, which leaves you having to worryless.</p>
                         </VerticalTimelineElement>
                         <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: 'rgb(0, 163, 108)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(0, 163, 108)' }} date="2023 - present" icon={<Hopmercy />}>
                              <h3 className="vertical-timeline-element-title">Frontend Dveloper</h3>
                              <h4 className="vertical-timeline-element-subtitle">HOP Mercy</h4>
                              <p>House of Prophet is a dedicated community service initiative that brings together young prophets to foster spiritual growth, mentorship, and community engagement. Whose mission is to nurture the next generation of prophetic voices through training, fellowship, and active service.</p>
                         </VerticalTimelineElement>
                    </VerticalTimeline>
               </div>
          </>
     )
}

export default Working;
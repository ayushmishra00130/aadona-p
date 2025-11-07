import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import Pinakii from "../../assets/Pinaki_Chatterjee.avif";
import Senthil from "../../assets/Senthil_VP_Kumar.avif";
import Govind from "../../assets/Govind_Madhav.avif";
import Chandan from "../../assets/Chandan_Sharma.avif";

const leaders = [
  {
    name: "Pinakii Chatterjje",
    title: "CEO and Founder",
    bio: `Pinakii Chatterjje has a long track record of establishing as well as expanding new brands in India. Holding a dual MBA degree and numerous technical certifications, he comes as a veteran in IT network technology space and has successfully played sales leadership roles with leading organisations. Prior to setting up his own venture AADONA COMMUNCIATION he had played key roles in setting up new brands across India in his stint spanning over 20 years and created multiple new opportunities for IT channel partners. Pinakii in his spare time loves to cook, drive and read books.`,
    linkedin: "https://in.linkedin.com/in/pinakiichatterjje",
    photo: Pinakii,
  },
  {
    name: "Senthil VP Kumar",
    title: "Regional Sales Director and Co-Founder",
    bio: `VP Senthil Kumar has a great track record of working from the ground up and creating successful brands in India, right from his first assignment in 1997 he has always played a key strategic role in creating and nurturing brands. Senthil has a BSc degree in Physics and other various technical certifications. He is an award winning veteran in IT network technology space and has successfully played key roles with leading SI, distributors and brands. He is known in the Industry for his outstanding attention to detail, business ethics and integrity. At AADONA he provides strategic sales direction with use of his sound technical understanding and sales acumen. With over twenty years of experience selling IT technology products he is an invaluable asset to AADONA. Senthil in his spare time loves yoga, reading books, travelling and trying exotic food.`,
    linkedin: "https://www.linkedin.com/in/senthil-kumar-a5283275/",
    photo: Senthil,
  },
  {
    name: "Govind Madhav",
    title: "Vice President Product Management and Founder",
    bio: `Govind is a technology enthusiast and brings with him a vast pool of experience in the field sales for technology vendors. He holds a B.Tech from the Department of Computer Science and is acquainted with technology forefront. He has served Presales role for global technology brands in Indian subcontinent, penetrating the industry for business expansion by working extensively with channel partners. Govind also played an instrumental role in product management and helped the organizations he was associated with, to maximize their sales revenues via offering best in class product related services including after sales services. Govind’s key expertise centers around Wireless, Networking, Security and Storage solutions. Govind enjoys reading, listening to music and exploring new destinations.`,
    linkedin: "https://www.linkedin.com/in/govind-madhav-426a0957/",
    photo: Govind,
  },
  {
    name: "Chandan Sharma",
    title: "Chief Legal Officer",
    bio: `Our Chief Legal Advisor Dr Chandan Sharma comes with a multidisciplinary background having strong hold on corporate, Intellectual property, regulatory compliance, consumer, company law, Technology and Business Operations. A Masters in Law with a specialization in Corporate and Security Laws, Chandan also holds a Doctorate from Tilka Manjhi Bhagalpur University. An avid supporter of Right to Information Act (RTI), Chandan has been using this tool as a medium to bring a change. Regulatory issues related to Cloud Computing is also one of his interest areas, and he has contributed his views on this topics at multiple forums including many Government bodies. In his spare time Chandan loves to help people through an NGO with whom he is associated and he is passionate about latest technologies.`,
    linkedin: "https://in.linkedin.com/in/chandan-sharma-a26b1a10",
    photo: Chandan,
  },
];

const LeadershipTeam = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Leadership Team
            </h1>
          </div>
        </div>

        {/* Leadership Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col gap-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <img
                src={leader.photo}
                alt={leader.name}
                className="w-36 h-36 rounded-full object-contain flex-shrink-0 border-2 border-gray-200 p-1"
              />
              <div className="flex-1">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                >
                  {leader.name}
                </a>
                <h4 className="text-gray-600 mt-1 text-lg font-medium">
                  {leader.title}
                </h4>
                <p className="mt-3 text-gray-700 leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LeadershipTeam;

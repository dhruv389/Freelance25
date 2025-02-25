import React from 'react';
import { motion } from 'framer-motion';
import {BorderBeam} from './magicui/border-beam';

const Footer = () => {
  const categories = [
    'Graphics & Design', 'Digital Marketing', 'Writing & Translation',
    'Video & Animation', 'Music & Audio', 'Programming & Tech',
    'AI Services', 'Consulting', 'Data', 'Business',
    'Personal Growth & Hobbies', 'Photography', 'Finance', 'End-to-End Projects'
  ];

  const forClients = [
    'How Fiverr Works', 'Customer Success Stories', 'Trust & Safety',
    'Quality Guide', 'Fiverr Learn', 'Online Courses', 'Fiverr Guides', 'Fiverr Answers'
  ];

  const forFreelancers = [
    'Become a Fiverr Freelancer', 'Become an Agency', 'Freelancer Equity Program',
    'Kickstart', 'Community Hub', 'Forum', 'Events'
  ];

  const businessSolutions = [
    'Fiverr Pro', 'Project Management Service', 'ClearVoice', 'Content Marketing',
    'Working Not Working', 'Creative Talent', 'AutoDS', 'Dropshipping Tool',
    'Fiverr Logo Maker', 'Contact Sales', 'Fiverr Go'
  ];

  const company = [
    'About Fiverr', 'Help & Support', 'Social Impact', 'Careers',
    'Terms of Service', 'Privacy Policy', 'Partnerships', 'Creator Network',
    'Affiliates', 'Invite a Friend', 'Press & News', 'Investor Relations'
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="bg-black  shadow-top shadow-green-400 relative  mt-10 text-white py-12 px-4 md:px-8 lg:px-16"
    >
      <div className="container mx-auto   grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Categories</h3>
          <motion.ul variants={listItemVariants} initial="hidden" animate="visible">
            {categories.map((item, index) => (
              <motion.li key={index} variants={listItemVariants} className="text-sm mb-3 hover:text-gray-300 cursor-pointer">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">For Clients</h3>
          <motion.ul variants={listItemVariants} initial="hidden" animate="visible">
            {forClients.map((item, index) => (
              <motion.li key={index} variants={listItemVariants} className="text-sm mb-3 hover:text-gray-300 cursor-pointer">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">For Freelancers</h3>
          <motion.ul variants={listItemVariants} initial="hidden" animate="visible">
            {forFreelancers.map((item, index) => (
              <motion.li key={index} variants={listItemVariants} className="text-sm mb-3 hover:text-gray-300 cursor-pointer">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Business Solutions</h3>
          <motion.ul variants={listItemVariants} initial="hidden" animate="visible">
            {businessSolutions.map((item, index) => (
              <motion.li key={index} variants={listItemVariants} className="text-sm mb-3  hover:text-gray-300 cursor-pointer">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Company</h3>
          <motion.ul variants={listItemVariants} initial="hidden" animate="visible">
            {company.map((item, index) => (
              <motion.li key={index} variants={listItemVariants} className="text-sm mb-3 hover:text-gray-300 cursor-pointer">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      
    </motion.footer>
  );
};

export default Footer;
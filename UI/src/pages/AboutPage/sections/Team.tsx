import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    bio: 'Former dairy industry executive with 15 years of experience',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    bio: 'Blockchain expert with multiple successful projects',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    bio: 'Supply chain optimization specialist',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    bio: 'Full-stack developer with IoT expertise',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

export function Team() {
  return (
    <SectionContainer id="team" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Team</h2>
        <p className="mt-4 text-xl text-gray-600">
          Meet the experts behind BlockBasket
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 sm:grid-cols-2">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="relative group">
              <div className="relative h-40 w-40 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full object-cover w-full h-full"
                />
                <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.twitter} className="text-gray-400 hover:text-blue-500">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-700">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={member.social.github} className="text-gray-400 hover:text-gray-900">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
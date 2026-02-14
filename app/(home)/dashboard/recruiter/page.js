'use client';

import React, { useState } from 'react';
import { useAuth } from '@/libs/context/AuthContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { 
  Briefcase, 
  MapPin, 
  Star, 
  Search,
  Filter,
  ChevronDown,
  Clock,
  DollarSign,
  MessageSquare
} from 'lucide-react';

export default function RecruiterDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');

  // Mock freelancer data - replace with real data from Firestore
  const freelancers = [
    {
      id: 1,
      name: 'Adewale Johnson',
      title: 'Full-Stack Developer',
      location: 'Lagos, Nigeria',
      rating: 4.9,
      reviews: 127,
      hourlyRate: '₦15,000',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      availability: 'Available',
      completedProjects: 156,
      profileImage: null,
      bio: 'Experienced developer specializing in modern web applications with 5+ years in the industry.'
    },
    {
      id: 2,
      name: 'Chioma Okafor',
      title: 'UI/UX Designer',
      location: 'Abuja, Nigeria',
      rating: 5.0,
      reviews: 93,
      hourlyRate: '₦12,000',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      availability: 'Available',
      completedProjects: 89,
      profileImage: null,
      bio: 'Creative designer focused on user-centered design and beautiful interfaces.'
    },
    {
      id: 3,
      name: 'Emmanuel Eze',
      title: 'Mobile App Developer',
      location: 'Port Harcourt, Nigeria',
      rating: 4.8,
      reviews: 65,
      hourlyRate: '₦18,000',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      availability: 'Busy',
      completedProjects: 72,
      profileImage: null,
      bio: 'Mobile development expert with a passion for creating seamless user experiences.'
    },
    {
      id: 4,
      name: 'Blessing Adeleke',
      title: 'Content Writer & SEO Specialist',
      location: 'Ibadan, Nigeria',
      rating: 4.9,
      reviews: 112,
      hourlyRate: '₦8,000',
      skills: ['SEO', 'Content Strategy', 'Copywriting', 'Technical Writing'],
      availability: 'Available',
      completedProjects: 243,
      profileImage: null,
      bio: 'Versatile writer creating engaging content that ranks and converts.'
    },
    {
      id: 5,
      name: 'Oluwaseun Balogun',
      title: 'Graphic Designer',
      location: 'Lagos, Nigeria',
      rating: 4.7,
      reviews: 78,
      hourlyRate: '₦10,000',
      skills: ['Photoshop', 'Illustrator', 'Brand Identity', 'Print Design'],
      availability: 'Available',
      completedProjects: 134,
      profileImage: null,
      bio: 'Creative designer bringing brands to life through compelling visual storytelling.'
    },
    {
      id: 6,
      name: 'Fatima Abubakar',
      title: 'Data Analyst',
      location: 'Kano, Nigeria',
      rating: 4.8,
      reviews: 56,
      hourlyRate: '₦14,000',
      skills: ['Python', 'SQL', 'Tableau', 'Machine Learning'],
      availability: 'Available',
      completedProjects: 67,
      profileImage: null,
      bio: 'Data-driven analyst turning complex data into actionable business insights.'
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Writing', 'Marketing', 'Data'];
  const experienceLevels = ['All', 'Beginner', 'Intermediate', 'Expert'];

  const handleContactFreelancer = (freelancerId) => {
    console.log('Contact freelancer:', freelancerId);
    // Implement contact functionality
  };

  const handleViewProfile = (freelancerId) => {
    router.push(`/freelancer/${freelancerId}`);
  };

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-black font-['Outfit',sans-serif]">
                gig<span className="text-green-500">9ja</span>
              </h1>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Posted Jobs Button */}
              <button
                onClick={() => router.push('/dashboard/recruiter/jobs')}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-black border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                <Briefcase className="w-4 h-4" />
                <span>My Posted Jobs</span>
              </button>

              {/* Profile Image */}
              <button 
                onClick={() => router.push('/dashboard/settings')}
                className="relative w-10 h-10 rounded-full bg-gray-200 border-2 border-gray-300 overflow-hidden hover:border-green-500 transition-colors duration-200"
              >
                {user?.photoURL ? (
                  <Image 
                    src={user.photoURL} 
                    alt={user.displayName || 'Profile'}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 font-semibold">
                    {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'R'}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-2 font-['Outfit',sans-serif]">
            Welcome back, {user?.displayName?.split(' ')[0] || 'there'}!
          </h2>
          <p className="text-gray-600">
            Find the perfect freelancer for your next project
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search freelancers by name, skills, or expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 text-black">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 border border-gray-300 rounded-md text-sm bg-white cursor-pointer text-black hover:border-black focus:outline-none focus:border-black transition-colors duration-200"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Experience Filter */}
            <div className="relative">
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 border border-gray-300 rounded-md text-sm bg-white cursor-pointer hover:border-black focus:outline-none focus:border-black transition-colors duration-200"
              >
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level === 'All' ? 'All Experience' : level}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-md text-sm hover:border-black transition-colors duration-200">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </div>

        {/* Freelancers List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-black">
              Available Freelancers ({freelancers.length})
            </h3>
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Sort by: Best Match</option>
              <option>Highest Rated</option>
              <option>Most Reviews</option>
              <option>Lowest Rate</option>
              <option>Highest Rate</option>
            </select>
          </div>

          {/* Freelancer Cards */}
          {freelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold">
                    {freelancer.name.charAt(0)}
                  </div>
                </div>

                {/* Main Info */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-1">
                        {freelancer.name}
                      </h4>
                      <p className="text-gray-700 font-medium mb-2">
                        {freelancer.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{freelancer.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-black">{freelancer.rating}</span>
                          <span>({freelancer.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{freelancer.completedProjects} projects</span>
                        </div>
                      </div>
                    </div>

                    {/* Rate and Availability */}
                    <div className="text-right md:text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <span className="text-2xl font-bold text-black">
                          {freelancer.hourlyRate}
                        </span>
                        <span className="text-gray-600 text-sm">/hr</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          freelancer.availability === 'Available' 
                            ? 'bg-green-500' 
                            : 'bg-yellow-500'
                        }`} />
                        <span className={`text-sm font-medium ${
                          freelancer.availability === 'Available'
                            ? 'text-green-600'
                            : 'text-yellow-600'
                        }`}>
                          {freelancer.availability}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {freelancer.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {freelancer.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleViewProfile(freelancer.id)}
                      className="px-5 py-2.5 bg-white border border-gray-300 text-black text-sm font-medium rounded-md hover:bg-gray-50 hover:border-black transition-all duration-200"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => handleContactFreelancer(freelancer.id)}
                      className="px-5 py-2.5 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 border border-gray-300 text-black font-medium rounded-md hover:bg-gray-50 hover:border-black transition-all duration-200">
            Load More Freelancers
          </button>
        </div>
      </main>
    </div>
    <Navbar Cpath={"/dashboard/recruiter"}/>

    </>
  );
}
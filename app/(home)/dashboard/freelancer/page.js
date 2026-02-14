'use client';

import React, { useState } from 'react';
import { useAuth } from '@/libs/context/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  Briefcase, 
  Search,
  Bell,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowUpRight,
  Filter,
  Calendar,
  MessageSquare,
  Star,
  Award
} from 'lucide-react';
import BottomNavIsland from '@/components/Navbar';

export default function FreelancerDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with real Firestore data
  const stats = {
    activeProposals: 3,
    pendingReviews: 2,
    totalEarnings: 450000,
    successRate: 96,
    responseTime: '< 2 hours'
  };

  const availableJobs = [
    {
      id: 1,
      title: 'E-commerce Platform Development',
      company: 'TechStart Nigeria',
      budget: { min: 500000, max: 800000 },
      duration: '3-4 months',
      posted: '2 hours ago',
      proposals: 12,
      skills: ['React', 'Node.js', 'MongoDB', 'Payment Integration'],
      description: 'Looking for an experienced full-stack developer to build a modern e-commerce platform with payment gateway integration, inventory management, and admin dashboard.',
      urgency: 'high',
      verified: true
    },
    {
      id: 2,
      title: 'Mobile App UI/UX Redesign',
      company: 'FinTech Solutions',
      budget: { min: 200000, max: 350000 },
      duration: '6-8 weeks',
      posted: '5 hours ago',
      proposals: 8,
      skills: ['Figma', 'UI Design', 'Mobile Design', 'Prototyping'],
      description: 'Redesign our existing mobile banking app with focus on improved user experience and modern aesthetics. Must have fintech experience.',
      urgency: 'medium',
      verified: true
    },
    {
      id: 3,
      title: 'Content Writing for Tech Blog',
      company: 'Digital Media Hub',
      budget: { min: 80000, max: 120000 },
      duration: '1-2 months',
      posted: '1 day ago',
      proposals: 24,
      skills: ['Content Writing', 'SEO', 'Technical Writing', 'Research'],
      description: 'Need a skilled writer to create engaging technical content for our tech blog. 8-10 articles per month on software development and tech trends.',
      urgency: 'low',
      verified: false
    },
    {
      id: 4,
      title: 'Brand Identity & Logo Design',
      company: 'StartUp Ventures',
      budget: { min: 150000, max: 250000 },
      duration: '3-4 weeks',
      posted: '3 hours ago',
      proposals: 15,
      skills: ['Brand Design', 'Logo Design', 'Adobe Illustrator', 'Style Guide'],
      description: 'Creating brand identity for a new fintech startup. Need complete brand package including logo, color palette, typography, and brand guidelines.',
      urgency: 'high',
      verified: true
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard',
      company: 'Analytics Pro',
      budget: { min: 300000, max: 450000 },
      duration: '2-3 months',
      posted: '6 hours ago',
      proposals: 6,
      skills: ['Python', 'Data Visualization', 'SQL', 'Dashboard Design'],
      description: 'Build an interactive data analytics dashboard for business intelligence. Must have experience with large datasets and real-time data processing.',
      urgency: 'medium',
      verified: true
    }
  ];

  const recentActivity = [
    { type: 'proposal', text: 'Your proposal for "Website Redesign" was viewed', time: '2 hours ago' },
    { type: 'message', text: 'New message from TechCorp Ltd', time: '5 hours ago' },
    { type: 'success', text: 'Project "Mobile App" completed successfully', time: '1 day ago' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'high': return 'bg-red-50 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-blue-50 text-blue-700 border-blue-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50 pb-15">
      {/* Fixed Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-black font-['Outfit',sans-serif]">
              gig<span className="text-green-500">9ja</span>
            </h1>
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* My Applications Link */}
            <button
              onClick={() => router.push('/dashboard/freelancer/applications')}
              className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>My Applications</span>
            </button>

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-black transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <button 
              onClick={() => router.push('/dashboard/settings')}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold hover:shadow-lg transition-shadow"
            >
              {user?.photoURL ? (
                <Image 
                  src={user.photoURL} 
                  alt={user.displayName || 'Profile'}
                  fill
                  className="object-cover rounded-full"
                />
              ) : (
                <span className="text-sm">
                  {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'F'}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content - with top padding for fixed nav */}
      <main className="pt-16">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-br from-black to-gray-900 text-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Welcome Text */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 font-['Outfit',sans-serif]">
                  Welcome back, {user?.displayName?.split(' ')[0] || 'there'}! 👋
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  You have {availableJobs.length} new opportunities waiting for you
                </p>
              </div>

              {/* Quick Action Button */}
              <button className="self-start lg:self-auto px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors shadow-lg">
                Complete Your Profile
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  +12%
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-black mb-1">
                {formatCurrency(stats.totalEarnings)}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Total Earnings</div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-black mb-1">
                {stats.activeProposals}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Active Proposals</div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-black mb-1">
                {stats.successRate}%
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Success Rate</div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-black mb-1">
                {stats.responseTime}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Response Time</div>
            </div>

            {/* Stat Card 5 */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <Award className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-black mb-1">
                {stats.pendingReviews}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Pending Reviews</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Content - Available Jobs */}
            <div className="lg:col-span-2">
              {/* Search and Filter */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search jobs by title, skills, or company..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all"
                    />
                  </div>
                  <button className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    <Filter className="w-4 h-4" />
                    <span className="hidden sm:inline">Filters</span>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-black">
                    Available Jobs <span className="text-gray-400">({availableJobs.length})</span>
                  </h3>
                  <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black">
                    <option>Most Recent</option>
                    <option>Highest Budget</option>
                    <option>Best Match</option>
                    <option>Fewest Proposals</option>
                  </select>
                </div>
              </div>

              {/* Job Cards */}
              <div className="space-y-4">
                {availableJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-5 sm:p-6">
                      {/* Job Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                        <div className="flex-grow">
                          <div className="flex items-start gap-3 mb-2">
                            <h4 className="text-lg sm:text-xl font-semibold text-black group-hover:text-green-600 transition-colors line-clamp-1">
                              {job.title}
                            </h4>
                            {job.verified && (
                              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              Posted {job.posted}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {job.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3.5 h-3.5" />
                              {job.proposals} proposals
                            </span>
                          </div>
                        </div>

                        {/* Urgency Badge */}
                        <span className={`self-start px-3 py-1 text-xs font-medium rounded-full border ${getUrgencyColor(job.urgency)}`}>
                          {job.urgency.charAt(0).toUpperCase() + job.urgency.slice(1)} Priority
                        </span>
                      </div>

                      {/* Job Description */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Budget and CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
                        <div className="flex items-baseline gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-lg font-bold text-black">
                            {formatCurrency(job.budget.min)}
                          </span>
                          <span className="text-sm text-gray-500">
                            - {formatCurrency(job.budget.max)}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <button className="flex-1 sm:flex-none px-4 py-2.5 bg-white border border-gray-300 text-black text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-black transition-all">
                            View Details
                          </button>
                          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors group">
                            <span>Apply Now</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-6 text-center">
                <button className="px-6 py-3 bg-white border border-gray-300 text-black font-medium rounded-lg hover:bg-gray-50 hover:border-black transition-all">
                  Load More Jobs
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        activity.type === 'success' ? 'bg-green-500' :
                        activity.type === 'message' ? 'bg-blue-500' :
                        'bg-yellow-500'
                      }`} />
                      <div>
                        <p className="text-sm text-gray-700 mb-1">{activity.text}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Completion */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  Complete Your Profile
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  A complete profile gets 3x more proposals accepted
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Profile Strength</span>
                    <span className="font-semibold text-black">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <button className="w-full px-4 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                  Complete Now
                </button>
              </div>

              {/* Quick Tips */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-black mb-4">
                  💡 Quick Tips
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Apply within 24 hours for better chances</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Personalize each proposal</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Showcase relevant portfolio work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <BottomNavIsland Cpath={"/dashboard/freelancer"}/>
    </>
  );
}
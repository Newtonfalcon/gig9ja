'use client';

import React, { useState } from 'react';
import { useAuth } from '@/libs/context/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  Briefcase,
  DollarSign,
  Calendar,
  MapPin,
  FileText,
  Tag,
  Clock,
  AlertCircle,
  CheckCircle,
  X,
  Plus,
  Info
} from 'lucide-react';
import BottomNavIsland from '@/components/Navbar';

export default function CreatePostPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [skillInput, setSkillInput] = useState('');
  
  // Determine if user is recruiter or freelancer
  const isRecruiter = user?.userRole === 'recruiter';
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    skills: [],
    budgetMin: '',
    budgetMax: '',
    duration: '',
    urgency: 'medium',
    location: '',
    workType: 'remote',
    experienceLevel: 'intermediate'
  });

  const [errors, setErrors] = useState({});

  // Categories for both job postings and gig services
  const categories = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Graphic Design',
    'Content Writing',
    'SEO & Marketing',
    'Data Science',
    'Video Editing',
    'Photography',
    'Virtual Assistant',
    'Other'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low Priority', description: 'Flexible timeline' },
    { value: 'medium', label: 'Medium Priority', description: 'Standard timeline' },
    { value: 'high', label: 'High Priority', description: 'Urgent, quick turnaround' }
  ];

  const experienceLevels = [
    { value: 'beginner', label: 'Beginner', description: '0-2 years experience' },
    { value: 'intermediate', label: 'Intermediate', description: '2-5 years experience' },
    { value: 'expert', label: 'Expert', description: '5+ years experience' }
  ];

  const workTypes = [
    { value: 'remote', label: 'Remote', icon: '🌍' },
    { value: 'onsite', label: 'On-site', icon: '🏢' },
    { value: 'hybrid', label: 'Hybrid', icon: '🔄' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    const skill = skillInput.trim();
    if (skill && !formData.skills.includes(skill) && formData.skills.length < 10) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
      setSkillInput('');
      if (errors.skills) {
        setErrors(prev => ({ ...prev, skills: '' }));
      }
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 10) {
      newErrors.title = 'Title must be at least 10 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'Description must be at least 50 characters';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (formData.skills.length === 0) {
      newErrors.skills = 'Add at least one skill';
    }

    if (!formData.budgetMin || !formData.budgetMax) {
      newErrors.budget = 'Budget range is required';
    } else if (parseInt(formData.budgetMin) >= parseInt(formData.budgetMax)) {
      newErrors.budget = 'Maximum budget must be greater than minimum';
    }

    if (!formData.duration.trim()) {
      newErrors.duration = 'Duration is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.error-field');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setLoading(true);

    try {
      // TODO: Add your Firebase logic here
      console.log('Form data to submit:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect after successful submission
      if (isRecruiter) {
        router.push('/dashboard/recruiter/jobs');
      } else {
        router.push('/dashboard/freelancer/services');
      }
    } catch (error) {
      console.error('Error submitting:', error);
      setErrors({ submit: 'Failed to submit. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (isRecruiter) {
      router.push('/dashboard/recruiter');
    } else {
      router.push('/dashboard/freelancer');
    }
  };

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Fixed Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-black font-['Outfit',sans-serif]">
              gig<span className="text-green-500">9ja</span>
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleCancel}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={() => router.push('/dashboard/settings')}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold"
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
                  {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3 font-['Outfit',sans-serif]">
              {isRecruiter ? 'Post a New Job' : 'Create Your Service'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {isRecruiter 
                ? 'Fill in the details below to post your job opportunity and connect with talented freelancers.'
                : 'Showcase your skills and services to attract potential clients.'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information Section */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Basic Information</h3>
                  <p className="text-sm text-gray-500">The main details of your {isRecruiter ? 'job' : 'service'}</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-black mb-2">
                    {isRecruiter ? 'Job Title' : 'Service Title'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder={isRecruiter ? "e.g., Senior React Developer Needed" : "e.g., Professional Logo Design Services"}
                    className={`w-full px-4 py-3 border ${errors.title ? 'border-red-500 error-field' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all`}
                    disabled={loading}
                  />
                  {errors.title && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.title}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.title.length}/100 characters • Be specific and descriptive
                  </p>
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-black mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.category ? 'border-red-500 error-field' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all`}
                    disabled={loading}
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.category}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-black mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="8"
                    placeholder={isRecruiter 
                      ? "Describe the job requirements, responsibilities, and what you're looking for in detail..."
                      : "Describe your service, what you offer, your process, and what makes you stand out..."}
                    className={`w-full px-4 py-3 border ${errors.description ? 'border-red-500 error-field' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all resize-none`}
                    disabled={loading}
                  />
                  {errors.description && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.description}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.description.length}/2000 characters • Minimum 50 characters
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-black mb-2">
                    Required Skills <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      id="skills"
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleAddSkill(e);
                        }
                      }}
                      placeholder="Type a skill and press Enter"
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all"
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={handleAddSkill}
                      className="px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
                      disabled={loading}
                    >
                      <Plus className="w-4 h-4" />
                      <span className="hidden sm:inline">Add</span>
                    </button>
                  </div>

                  {/* Skills Tags */}
                  {formData.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {formData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 text-black rounded-lg text-sm border border-gray-200"
                        >
                          <Tag className="w-3.5 h-3.5" />
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="text-gray-500 hover:text-red-500 transition-colors"
                            disabled={loading}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  {errors.skills && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1 error-field">
                      <AlertCircle className="w-3 h-3" />
                      {errors.skills}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.skills.length}/10 skills added
                  </p>
                </div>
              </div>
            </div>

            {/* Budget and Timeline Section */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Budget & Timeline</h3>
                  <p className="text-sm text-gray-500">Set your budget range and project duration</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Budget Range */}
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Budget Range (₦) <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        name="budgetMin"
                        type="number"
                        value={formData.budgetMin}
                        onChange={handleChange}
                        placeholder="Min"
                        className={`w-full px-4 py-3 border ${errors.budget ? 'border-red-500 error-field' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all`}
                        disabled={loading}
                        min="0"
                      />
                      <p className="text-xs text-gray-500 mt-1">Minimum</p>
                    </div>
                    <div>
                      <input
                        name="budgetMax"
                        type="number"
                        value={formData.budgetMax}
                        onChange={handleChange}
                        placeholder="Max"
                        className={`w-full px-4 py-3 border ${errors.budget ? 'border-red-500' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all`}
                        disabled={loading}
                        min="0"
                      />
                      <p className="text-xs text-gray-500 mt-1">Maximum</p>
                    </div>
                  </div>
                  {errors.budget && (
                    <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.budget}
                    </p>
                  )}
                </div>

                {/* Duration */}
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-black mb-2">
                    Duration <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="duration"
                    name="duration"
                    type="text"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g., 2-3 months, 4 weeks, 1 month"
                    className={`w-full px-4 py-3 border ${errors.duration ? 'border-red-500 error-field' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all`}
                    disabled={loading}
                  />
                  {errors.duration && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.duration}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">How long will this take?</p>
                </div>
              </div>

              {/* Urgency Level */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-black mb-3">
                  Priority Level <span className="text-red-500">*</span>
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {urgencyLevels.map((level) => (
                    <label
                      key={level.value}
                      className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.urgency === level.value
                          ? 'border-black bg-gray-50'
                          : 'border-gray-200 hover:border-gray-300'
                      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <input
                        type="radio"
                        name="urgency"
                        value={level.value}
                        checked={formData.urgency === level.value}
                        onChange={handleChange}
                        className="sr-only"
                        disabled={loading}
                      />
                      <span className="font-semibold text-black text-sm mb-1">{level.label}</span>
                      <span className="text-xs text-gray-600">{level.description}</span>
                      {formData.urgency === level.value && (
                        <CheckCircle className="absolute top-3 right-3 w-5 h-5 text-green-600" />
                      )}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Details Section */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Additional Details</h3>
                  <p className="text-sm text-gray-500">Location and work preferences</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-black mb-2">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Lagos, Nigeria or Remote"
                    className={`w-full px-4 py-3 border ${errors.location ? 'border-red-500 error-field' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all`}
                    disabled={loading}
                  />
                  {errors.location && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.location}
                    </p>
                  )}
                </div>

                {/* Work Type */}
                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Work Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {workTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`relative flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.workType === type.value
                            ? 'border-black bg-gray-50'
                            : 'border-gray-200 hover:border-gray-300'
                        } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <input
                          type="radio"
                          name="workType"
                          value={type.value}
                          checked={formData.workType === type.value}
                          onChange={handleChange}
                          className="sr-only"
                          disabled={loading}
                        />
                        <span className="text-2xl mb-2">{type.icon}</span>
                        <span className="font-medium text-black text-sm">{type.label}</span>
                        {formData.workType === type.value && (
                          <CheckCircle className="absolute top-2 right-2 w-4 h-4 text-green-600" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Experience Level Required <span className="text-red-500">*</span>
                  </label>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {experienceLevels.map((level) => (
                      <label
                        key={level.value}
                        className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.experienceLevel === level.value
                            ? 'border-black bg-gray-50'
                            : 'border-gray-200 hover:border-gray-300'
                        } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <input
                          type="radio"
                          name="experienceLevel"
                          value={level.value}
                          checked={formData.experienceLevel === level.value}
                          onChange={handleChange}
                          className="sr-only"
                          disabled={loading}
                        />
                        <span className="font-semibold text-black text-sm mb-1">{level.label}</span>
                        <span className="text-xs text-gray-600">{level.description}</span>
                        {formData.experienceLevel === level.value && (
                          <CheckCircle className="absolute top-3 right-3 w-5 h-5 text-green-600" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.submit}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 px-6 py-4 border border-gray-300 text-black font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Publishing...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>{isRecruiter ? 'Post Job' : 'Publish Service'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">Before you submit</h4>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>• Make sure all required fields are filled out completely</li>
                    <li>• Double-check your budget and timeline are realistic</li>
                    <li>• Review your description for clarity and detail</li>
                    <li>• {isRecruiter ? 'Your job will be visible to all freelancers immediately' : 'Your service will be reviewed before going live'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <BottomNavIsland Cpath={"/dashboard/post"}/>
    </>
  );
}
'use client'
import React, { useState } from 'react';
import axios from 'axios';

export default function UserProfile() {
  const [coverLetterOption, setCoverLetterOption] = useState<'type' | 'upload'>('type');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    resume: null,
    coverLetter: null,
    typedCoverLetter: '',
    linkedIn: '',
    portfolio: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, [name]: file });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    const payload = new FormData();
    payload.append('firstName', formData.firstName);
    payload.append('lastName', formData.lastName);
    payload.append('email', formData.email);
    payload.append('phoneNumber', formData.phoneNumber);
    if (formData.resume) payload.append('resume', formData.resume);
    if (coverLetterOption === 'type') {
      payload.append('coverLetter', formData.typedCoverLetter);
    } else if (formData.coverLetter) {
      payload.append('coverLetter', formData.coverLetter);
    }
    payload.append('linkedIn', formData.linkedIn);
    payload.append('portfolio', formData.portfolio);

    try {
      const response = await axios.post('/api/profile', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Server Response:', response.data);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className=" py-2">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Edit Profile</h1>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Personal Information Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-gray-800">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Resume Upload Section */}
          <div>
            <h2 className="text-xl font-medium text-gray-800">Resume / CV</h2>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Upload Your CV</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="mt-2 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Cover Letter Section */}
          <div>
            <h2 className="text-xl font-medium text-gray-800">Cover Letter</h2>
            <div className="mt-4 flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="coverLetterOption"
                  value="type"
                  checked={coverLetterOption === 'type'}
                  onChange={() => setCoverLetterOption('type')}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span>Type Cover Letter</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="coverLetterOption"
                  value="upload"
                  checked={coverLetterOption === 'upload'}
                  onChange={() => setCoverLetterOption('upload')}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span>Upload Cover Letter</span>
              </label>
            </div>
            {coverLetterOption === 'type' ? (
              <textarea
                name="typedCoverLetter"
                placeholder="Type your cover letter here..."
                maxLength={1000}
                rows={5}
                className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formData.typedCoverLetter}
                onChange={handleInputChange}
              ></textarea>
            ) : (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Upload Cover Letter</label>
                <input
                  type="file"
                  name="coverLetter"
                  accept=".pdf,.doc,.docx"
                  className="mt-2 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onChange={handleFileChange}
                />
              </div>
            )}
          </div>

          {/* Additional Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-gray-800">Additional Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
              <input
                type="url"
                name="linkedIn"
                placeholder="Enter your LinkedIn profile URL"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formData.linkedIn}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Portfolio Website</label>
              <input
                type="url"
                name="portfolio"
                placeholder="Enter your portfolio URL"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formData.portfolio}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Save Profile
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

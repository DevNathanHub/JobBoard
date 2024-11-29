// app/components/FilterComponent.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getJobs } from '../lib/getJobs';

const COUNTRIES = ['USA', 'Canada', 'UK', 'Germany', 'Australia']; // Add more countries
const EMPLOYMENT_TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship'];
const REMOTE_OPTIONS = ['Remote', 'On-site', 'Hybrid'];

const FilterComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedEmploymentType, setSelectedEmploymentType] = useState('');
  const [selectedRemote, setSelectedRemote] = useState('');

  const router = useRouter();
  const searchParams = useSearchParams();

  // Update query string based on the selected filters
  const updateQueryString = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    const queryString = params.toString();
    getJobs(queryString);
  };

  // Handle country change
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    updateQueryString('country', e.target.value);
  };

  // Handle employment type change
  const handleEmploymentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEmploymentType(e.target.value);
    updateQueryString('employmentType', e.target.value);
  };

  // Handle remote work option change
  const handleRemoteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRemote(e.target.value);
    updateQueryString('remote', e.target.value);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-4">
      {/* Employment Type Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
        <select
          value={selectedEmploymentType}
          onChange={handleEmploymentTypeChange}
          className="w-full p-2 border rounded-lg bg-white text-gray-700"
        >
          <option value="">Select Employment Type</option>
          {EMPLOYMENT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Remote/On-site Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Work Mode</label>
        <select
          value={selectedRemote}
          onChange={handleRemoteChange}
          className="w-full p-2 border rounded-lg bg-white text-gray-700"
        >
          <option value="">Select Work Mode</option>
          {REMOTE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Country Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full p-2 border rounded-lg bg-white text-gray-700"
        >
          <option value="">Select Country</option>
          {COUNTRIES.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;

// app/dashboard/page.tsx
import React from 'react';

async function fetchJobData() {
  const res = await fetch('https://jsearch.p.rapidapi.com/search-filters?query=Python%20developer%20in%20Texas%2C%20USA&date_posted=all', {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '5ec1e92dc3msh49de52ca93f4a9ap126da6jsn5cd069d88f6c',
      'x-rapidapi-host': 'jsearch.p.rapidapi.com',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch job data');
  }

  return res.json();
}

const Main = async () => {
  const data = await fetchJobData();

  if (!data) {
    return <div className="text-red-500">Error fetching data.</div>;
  }

  const { categories, job_titles, employers, employment_types, job_requirements } = data.parameters;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Job Search Results</h1>

      {/* Categories Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="list-disc list-inside">
          {categories?.map((category: any, index: number) => (
            <li key={index} className="text-gray-700">
              {category.name} ({category.est_count} jobs) 
            </li>
          ))}
        </ul>
      </section>

      {/* Job Titles Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Job Titles</h2>
        <ul className="list-disc list-inside">
          {job_titles?.map((jobTitle: any, index: number) => (
            <li key={index} className="text-gray-700">
              {jobTitle.name} ({jobTitle.est_count} jobs)
            </li>
          ))}
        </ul>
      </section>

      {/* Employers Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Employers</h2>
        <ul className="list-disc list-inside">
          {employers?.map((employer: any, index: number) => (
            <li key={index} className="text-gray-700">
              {employer.name} ({employer.est_count} jobs)
            </li>
          ))}
        </ul>
      </section>

      {/* Employment Types Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Employment Types</h2>
        <ul className="list-disc list-inside">
          {employment_types?.map((employmentType: any, index: number) => (
            <li key={index} className="text-gray-700">
              {employmentType.name} ({employmentType.est_count} jobs)
            </li>
          ))}
        </ul>
      </section>

      {/* Job Requirements Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Job Requirements</h2>
        <ul className="list-disc list-inside">
          {job_requirements?.map((requirement: any, index: number) => (
            <li key={index} className="text-gray-700">
              {requirement.name} ({requirement.est_count} jobs)
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Main;

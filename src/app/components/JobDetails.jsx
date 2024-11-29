import React from 'react';

const JobDetails = ({ job }) => {
  return (
    <div>
      <h2>{job.title}</h2>
      <h4>{job.company}</h4>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;

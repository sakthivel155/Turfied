import React from 'react';

const AboutVenueSection = ({ aboutVenue }) => {
  // Find the index of the title separator
  const separatorIndex = aboutVenue.indexOf(":-");

  // Extract the title and content dynamically
  const title = separatorIndex !== -1 ? aboutVenue.slice(0, separatorIndex + 1) : "";
  const content = separatorIndex !== -1 ? aboutVenue.slice(separatorIndex + 2) : aboutVenue;

  return (
    <section className="mt-5 border border-gray-300 px-4 py-3 rounded-md">
      <h3 className="text-md mb-2">{title}</h3>
      {content
        .split(/-\s/g)
        .map((line, index) => (
          <p key={index} className="ml-4">
            - {line.trim()}
          </p>
        ))}
    </section>
  );
};

export default AboutVenueSection;

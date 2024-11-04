const TimingSection = ({ openingHours }) => (
   
  
  
  <section className="mt-5 border border-gray-300 px-4 py-3 rounded-md">
      <h3 className="text-md font-black mb-2">Timing</h3>
      <div className="space-y-1">
        {openingHours.weekdays && (
          <p className="text-gray-700">
            {openingHours.weekdays}
          </p>
        )}
        {openingHours.weekends && (
          <p className="text-gray-700">
            {openingHours.weekends}
          </p>
        )}
        {openingHours.alldays && (
          <p className="text-gray-700">
            {openingHours.alldays}
          </p>
        )}
      </div>
    </section>
);
  
export default TimingSection;
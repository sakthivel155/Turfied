const LocationSection = ({ address, mapUrl }) => (
    <section className="mt-5 border border-gray-300 px-4 py-3 rounded-md">
      <h3 className="text-md font-black mb-2">Location</h3>
      <address className="text-gray-700 not-italic mb-4">{address}</address>
      <div className="w-full h-[50vw] tablet:h-[25vw] relative rounded-lg overflow-hidden">
        <iframe
          src={mapUrl}
          className="w-full h-full absolute inset-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Turf Location Map"
        />
      </div>
    </section>
);
  
export default LocationSection;
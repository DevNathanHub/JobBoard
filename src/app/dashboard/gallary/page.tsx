import Upload from '@/app/components/uploadthing';

// Array of image paths
const images = [
  '/imageONE.jpeg',
  '/imageTWO.jpeg',
  '/imageTHREE.jpeg',
  '/imageFOUR.jpeg',
];

export default function Gallery() {
  return (
    <div className="p-5 bg-gray-800 min-h-screen">
      {/* Upload component */}
      <div className="mb-5">
        <Upload />
      </div>

      {/* Image gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img 
              src={src} 
              alt={`Image ${index + 1}`} 
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

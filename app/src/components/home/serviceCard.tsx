const ServiceCard = ({ icon, title, description }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 transition duration-300 ease-in-out transform rounded-md shadow-md hover:-translate-y-2">
      <div className="flex items-center justify-center w-16 h-16 mb-4 text-white bg-blue-500 rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;

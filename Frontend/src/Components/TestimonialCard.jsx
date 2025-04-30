function TestimonialCard({ name, role, message, img }) {
  return (
    <div className="bg-white cursor-pointer p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50">
      <img src={img} alt={name} className="w-16 h-16 rounded-full mb-4" />
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{role}</p>
      <p className="text-gray-700 italic">"{message}"</p>
    </div>
  );
}

export default TestimonialCard;

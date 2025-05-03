function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer text-center transition-all hover:shadow-2xl transform hover:scale-105">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default ServiceCard;

import ServiceCard from "../Components/ServiceCard";

function Home() {
  const features = [
    {
      icon: "📋",
      title: "Onboarding",
      description: "Streamlined new hire experience.",
    },
    {
      icon: "⏱️",
      title: "Attendance",
      description: "Accurate time tracking system.",
    },
    {
      icon: "💰",
      title: "Payroll",
      description: "Efficient payroll management.",
    },
    {
      icon: "📈",
      title: "Performance",
      description: "Track and boost employee growth.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-extrabold leading-tight mb-4">
          Welcome to HR Cloud - Streamlining HR Operations
        </h1>
        <p className="text-lg mb-8">
          Manage your employees, attendance, payroll, and more—all in one place.
        </p>
        <a
          href="/services"
          className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 hover:px-7 hover:py-3 transition-all duration-300"
        >
          Explore Our Services
        </a>
      </section>

      {/* Brief Intro to HR Cloud */}
      <section className="px-6 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-4">
          What is HR Cloud?
        </h2>
        <p className="text-lg text-center max-w-5xl  mx-auto">
          HR Cloud is a web-based Human Resource Management System (HRMS)
          designed to help companies efficiently manage their employees and HR
          operations. From onboarding new hires to managing payroll, HR Cloud
          streamlines complex tasks, allowing HR departments to focus on what
          truly matters—building great teams and ensuring employee success.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

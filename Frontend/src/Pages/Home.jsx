import { useEffect } from "react";
import ServiceCard from "../Components/ServiceCard";
import TestimonialCard from "../Components/TestimonialCard";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const testimonials = [
    {
      name: "John Doe",
      role: "HR Admin",
      message:
        "HR Cloud has made onboarding and payroll management a breeze. I can easily track employee attendance and manage everything from a single platform.",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Employee",
      message:
        "As an employee, HR Cloud has simplified accessing my payslips, tracking leave, and staying on top of my work schedule.",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Michael Brown",
      role: "HR Admin",
      message:
        "The HR Cloud platform has drastically reduced the time spent on administrative tasks. We now have more time to focus on strategic HR initiatives.",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
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
      <section
        className="bg-blue-600 text-white text-center py-20"
        data-aos="fade-down"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Welcome to HR Cloud - Streamlining HR Operations
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          What is HR Cloud?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-center max-w-5xl mx-auto">
          HR Cloud is a web-based Human Resource Management System (HRMS)
          designed to help companies efficiently manage their employees and HR
          operations. From onboarding new hires to managing payroll, HR Cloud
          streamlines complex tasks, allowing HR departments to focus on what
          truly matters—building great teams and ensuring employee success.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-6 py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay={100}
        >
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

      {/* Testimonials Section */}
      <section className="text-center mt-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 text-blue-700">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, message, img }, index) => (
            <TestimonialCard
              key={index}
              name={name}
              role={role}
              message={message}
              img={img}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

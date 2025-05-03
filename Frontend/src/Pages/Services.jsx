import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "../Components/ServiceCard";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: "📝",
      title: "Employee Onboarding",
      description:
        "Digitize and streamline the entire onboarding process from paperwork to training.",
    },
    {
      icon: "📅",
      title: "Leave Management",
      description:
        "Manage leave requests, approvals, and track leave balances with ease.",
    },
    {
      icon: "⏰",
      title: "Attendance Tracking",
      description:
        "Automated, real-time attendance monitoring with detailed logs.",
    },
    {
      icon: "📊",
      title: "Performance Reviews",
      description:
        "Organize structured employee performance evaluations with tracking tools.",
    },
    {
      icon: "💳",
      title: "Payroll Insights",
      description:
        "Simplify salary calculations, deductions, and payslip generation.",
    },
    {
      icon: "⚖️",
      title: "Compliance Tools",
      description:
        "Ensure HR and payroll compliance with local labor laws and policies.",
    },
    {
      icon: "📂",
      title: "Document Management",
      description:
        "Securely store and share employee documents and certificates.",
    },
    {
      icon: "📱",
      title: "Self-Service Portal",
      description:
        "Enable employees to access payslips, update profiles, and apply for leaves.",
    },
  ];

  return (
    <div
      className="max-w-7xl mx-auto px-4 py-10 text-center"
      data-aos="fade-up"
    >
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-700 mb-6"
        data-aos="fade-down"
      >
        Our Services
      </h1>
      <p
        className="text-gray-600 text-lg sm:text-xl md:text-2xl mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Explore the full range of tools and features HR Cloud offers to simplify
        your HR workflow.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

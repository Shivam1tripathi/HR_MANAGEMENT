import ServiceCard from "../Components/ServiceCard";

function About() {
  const values = [
    {
      icon: "💡",
      label: "Innovation",
      desc: "We strive to continuously improve and innovate our solutions.",
    },
    {
      icon: "🤝",
      label: "Empathy",
      desc: "We value people and build tools that serve real human needs.",
    },
    {
      icon: "🔐",
      label: "Security",
      desc: "We prioritize data privacy and security above all.",
    },
  ];

  const team = [
    {
      name: "Aarav Mehta",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ishita Verma",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Kunal Desai",
      role: "HR Specialist",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      {/* Mission */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Mission</h1>
        <p className="text-gray-700 text-lg">
          To simplify and digitize human resource operations through innovative,
          user-friendly, and efficient tools, enabling HR teams to focus on what
          truly matters — people.
        </p>
      </section>

      {/* Vision */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700 text-lg">
          We envision a future where every organization, big or small, leverages
          powerful digital HR tools to build better, happier, and more
          productive workplaces.
        </p>
      </section>

      {/* Brand Values */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {values.map((val, idx) => (
            <ServiceCard
              key={idx}
              icon={val.icon}
              title={val.label}
              description={val.desc}
            />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
        <p className="text-gray-700 mb-8">
          A dedicated team of developers, designers, and HR experts committed to
          making HR Cloud the best it can be.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;

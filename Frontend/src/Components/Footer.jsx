function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-2 mt-8 text-center sm:px-4 md:px-8 lg:px-16">
      <p className="text-xs sm:text-sm md:text-base text-gray-500">
        &copy; {new Date().getFullYear()} HR Cloud. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

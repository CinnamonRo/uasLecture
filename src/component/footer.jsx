export default function FooterWithLogo() {
    return (
      <footer className="w-full bg-white p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <p
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 hover:underline"
              >
                About Us
              </p>
            </li>
            <li>
              <p
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 hover:underline"
              >
                License
              </p>
            </li>
            <li>
              <p
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 hover:underline"
              >
                Contribute
              </p>
            </li>
            <li>
              <p
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 hover:underline"
              >
                Contact Us
              </p>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  
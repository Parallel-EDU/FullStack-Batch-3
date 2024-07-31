import "./App.css";
import Home from "./pages/homePage";
// import AboutPage from "./pages/aboutPage";
import Service from "./components/homepage/service";

function App() {
  return (
    <>
      <header
      className="flex backdrop-blur z-50 justify-between fixed w-full items-center shadow-lg px-[80px] max-lg:px-[40px] max-md:px-[20px] py-[21px]"
    >
      <a href="#hero">
        <img src="./assets/logo.svg" width="40px" height="40px" alt="" />
      </a>
      <nav>
        <ul className="flex gap-[20px] max-[426px]:gap-[10px]">
          <li>
            <a href="#about" className="max-[370px]:text-sm">About</a>
          </li>
          <li><a href="#services" className="max-[370px]:text-sm">Service</a></li>
          <li><a href="#portfolio" className="max-[370px]:text-sm">Portfolio</a></li>
          <li><a href="#contact" className="max-[370px]:text-sm">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main id="hero" className="h-[100vh] pl-[80px] max-lg:px-[40px] max-md:px-[20px] pt-[300px] max-sm:pt-[150px]">
      <h1 className="w-[700px] max-md:w-full text-[78px] max-md:text-[56px] max-sm:text-[44px] leading-[100%]">
        Welcome to my Website
      </h1>
      <a href="#about">
        <button
          className="px-[36px] max-sm:w-[90%] max-sm:absolute max-sm:bottom-[40px] py-[8px] mt-[24px] border-[1px] border-black rounded-[35px] hover:bg-black hover:text-white max-sm:text-white max-sm:bg-black duration-500 transition-all"
        >
          About
        </button></a
      >
    </main>
    <section
      id="about"
      className="py-[121px] flex gap-[65px] max-[1370px]:gap-[32px] max-[885px]:flex-col items-center px-[80px] max-lg:px-[40px] max-md:px-[20px]"
    >
      <img src="../day-3/images/cat.jpeg" className="rounded-[50%] max-[1130px]:w-[300px]" alt="" />
      <div>
        <h1 className="text-[34px] mb-[24px] max-[885px]:text-center">About Us</h1>
        <p className="w-[700px] max-[1370px]:w-[500px] max-[885px]:text-center max-[885px]:w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi porro
          vitae, corrupti, aperiam dolorum dolores eaque repellat beatae
          assumenda, sapiente voluptas libero. Commodi, cumque quia, amet
          possimus voluptates totam doloribus aspernatur a saepe, alias natus
          accusantium dolor? Eos voluptatibus nostrum vel explicabo nulla earum
          fugit in voluptas nihil non ad porro dignissimos, eius totam facilis
          dicta animi temporibus minima, quidem doloribus quod fuga enim.
          Facilis, accusantium distinctio id adipisci magnam blanditiis est
          consectetur inventore deserunt quasi eveniet natus animi repellendus
          mollitia tempora, amet debitis. Perspiciatis laudantium quae possimus,
          dolorum recusandae numquam velit? Modi doloribus alias dolorem
          architecto nobis quidem iste doloremque veniam molestiae dolore fugiat
          ipsum sunt, ab, enim consequatur vero repudiandae eum, delectus
          corrupti nihil ad repellendus non iusto.
        </p>
      </div>
    </section>
    <section id="services" className="py-[121px] px-[80px] max-lg:px-[40px] max-md:px-[20px]">
      <h1 className="text-[56px] max-md:text-[42px] max-sm:text-[36px] mb-[42px]">Our Services</h1>
      <div className="flex gap-[20px] max-md:gap-[30px] max-xl:flex-wrap">
        <div
          className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all"
        >
          <h1 className="text-[24px] mb-[12px]">Full Stack Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
            ipsam deserunt ex? Quos minima dolore mollitia repellendus
            molestiae! Iste ratione delectus itaque, magni officia, rem sint
            eligendi vero sapiente repudiandae placeat, beatae dolore sit.
          </p>
        </div>
        <div
          className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all"
        >
          <h1 className="text-[24px] mb-[12px]">Full Stack Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
            ipsam deserunt ex? Quos minima dolore mollitia repellendus
            molestiae! Iste ratione delectus itaque, magni officia, rem sint
            eligendi vero sapiente repudiandae placeat, beatae dolore sit.
          </p>
        </div>
        <div
          className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all"
        >
          <h1 className="text-[24px] mb-[12px]">Full Stack Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
            ipsam deserunt ex? Quos minima dolore mollitia repellendus
            molestiae! Iste ratione delectus itaque, magni officia, rem sint
            eligendi vero sapiente repudiandae placeat, beatae dolore sit.
          </p>
        </div>
        <div
          className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all"
        >
          <h1 className="text-[24px] mb-[12px]">Full Stack Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
            ipsam deserunt ex? Quos minima dolore mollitia repellendus
            molestiae! Iste ratione delectus itaque, magni officia, rem sint
            eligendi vero sapiente repudiandae placeat, beatae dolore sit.
          </p>
        </div>
      </div>
    </section>
    <section id="portfolio" className="py-[121px] px-[80px] max-lg:px-[40px] max-md:px-[20px]">
      <h1 className="text-[56px] max-md:text-[42px] max-sm:text-[36px] mb-[42px]">Portfolio</h1>
      <div className="flex gap-[20px] max-md:gap-[30px] max-xl:flex-wrap">
        <div
        className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all"
        >
          <h1 className="text-[24px]">Full Stack Development</h1>
        </div>
        <div
        className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all"
        >
          <h1 className="text-[24px]">Full Stack Development</h1>
        </div>
        <div
        className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all"
        >
          <h1 className="text-[24px]">Full Stack Development</h1>
        </div>
        <div
        className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all"
        >
          <h1 className="text-[24px]">Full Stack Development</h1>
        </div>
      </div>
    </section>
    <section
      id="contact"
      className="py-[121px] flex flex-col items-center px-[80px] max-lg:px-[40px] max-md:px-[20px]"
    >
      <h1 className="text-[56px] max-md:text-[42px] max-sm:text-[36px] mb-[42px]">Contact Us</h1>

      <form
        className="flex flex-col gap-[20px] w-[500px] max-sm:w-full px-[20px] py-[30px] shadow-2xl rounded-[13px]"
        action=""
      >
        <input
          type="text"
          className="border-[1px] border-black pl-[12px] py-[7px] rounded-[7px]"
          name="Name"
          placeholder="Enter Your Name"
          id=""
        />
        <input
          type="text"
          className="border-[1px] border-black pl-[12px] py-[7px] rounded-[7px]"
          name="Name"
          placeholder="Enter Your Email"
          id=""
        />
        <textarea
          name=""
          className="resize-none border-[1px] border-black pl-[12px] py-[7px] rounded-[7px] h-[200px]"
          placeholder="Enter your message"
          id=""
        ></textarea>
        <button
          className="border-black border-[1px] py-[12px] rounded-[35px] hover:bg-black hover:text-white max-md:text-white max-md:bg-black duration-500 transition-all"
        >
          Submit
        </button>
      </form>
    </section>
    <footer className="py-[52px] flex bg-gray-500  max-[550px]:justify-start max-[330px]:gap-[50px] max-[550px]:gap-[80px] justify-between px-[80px] max-lg:px-[40px] max-md:px-[20px]">
      <div className="flex gap-[32px] max-[550px]:flex-col">
        <p className="w-[100px] text-white">xyz, District, State, country</p>
        <div>
          <ul>
            <li className="text-white hover:underline cursor-pointer">Instagram</li>
            <li className="text-white hover:underline cursor-pointer">Github</li>
            <li className="text-white hover:underline cursor-pointer">Linkedin</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-[32px] max-[550px]:flex-col">
        <div>
          <ul>
            <li className="text-white hover:underline cursor-pointer">Phonenumber</li>
            <li className="text-white hover:underline cursor-pointer">Email</li>
          </ul>
        </div>
        <ul>
          <li>
            <a href="#about" className="text-white hover:underline cursor-pointer">About</a>
          </li>
          <li><a href="#services" className="text-white hover:underline cursor-pointer">Service</a></li>
          <li><a href="#portfolio" className="text-white hover:underline cursor-pointer">Portfolio</a></li>
          <li><a href="#contact" className="text-white hover:underline cursor-pointer">Contact</a></li>
        </ul>
      </div>
    </footer>

    </>
  );
}

export default App;

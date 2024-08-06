import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../contexts/ThemeContext";
function Contact() {
  const { theme } = useContext(ThemeContext);

  const [formData, setformData] = useState({
    Name: "",
    email: "",
    message: "",
  });
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [submit, setsubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.Name === "") {
      setValidName(false);
    } else {
      setValidName(true);
    }
    if (formData.email === "") {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
    if (formData.message === "") {
      setValidMessage(false);
    } else {
      setValidMessage(true);
    }
    if (
      formData.Name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
      setsubmit(true);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.name + ":" + e.target.value);
    setformData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <section
      id="contact"
      style={{
        background: theme === "light" ? "white" : "#333",
        color: theme === "light" ? "black" : "white",
      }}
      className="py-[121px] flex flex-col items-center px-[80px] max-lg:px-[40px] max-md:px-[20px]"
    >
      <h1 className="text-[56px] max-md:text-[42px] max-sm:text-[36px] mb-[42px]">
        Contact Us
      </h1>
      <form
        style={{
          background: theme === "light" ? "white" : "#333",
          color: theme === "light" ? "black" : "white",
          boxShadow: theme === "light" ? "0px 0px 10px black" : "0px 0px 50px white",
        }}
        className="flex relative flex-col gap-[20px] w-[500px] max-sm:w-full px-[20px] py-[30px] shadow-2xl rounded-[13px]"
        action=""
      >
        <input
          type="text"
          style={{
            background: theme === "light" ? "white" : "#333",
            color: theme === "light" ? "black" : "white",
          }}
          className={
            validName === false
              ? "border-[1px] border-[red] placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"
              : "border-[1px] border-black pl-[12px] py-[7px] rounded-[7px]"
          }
          name="Name"
          onChange={handleChange}
          placeholder="Enter Your Name"
          id=""
        />
        {validName === false && (
          <p className="absolute right-[30px] text-[red] top-[9px] bg-white p-[8px]">
            This field is required*
          </p>
        )}
        <input
          type="text"
          onChange={handleChange}
          style={{
            background: theme === "light" ? "white" : "#333",
            color: theme === "light" ? "black" : "white",
          }}
          className={
            validEmail === false
              ? "border-[1px] border-[red] placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"
              : "border-[1px] border-black pl-[12px] py-[7px] rounded-[7px]"
          }
          name="email"
          placeholder="Enter Your Email"
          id=""
        />
        {validEmail === false && (
          <p className="absolute right-[30px] text-[red] top-[70px] bg-white p-[8px]">
            This field is required*
          </p>
        )}
        <textarea
          name="message"
          style={{
            background: theme === "light" ? "white" : "#333",
            color: theme === "light" ? "black" : "white",
          }}
          onChange={handleChange}
          className={
            validMessage === false
              ? "resize-none border-[1px] border-[red] placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px] h-[200px]"
              : "resize-none border-[1px] border-black pl-[12px] py-[7px] rounded-[7px] h-[200px]"
          }
          placeholder="Enter your message"
          id=""
        ></textarea>
        {validMessage === false && (
          <p className="absolute right-[30px] text-[red] top-[129px] bg-white p-[8px]">
            This field is required*
          </p>
        )}
        <button
          onClick={handleSubmit}
          className="border-black border-[1px] py-[12px] rounded-[35px] hover:bg-black hover:text-white max-md:text-white max-md:bg-black duration-500 transition-all"
        >
          Submit
        </button>
      </form>
      {submit && (
        <div className="bg-[#00000066] fixed flex justify-center items-center top-0 left-0 w-full h-[100vh]">
          <div className="w-[500px] h-[300px] py-[50px] bg-white rounded-[13px]">
            <h1 className="text-center text-[36px] font-semibold">
              Form Have been Submitted
            </h1>
            <p className="text-center text-[18px] w-[300px] m-auto mt-[20px]">
              Thanks for Submitting form. We will get back to you soon.
            </p>
            <button
              onClick={() => setsubmit(false)}
              className="border-[red] hover:bg-[red] hover:text-white duration-500 transition-all py-[10px] w-[140px] px-[35px] text-[red] ml-[180px] mt-[30px] border-[1px] rounded-[7px]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;

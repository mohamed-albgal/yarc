import React from      "react"
import Hero from "./Hero"
import CardStyle1 from "./CardStyle1"
import lights from  "../assets/img/headshot3.jpg"
import kids from    "../assets/img/headshot4.jpg"
import head1 from    "../assets/img/headshot1.jpg"
import hands from "../assets/img/hands.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/font-awesome"

const caption = `The Yemeni American Resource Center is committed to providing a source of learning and growth for the entire
Yemeni Community in the Bay Area`;

const mainText = `Yemeni American Resource Center`

export default () => {
    return (
      <>
            <main>
                <Hero mainText={mainText} caption={caption} bgImage={hands} />
            <section className="pb-20 bg-gray-300 -mt-24">
                <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <CardStyle1 tagline="Community Togetherness"
                    mainText="We offer spaces for our community to come together and exchange our experiences"
                    icon={["fa", "check-square"]}
                    bgColor={"indigo-900"}
                    size={"1x"}
                    />
                    </div>
    
                    <div className="w-full md:w-4/12 px-4 text-center">
                    <CardStyle1  tagline="Local Resources Include The Community's Brightest" 
                    mainText="We enable those traveling the path to speak and interact with those who have met their destination."
                    icon={["fa", "hand-holding-heart"]}
                    bgColor={"indigo-300"}
                    size={"1x"}
                    />
                    </div>
    
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                    <CardStyle1 tagline="You're All I'll Ever Need"
                    mainText="Give me what you want, I'll show you something"
                    icon={["fa", "lightbulb"]}
                    bgColor={"indigo-700"}
                    size={"1x"}
                    />
                    </div>
                </div>
    
    
                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                        <FontAwesomeIcon icon={["fa", "brain"]} size={"2x"} />
                    </div>
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                        Communities Thrive When Ideas Are Exchanged
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                        FILLER INFORMATION. SOURCE TEXT FROM GOOGLE DOC/MOKHTAR, UPDATE VIA CMS
                        It is a long established fact that a reader will be distracted by the readable 
                        content of a page when looking at its layout. The point of using Lorem Ipsum is 
                        that it has a more-or-less normal distribution of letters, as opposed to using 
                        'Content here, content here', making it look like readable English. Many desktop 
                        publishing packages and web page editors now use Lorem Ipsum as their default model 
                        text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
                        (injected humour and the like).
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                    FILLER INFORMATION. SOURCE TEXT FROM GOOGLE DOC/MOKHTAR, UPDATE VIA CMS
                    It is a long established fact that a reader will be distracted by the readable 
                    content of a page when looking at its layout. The point of using Lorem Ipsum is 
                    that it has a more-or-less normal distribution of letters, as opposed to using 
                    'Content here, content here', making it look like readable English. 
                    </p>
                    <a
                        href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                        className="font-bold text-gray-800 mt-8"
                    >
                        Our Space Is Available
                    </a>
                    </div>
    
                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                        <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        className="w-full align-middle rounded-t-lg"
                        />
                        <blockquote className="relative p-8 mb-4">
                        <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block"
                            style={{
                            height: "95px",
                            top: "-94px"
                            }}
                        >
                            <polygon
                            points="-30,95 583,95 583,65"
                            className="text-pink-600 fill-current"
                            ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                            Large Scale Events And Meetups
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                        FILLER INFORMATION. SOURCE TEXT FROM GOOGLE DOC/MOKHTAR, UPDATE VIA CMS
                        It is a long established fact that a reader will be distracted by the readable 
                        </p>
                        </blockquote>
                    </div>
                    </div>
    
                </div>
                </div>
            </section>
    
            <section className="relative py-20">
                <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px", transform: "translateZ(0)" }}
                >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                    className="text-white fill-current"
                    points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
                </div>
    
                <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img
                        alt="..."
                        className="max-w-full rounded-lg shadow-lg"
                        src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                        <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                        <FontAwesomeIcon icon={"coffee"} />
                        </div>
                        <h3 className="text-3xl font-semibold">
                        Students, Get Your Studying Done Here 
                        </h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        The extension comes with three pre-built pages to help you
                        get started faster. You can change the text and images and
                        you're good to go.
                        </p>
                        <ul className="list-none mt-6">
                        <li className="py-2">
                            <div className="flex items-center">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                <i className="fas fa-fingerprint"></i>
                                </span>
                            </div>
                            <div>
                                <h4 className="text-gray-600">
                                Carefully crafted components
                                </h4>
                            </div>
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                <i className="fab fa-html5"></i>
                                </span>
                            </div>
                            <div>
                                <h4 className="text-gray-600">Amazing page examples</h4>
                            </div>
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                <i className="far fa-paper-plane"></i>
                                </span>
                            </div>
                            <div>
                                <h4 className="text-gray-600">Dynamic components</h4>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
    
    
            <section className="pt-20 pb-48">
                <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold">
                        Here are our heroes
                    </h2>
                    <p className="text-lg leading-relaxed m-4 text-gray-600">
                        According to the National Oceanic and Atmospheric
                        Administration, Ted, Scambos, NSIDClead scentist, puts the
                        potentially record maximum.
                    </p>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                        <img
                        alt="..."
                        src={kids}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">
                            Staff 1
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Role 1
                        </p>
                        <div className="mt-6">
                            <button
                            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-twitter"></i>
                            </button>
                            <button
                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-facebook-f"></i>
                            </button>
                            <button
                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-dribbble"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                        <img
                        alt="..."
                        src={lights}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">
                            Staff 2
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Marketing Specialist
                        </p>
                        <div className="mt-6">
                            <button
                            className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-google"></i>
                            </button>
                            <button
                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-facebook-f"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                        <img
                        alt="..."
                        src={head1}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">
                            Staff 3
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Youth Coordinator
                        </p>
                        <div className="mt-6">
                            <button
                            className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-google"></i>
                            </button>
                            <button
                            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-twitter"></i>
                            </button>
                            <button
                            className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-instagram"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                        <img
                        alt="..."
                        src={hands}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                        />
                        <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">
                            Staff 4
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Executive Coordinator
                        </p>
                        <div className="mt-6">
                            <button
                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-dribbble"></i>
                            </button>
                            <button
                            className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-google"></i>
                            </button>
                            <button
                            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-twitter"></i>
                            </button>
                            <button
                            className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            >
                            <i className="fab fa-instagram"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
    
            <section className="pb-20 relative block bg-gray-900">
                <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px", transform: "translateZ(0)" }}
                >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                    className="text-gray-900 fill-current"
                    points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
                </div>
    
                <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                <div className="flex flex-wrap text-center justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold text-white">
                        We're All We Got!
                    </h2>
                    <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                        Put the potentially record low maximum sea ice extent tihs year down to low ice.
                        According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                    </p>
                    </div>
                </div>
                <div className="flex flex-wrap mt-12 justify-center">
                    <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-medal text-xl"></i>
                    </div>
                    <h6 className="text-xl mt-5 font-semibold text-white">
                        Mentorship
                    </h6>
                    <p className="mt-2 mb-4 text-gray-500">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-poll text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                        Networking
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                        <i className="fas fa-lightbulb text-xl"></i>
                        <FontAwesomeIcon icon={["fas", "lightbulb"]} />
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                        Youth Enrichment
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                    </p>
                    </div>
                </div>
                </div>
            </section>
            <section className="relative block py-24 lg:pt-0 bg-gray-900">
                <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                    <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                        <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-semibold">
                            Want to work with us?
                        </h4>
                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                            Complete this form and we will get back to you in 24 hours.
                        </p>
                        <div className="relative w-full mb-3 mt-8">
                            <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="full-name"
                            >
                            Full Name
                            </label>
                            <input
                            type="text"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Full Name"
                            style={{ transition: "all .15s ease" }}
                            />
                        </div>
    
                        <div className="relative w-full mb-3">
                            <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email"
                            >
                            Email
                            </label>
                            <input
                            type="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Email"
                            style={{ transition: "all .15s ease" }}
                            />
                        </div>
    
                        <div className="relative w-full mb-3">
                            <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="message"
                            >
                            Message
                            </label>
                            <textarea
                            rows="4"
                            cols="80"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Type a message..."
                            />
                        </div>
                        <div className="text-center mt-6">
                            <button
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            >
                            Send Message
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </main>
      </>
    );
  };
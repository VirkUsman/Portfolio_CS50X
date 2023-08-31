"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillSkype,
  AiFillFacebook,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
      } from "react-icons/ai";
import deved from "/public/UV_Profile_pic.jpg";
import code from "/public/code.png";
import design from "/public/design.png";
import consulting from "/public/consulting.png";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";
import logo from "/public/CS50_logo1.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900 font-caprasimo">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-1">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div href="#" className="flex items-center" suppressHydrationWarning>
              <image
                src="/public/CS50_logo1.jpg"
                className="h-14 mr-3"
                alt="CS50 Logo" ></image>
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                CS50X
              </span>
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#section_about"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#section_services"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#section_work"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#section_contact"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <div className="flex items-center justify-center me-3">
                    <label
                      for="toggleB"
                      className="flex items-center cursor-pointer"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="toggleB"
                          className="sr-only"
                          onClick={() => setDarkMode(!darkMode)}
                        />
                        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full"></div>
                        <div className="block bg-gray-600 w-14 h-8 rounded-full transition"></div>
                      </div>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="min-h-screen">
          <div className="text-center p-10" id="section_about">
            <h2 className="text-5xl py-2 pt-14 text-teal-600 font-medium">
              Usman Mahmood Virk
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Freelancer providing services for programming and needs. Join me
              down below and let's get cracking!
            </p>
          </div>

          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section id="section_services">
          <div className=" pt-24">
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 shadow-cyan-500/50 hover:shadow-red-800/40  dark:bg-gray-900 dark:text-gray-200 flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                Photoshop
              </p>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                Illustrator
              </p>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                Figma
              </p>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                Indesign
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 shadow-cyan-500/50 hover:shadow-red-800/40  dark:bg-gray-900 dark:text-gray-200 flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                React.Js
              </p>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                Next.Js
              </p>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                Tailwind
              </p>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                TypeScript
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 shadow-cyan-500/50 hover:shadow-red-800/40  dark:bg-gray-900 dark:text-gray-200 flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                Photoshop
              </p>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                Illustrator
              </p>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                Figma
              </p>
              <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-red-700 py-1 cursor-pointer">
                Indesign
              </p>
            </div>
          </div>
        </section>
        <section className="py-10" id="section_work">
          <div className="pt-24">
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
        <section id="section_contact">
          <div className="text-center p-10 py-32">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Let's work together...
            </h2>
            <p className="text-md italic py-1 leading-8 text-gray-800 dark:text-white">
              How do you take your coffee?
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
              <a href="#" className="hover:text-teal-600">
                <AiFillTwitterCircle />
              </a>
              <a href="#" className="hover:text-teal-600">
                <AiFillLinkedin />
              </a>
              <a href="#" className="hover:text-teal-600">
                <AiFillSkype />
              </a>
              <a href="#" className="hover:text-teal-600">
                <AiFillYoutube />
              </a>
              <a href="#" className="hover:text-teal-600">
                <AiFillFacebook />
              </a>
              <a href="#" className="hover:text-teal-600">
                <AiFillGithub />
              </a>
              <a href="#" className="hover:text-teal-600">
                <AiFillMail />
              </a>
              <a href="#" className="hover:text-teal-600">
                <AiFillPhone />
              </a>
            </div>
          </div>
        </section>
        <div className="py-32"></div>
        <footer className="p-2 mb-12 flex justify-between bg-gray-300 dark:text-white">
          <h3 className="text-xl font-burtons w-96">
            **This is just a fake portfolio. All the projects and contact
            details given are not real. This is made according to CS50X
            Certification requirements.
          </h3>
          <ul className="flex items-center ">
            <li>
              <a className="px-4 ml-8" href="#">
                &copy; Created for &nbsp;
                <a href="https://cs50.harvard.edu/x/2023/" target="_blank">
                  Harvard University's CS50X
                </a>
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

// src={deved} layout="fill"

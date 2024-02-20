import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer class="p-4 bg-white sm:p-6 border-t-2">
      <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <Link to="/">
              <h3 className="self-center text-xl font-semibold whitespace-nowrap border-2 border-black px-2">
                Blog Site
              </h3>
            </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Category
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a href="https://flowbite.com" class="hover:underline">
                    Health
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Fintech
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    class="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com" class="hover:underline">
              BlogSite™
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-800 hover:text-orange-600 font-medium rounded-lg mr-2 text-2xl hidden md:block"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-orange-600 font-medium rounded-lg mr-2 text-2xl hidden md:block"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-orange-600 font-medium rounded-lg mr-2 text-2xl hidden md:block"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-orange-600 font-medium rounded-lg mr-2 text-2xl hidden md:block"
            >
              <RiInstagramFill />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

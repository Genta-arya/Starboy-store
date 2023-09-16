import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline"; // Use the outline version of the icon
import "../../../Style/Content.css";
import "../../../Style/JobList.css";
import ProductLayout from "./Product";
import CustomerReviews from "./Review";

function Content() {
  return (
    <section id="photographyInfo" className="py-12">
      <div className="container mx-auto animate-fade-in bg-white p-12 rounded-lg drop-shadow-2xl border-2 border-gray-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="mt-6 mb-8 ">
            <div className="border-b border-gray-300 mb-12 -mt-5">
              <h3 className="text-2xl font-semibold mb-4 w-40 job-list-headings ">
                About Us
              </h3>
            </div>
            <p>
              Welcome to Starboy Store – your one-stop destination for
              high-quality fashion. We are passionate about style and dedicated
              to helping you express your unique fashion sense. Our team of
              fashion experts is committed to providing you with the best
              shopping experience.
            </p>
            <p>
              With years of experience and a keen eye for the latest trends, we
              are here to make sure you look your best. Whether it's casual
              wear, formal attire, or anything in between, our collection has
              something for everyone. We believe that fashion is a way to
              express yourself, and we are here to help you do just that.
            </p>
            <p>
              At Starboy Store, we understand that every piece of clothing tells
              a story, and we take pride in helping you create your own fashion
              story. Our wide range of products and dedication to quality ensure
              that you get the stylish clothing you deserve.
            </p>
          </div>

          <div className="mt-8  border-l-4 border-gray-400 pl-4 mb-20">
            <h3 className="text-2xl font-semibold mb-4 ml-3">Why Choose Us</h3>
            <div className="ml-8 mb-5">
              <p className="flex items-center mb-5">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
                High-quality fashion products
              </p>
              <p className="flex items-center mb-5">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
                Original products
              </p>
              <p className="flex items-center mb-5">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
                Diverse range of clothing styles
              </p>
              <p className="flex items-center mb-5">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
                Competitive pricing options
              </p>
              <p className="flex items-center mb-5">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
                Affordable pricing options
              </p>
            </div>
          </div>
        </div>

        <ProductLayout />
        <CustomerReviews />
      </div>
    </section>
  );
}

export default Content;

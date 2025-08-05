import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const QuoteSection = () => {
  return (
    <div className="bg-quotebox mt-14 h-auto px-5 py-5 md:px-36 md:py-10">
      <div className="flex flex-row -space-x-2 text-xl text-white md:-space-x-4 md:text-3xl">
        <BiSolidQuoteSingleLeft />
        <BiSolidQuoteSingleLeft />
      </div>
      <blockquote className="font-droid px-5 py-3 text-sm/relaxed text-white md:px-16 md:text-xl/relaxed">
        As a developer, I take a user-focused and practical approach to building
        solutions. I follow the SOLID principles to write clean, maintainable,
        and scalable code. I care about performance, usability, and long-term
        impact. I'm quick to adapt, work well across the full stack, and enjoy
        collaborating with cross-functional teams. My passion lies in creating
        meaningful tools and continuously learning to grow as a developer.
      </blockquote>
    </div>
  );
};

export default QuoteSection;

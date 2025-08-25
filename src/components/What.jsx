import React from "react";

const What = () => {
  return (
    <section className="text-center py-12 px-6 w-full">
      {/* Heading */}
      <h2 className="font-light text-2xl md:text-3xl mb-10">
        What You’ll Find Here
      </h2>

      {/* Keywords */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl mx-auto">
        <div>Adventure</div>
        <div>Wild</div>
        <div>Outdoor</div>
        <div>Extreme</div>
        <div>Waterfall</div>
        <div>Beard</div>
        <div>Muscle</div>
      </div>
    </section>
  );
};

export default What;


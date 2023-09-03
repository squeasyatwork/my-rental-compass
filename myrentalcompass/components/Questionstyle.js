import React from "react";

const Questionstyle = () => (
  <style jsx>{`
    @media (max-width: 640px) {
      /* Styles for screens up to 640px */
      .flex-col {
        flex-direction: column-reverse; /* Reverse column order */
      }
      .text-4xl {
        /* Adjust font size for headings */
        font-size: 2.5rem;
      }
      .text-3xl {
        font-size: 2rem;
      }
      .text-2xl {
        font-size: 1.8rem;
      }
      .w-[250px] {
        /* Adjust image width */
        width: 150px;
      }
      .h-[250px] {
        height: 150px;
      }
    }

    @media (min-width: 641px) and (max-width: 768px) {
      /* Styles for screens between 641px and 768px */
      .text-4xl {
        font-size: 3rem;
      }
      .text-3xl {
        font-size: 2.5rem;
      }
    }
  `}</style>
);

export default Questionstyle;

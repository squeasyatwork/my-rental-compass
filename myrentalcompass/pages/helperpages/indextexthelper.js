// CHECK FOR POSSIBLE ORIGINAL OF THIS FILE IN PUBLIC DIRECTORY

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section = ({
  id,
  imageSrc,
  altText,
  subheading,
  content,
  link,
  btnText,
}) => {
  return (
    <div id={id} className="flex flex-col items-center mx-3 section-container">
      <div className="bg-gray-200 w-96 h-44 flex rounded items-center justify-center mb-1">
        <Image
          src={imageSrc}
          width={150}
          height={100}
          alt={altText}
          loading="eager"
          className="mx-auto"
        />
      </div>
      <div className="yqa-subheading text-center w-96">{subheading}</div>
      <div className="copywrite-content mx-2 my-4 text-justify w-96 mb-6">
        {content.split("|||").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== content.split("|||").length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
      <div className="text-center">
        <Link href={link}>
          <button className="call-action-button">{btnText}</button>
        </Link>
      </div>
    </div>
  );
};

export default Section;

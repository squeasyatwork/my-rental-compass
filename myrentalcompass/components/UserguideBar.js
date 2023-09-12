import React, { useState } from 'react';
import Image from 'next/image';

const UserguideBar = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="mx-auto flex flex-col">
        <div className="flex flex-col justify-between items-center">
            <div className='flex'>
                <Image
                src="/information-icon.svg"
                alt="information"
                width={100}
                height={100}
                className="rounded-xl"
                />
            </div>
            <div className=' flex flex-col w-2 h-full bg-black'></div>
            <div className='flex'>
                <Image
                src="/information-icon.svg"
                alt="information"
                width={100}
                height={100}
                className="rounded-xl"
                />
                <button
                onClick={toggleDetails}
                className=" font-medium text-2xl px-3 py-1 rounded-md"
                >
                1.Before you leave...
                </button>
            </div>
            <div className='flex'>
                <button
                onClick={toggleDetails}
                className=" font-medium text-2xl px-3 py-1 rounded-md"
                >
                2.When you arrive...
                </button>
                <Image
                src="/information-icon.svg"
                alt="information"
                width={100}
                height={100}
                className="rounded-xl"
                />
            </div>
            <div className='flex'>
                <Image
                src="/information-icon.svg"
                alt="information"
                width={100}
                height={100}
                className="rounded-xl"
                />
                <button
                onClick={toggleDetails}
                className=" font-medium text-2xl px-3 py-1 rounded-md"
                >
                3.Found a property...
                </button>
            </div>
            <div className='flex flex-col'>
                <div className='flex'>
                    <Image
                    src="/information-icon.svg"
                    alt="information"
                    width={100}
                    height={100}
                    className="rounded-xl"
                    />
                    <Image
                    src="/information-icon.svg"
                    alt="information"
                    width={100}
                    height={100}
                    className="rounded-xl"
                    />
                </div>
                <button
                onClick={toggleDetails}
                className=" font-medium text-2xl px-3 py-1 rounded-md"
                >
                4. Making an appointment...
                </button>
            </div>
        </div>
        {showDetails && (
            <div className="mt-4">
            <div className="cursor-pointer">
                <h2 className="text-lg font-semibold">Section 1</h2>
                <p>Details about Section 1...</p>
            </div>
            <div className="cursor-pointer mt-2">
                <h2 className="text-lg font-semibold">Section 2</h2>
                <p>Details about Section 2...</p>
            </div>
            {/* Add more sections as needed */}
            </div>
        )}
    </div>
  );
};

export default UserguideBar;

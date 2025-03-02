import React from "react";

import UserGreeting from "@/components/atoms/UserGreeting/UserGreeting";

export const DashboardHeader = () => (
  <header className="fixed z-10 w-full items-center bg-white shadow dark:bg-gray-800 md:h-16 ">
    <div className="flex-center relative mx-auto flex h-full flex-col justify-center px-3">
      <div className="lg:max-w-68 relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
        {/* left section */}
        <div className="relative left-0 flex h-full w-3/4  items-center justify-start">
          <div className=" relative flex  h-16 py-5">
            <h1 className="text-xl font-bold leading-none flex items-center gap-2">
  
              <span className="text-yellow-700">Easy Generator</span>
            </h1>
          </div>
        </div>
        {/* right section */}
        <div className="relative ml-2 flex w-1/4 items-center justify-end p-1 sm:right-auto sm:mr-0">
          <UserGreeting />
        </div>
      </div>
    </div>
  </header>
);

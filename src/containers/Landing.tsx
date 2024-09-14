import React from 'react'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Hero from '@/components/Hero';
import { FlipWords } from '@/components/ui/flip-words';
import { socialItems } from '@/data';
import { Icon } from "@iconify/react";

const Landing = () => {
  return (
    <Hero>
      <div className="flex justify-center relative z-10">
        <div
          className="flex flex-rol w-full px-24 pt-20"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <div className=" w-full h-full flex flex-col justify-center items-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 pb-4 landing-small">
              Hello there,
            </h2>

            <div className="leading-snug tracking-wide font-bold pb-4">
              <h1 className="text-[40px] md:text-5xl lg:text-6xl">
                I&apos;m <span className="text-primary">Solomon.</span>
              </h1>
            </div>
            <div className="leading-snug tracking-wide font-bold pb-4">
              <h1 className="text-[40px] md:text-5xl lg:text-6xl">
                I build{" "}
                <FlipWords
                  words={["innovative", "creative", "beautiful", "real-world"]}
                  className="text-foreground"
                />
                solutions.
              </h1>
            </div>
            <p className="pb-4 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text2xl">
              A software developer and data scientist from Ghana.
            </p>
            <div className="flex flex-row gap-2">
              {socialItems.map((socialItem) => (
                <button
                  key={socialItem.name}
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#19142A,45%,#1e2631,55%,#19142A)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  <Icon icon={socialItem.icon} />
                </button>
              ))}
            </div>
          </div>
          {/* <div className="bg-red-600 h-full"></div> */}
        </div>
      </div>
    </Hero>
  );
};

export default Landing
import React, { Dispatch, SetStateAction } from 'react'
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import MagicButton from '../components/ui/magic-button';
import { SetPhase } from '@/lib/constants';

const Landing = ({
  setPhase,
}: {
  setPhase: SetPhase;
}) => {
  return (
    <>
      <div className="flex  justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic With Games
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Welcome To Akesi Kreation Color Hue Sorter Game"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text2xl">
            Arrange the color shades from lightest to darkest
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
              <MagicButton text="Get Started" onClick={() => setPhase(1)} />
      </div>
    </>
  );
};

export default Landing
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <section className="h-screen overflow-hidden relative">
      <svg
        width="426"
        height="426"
        viewBox="0 0 426 426"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="red-circle"
      >
        <circle cx="213" cy="213" r="213" fill="#FF3939" />
      </svg>
      <div className="">
        <StaticImage
          src="../assets/images/datsun-vector.png"
          alt="Illustrated Datsun 240z"
        />
      </div>
      <h1 className="text-6xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-13xl">
        Datsun 240z
      </h1>
      <p>
        designed by <em className="font-bold">Yoshihiko Matsuo</em>
      </p>

      <p>
        produced between <em className="font-bold">1969 to 1978</em>
      </p>
      <p className="">
        The Nissan S30 (sold in Japan as the Nissan Fairlady Z and in other
        markets as the Datsun 240Z, then later as the 260Z and 280Z) is the
        first generation of Z GT 3-door two-seat coupés, produced by Nissan
        Motors, Ltd. of Japan from 1969 to 1978. One of the most successful
        sports car lines ever produced, the trend-setting S30 was designed by a
        team led by Yoshihiko Matsuo, the head of Nissan's Sports Car Styling
        Studio.
      </p>

      {/* <div className="grid overflow-hidden lg:grid-cols-4">
        <svg
          width="418"
          height="418"
          viewBox="0 0 418 418"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="col-start-1 row-start-1 transform translate-x-1/3 xl:translate-x-2/3"
        >
          <circle cx="209" cy="209" r="209" fill="#FF3939" />
        </svg>

        <div className="col-start-1 md:col-span-3 md:col-start-1 lg:col-start-2 lg:col-span-2 row-start-1 self-center transform translate-x-12 lg:translate-x-0">
          <StaticImage
            src="../assets/images/datsun-vector.png"
            alt="Illustrated Datsun 240z"
          />
        </div>
        <div className="px-10 md:px-20 lg:px-10 col-start-1 col-span-4 lg:col-start-2 lg:col-span-3 row-start-1 self-end z-10">
          <h1 className="text-6xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-13xl">
            Datsun 240z
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-4 px-10 md:px-20">
        <div className="text-lg contents">
          <div className="hidden md:block row-start-1">
            <p>designed by</p>
            <p>
              <em className="font-bold">Yoshihiko Matsuo</em>
            </p>
            <p>produced between</p>
            <p>
              <em className="font-bold">1969 to 1978</em>
            </p>
          </div>
          <div className="block md:hidden">
            <p>
              designed by <em className="font-bold">Yoshihiko Matsuo</em>
            </p>
          </div>
        </div>
        <p className="md:col-span-4 lg:col-span-3 md:col-start-2">
          The Nissan S30 (sold in Japan as the Nissan Fairlady Z and in other
          markets as the Datsun 240Z, then later as the 260Z and 280Z) is the
          first generation of Z GT 3-door two-seat coupés, produced by Nissan
          Motors, Ltd. of Japan from 1969 to 1978. One of the most successful
          sports car lines ever produced, the trend-setting S30 was designed by
          a team led by Yoshihiko Matsuo, the head of Nissan's Sports Car
          Styling Studio.
        </p>
      </div> */}
    </section>
  );
};

export default Hero;

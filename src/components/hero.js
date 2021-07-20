import React from 'react';

const Hero = () => {
  return (
    <section className="hero-grid gap-2 h-screen w-screen ">
      <div className="red-circle col-start-2 col-span-4 row-start-1 row-span-3 mt-20" />
      <div></div>
      <div className="col-start-4 col-span-4 row-start-4">
        <h1 className="text-4xl lg:text-11xl 2xl:text-13xl">Datsun 240z</h1>
      </div>
      <div className="col-start-4 col-span-3 2xl:col-span-2 row-start-5 row-span-3">
        <p>
          The Nissan S30 (sold in Japan as the Nissan Fairlady Z and in other
          markets as the Datsun 240Z, then later as the 260Z and 280Z) is the
          first generation of Z GT 3-door two-seat coupés, produced by Nissan
          Motors, Ltd. of Japan from 1969 to 1978. One of the most successful
          sports car lines ever produced, the trend-setting S30 was designed by
          a team led by Yoshihiko Matsuo, the head of Nissan's Sports Car
          Styling Studio.
        </p>
      </div>
      <div className="col-start-2 col-span-2 row-start-5">
        <p>designed by Yoshihiko Matsuo</p>
        <p>produced between 1969 to 1978</p>
      </div>
    </section>
  );
};

export default Hero;

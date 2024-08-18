import React from 'react';
import Button from '@/components/ui/Atoms/button';

const PricingCTA = () => {
  return (
    <div className="mx-auto mt-20 flex hidden max-w-7xl flex-col items-center text-center text-white">
      <h1 className="font-poppins text-4xl font-bold xxs:text-2xl sm:text-4xl">
        Ready to create better products?
      </h1>
      <p className="mt-5 w-2/4 text-lg opacity-50 xxs:w-full xxs:p-2 xxs:text-sm sm:w-2/4 sm:p-0">
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,`}
      </p>
      <div className="mt-2">
        <Button
          title="Start Free Trial"
          colorClass="bg-gradient-to-r from-pink to-purple "
        ></Button>
      </div>
    </div>
  );
};

export default PricingCTA;

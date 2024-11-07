import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
  return (
    <div className='w-full flex justify-center  '>
      <div className='mt-[50px] lg:mt-[170px] lg:max-w-[774px] max-w-[300px] text-center '>
        <p className='font-bold  lg:text-[73px] text-[24px] lg:leading-[73px] px-[58px] py-[18px]  leading-[32px] lg:mb-[65px] mb-[30px]'>
          Awesosme UI Dark Template Sign Up Page
        </p>
        <Button className='bg-[#252432] text-[16px] leading-6 px-[38px] py-[18px] font-bold rounded-[8px]'>
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default page;

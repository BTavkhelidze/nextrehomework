'use client';
import { useParams } from 'next/navigation';
import React from 'react';

function Page() {
  const { id } = useParams();

  return (
    <div className='w-full flex justify-center mt-[100px]'>
      Your service number is: {id}
    </div>
  );
}

export default Page;

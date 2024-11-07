import React from 'react';

async function page({ params }) {
  const { id } = await params;
  console.log(id);
  return (
    <div className='w-full flex justify-center mt-[100px]'>
      your service number is : {id}
    </div>
  );
}

export default page;

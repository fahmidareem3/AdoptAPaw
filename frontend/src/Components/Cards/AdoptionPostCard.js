import React from 'react';
import Button from '../Button';
export default function AdoptionPostCard({ data, columnSize, columnSizeXl }) {
  return (
    <div
      className={`grid mb-[30px]   grid-cols-1 md:grid-cols-2 ${
        'lg:grid-cols-' + columnSize
      } ${'xl:grid-cols-' + columnSizeXl} gap-3 mx-auto `}
    >
      {data.map((item) => (
        <div className="bg-card-light py-3  custom-round flex justify-between px-3 donation-list-animation cursor-pointer ">
          <div className="w-[70%] flex flex-col justify-between">
            <div className="flex justify-between">
              <h1 className="text-primary font-extrabold text-[14px] md:text-[16px] md:leading-[18px] leading-[16px] tracking-tighter mr-3">
                {item.name}
              </h1>
              <Button
                text="View"
                brand={true}
                height={true}
                heightClass="h-[35px] md:h-[45px]"
                width={true}
                widthClass="w-[25px] md:w-[65px]"
                textSize={true}
                textSizeClass="text-[12px] md:text-[14px]"
              />
            </div>

            <div className="flex mt-2 mb-5">
              <img src="/assets/Icons/location.svg"></img>{' '}
              <h3 className="text-gray-light px-3 text-[14px]">
                {item.location}
              </h3>
            </div>
          </div>
          <div
            className="w-[110px] min-h-[100px] h-[100%]  ml-2 custom-round"
            style={{
              backgroundImage: `url("/assets/adoption/cat.jpg")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            key={item.id}
          ></div>
        </div>
      ))}
    </div>
  );
}
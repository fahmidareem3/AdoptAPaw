import { dblClick } from '@testing-library/user-event/dist/click';
import gsap from 'gsap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Features from './Features';

export default function AnimalProfileMid({ poster, data }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  return (
    <>
      {data && (
        <div className="mt-[40px] lg:mt-[60px] description-gallery-animation">
          <div className=" flex items-center justify-between my-3 ">
            <div className="inline-flex">
              <img src="/assets/tick.svg"></img>
              <h3
                className={`text-[12px] ${
                  data.availability ? `text-green` : `text-gray-light`
                } mx-2`}
              >
                {data.availability
                  ? 'Available for adoption'
                  : 'Unavailable for adoption'}
              </h3>
            </div>

            <img src="/assets/fav.svg" className="w-[20px]"></img>
          </div>
          <h1 className="text-[32px] font-black mb-5 text-primary tracking-tighter">
            {data.name}
          </h1>
          {poster !== 2 && (
            <>
              <div className="flex items-center justify-between text-[12px] mb-5">
                <h3 className="gray-dark">
                  Posted by
                  <span className="text-primary font-bold">
                    {/* {data.user.username ? data.user.username : 'Dummy'} */}
                  </span>
                </h3>
                <h3 className="gray-dark">19 June 2022</h3>
              </div>
              {/* {userInfo && data.availability && data.user.id != userInfo.id && (
                <Link
                  to={
                    userInfo
                      ? `/adoption/${data.id}/user/${userInfo.id}/createadoptionrequest`
                      : '/login'
                  }
                >
                  <Button text={`Adopt ${data.name}`} />
                </Link>
              )} */}
              {data.availability && (
                <Link
                  to={
                    userInfo
                      ? `/adoption/${data.id}/user/${userInfo.id}/createadoptionrequest`
                      : '/login'
                  }
                >
                  <Button text={`Adopt ${data.name}`} />
                </Link>
              )}
              {!data.availability && (
                <button
                  className="bg-gray-light cursor-not-allowed w-[100%] custom-round h-[55px] text-white"
                  disabled
                >
                  Adopt {data.name}
                </button>
              )}
            </>
          )}
        </div>
      )}{' '}
    </>
  );
}

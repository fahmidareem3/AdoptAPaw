import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import TextInput from '../Components/IO/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import Topbar from '../Components/Topbar';

export default function LoginPage() {
  useEffect(() => {
    gsap.from('.request-form-animation', {
      y: '+=60',
      opacity: 0
    });
    gsap.to('.request-form-animation', {
      y: '0',
      opacity: 1,
      stagger: 0.1
    });
  }, []);
  useEffect(() => {
    gsap.from('.request-form-image-animation', {
      opacity: 0
    });
    gsap.to('.request-form-image-animation', {
      opacity: 1,
      duration: 2
    });
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      if (userInfo.role[0].id === 1) {
        navigate('/dashboard');
      }
      if (userInfo.role[0].id === 2) {
        navigate('/home');
      }
    }
  }, [userInfo]);

  const submitHandler = () => {
    dispatch(login(email, password));
  };
  return (
    <>
      {loading && <Loader />}
      <div className=" lg:flex  lg:flex-row-reverse mb-[100px] lg:mb-[200px] justify-between lg:items-center lg:w-3/4 w-[90vw] mx-auto mt-[150px] lg:mt-[200px] ">
        <Topbar address={'Home/Login'} link={'/home'} />
        <img
          src="/assets/dogcat secondary.svg"
          className="w-[50vw] mx-auto lg:mr-5 mb-12 mt-[50px] lg:mt-0 md:w-[40vw] lg:w-[35vw] xl:w-[25vw] request-form-image-animation"
          alt="Dogcat Secondary"
        ></img>
        <div className="lg:w-[50%]">
          <h1 className="font-extrabold  text-[20px] lg:text-[24px] tracking-tight text-primary request-form-animation">
            Hey, Welcome back to adoptapaw !
          </h1>
          <h3 className="text-[14px] font-regular text-gray-light mb-10 request-form-animation">
            Login to adopt paws
          </h3>
          {error && (
            <Message
              message={"Username or Email doesn't exist !"}
              text={'Retry'}
              link={'/login'}
              variant={'danger'}
            />
          )}
          <div className="request-form-animation">
            <TextInput
              label="Email or Username"
              placeholder={'example@gmail.com or username'}
              type="email"
              data={email}
              setData={setEmail}
            />
          </div>
          <div className="request-form-animation">
            <TextInput
              label="Password"
              placeholder={'123456Easy'}
              type="password"
              data={password}
              setData={setPassword}
            />
          </div>
          <div className="request-form-animation " onClick={submitHandler}>
            <Button text="Login" />
          </div>
          <div className="mt-5 request-form-animation flex justify-between">
            <h3 className="text-gray-light tracking-tight text-[14px]">
              Don't have an account ?
              <Link to="/registration">
                <span className="font-bold text-brand px-1 cursor-pointer">
                  Signup
                </span>
              </Link>
            </h3>
            <Link to="/forgot">
              <h3 className="text-primary tracking-tight text-[14px]">
                Forgot password ?
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Components/Button';
import TextInput from '../Components/IO/TextInput';
import UploadLoader from '../Components/UploadLoader/UploadLoader';

const DpUpload = ({ rawData, setData, setUploading, userInfo, id }) => {
  const uploadFileHandler = async (e) => {
    const BASE_URL = 'http://localhost:8081';

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.jwtdto.accessToken}`
        }
      };

      const { data } = await axios.post(
        `${BASE_URL}/api/files/upload`,
        formData,
        config
      );

      setData(data);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };
  return (
    <div className="relative flex items-center justify-center">
      <label
        htmlFor={id}
        style={{
          backgroundImage: `url(${rawData})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        className="text-[12px] bg-brand  mt-5 lg:mt-0 flex items-center justify-center mx-auto w-[50vw]   h-[50vw] lg:w-[300px]  lg:h-[300px] xl:w-[400px]  xl:h-[400px] cursor-pointer font-bold text-[transparent] py-[35px] px-[25px]  rounded-[100%]"
      >
        {!rawData && (
          <h1 className="uppercase font-bold text-[70px] lg:text-[124px] text-white">
            {userInfo.username.split('')[0]}
          </h1>
        )}
      </label>
      <img
        src="/assets/icons/edit.svg"
        className="absolute mt-[50%] w-[30px]"
      ></img>
      <input
        id={id}
        onChange={uploadFileHandler}
        required
        style={{ visibility: 'hidden' }}
        className="absolute"
        type={'file'}
        accept="image/png, image/gif, image/jpeg"
      ></input>
    </div>
  );
};

export default function UserProfileEditPage() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const [dp, setDp] = useState('');
  const [uploading, setUploading] = useState('');
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [password, setpPassword] = useState();
  const [bio, setBio] = useState();
  return (
    <div className="lg:w-3/4 w-[90vw]   mx-auto mt-[100px] mb-[40px] lg:flex justify-between ">
      {uploading && (
        <div className="fixed z-[999] top-[80px] bg-primary-light bg-opacity-25 left-0 right-0 bottom-0 flex items-center justify-center">
          <UploadLoader />
        </div>
      )}
      <DpUpload
        rawData={dp}
        setData={setDp}
        setUploading={setUploading}
        id={'dpid'}
        userInfo={userInfo}
      />
      <div className="lg:w-[60%] lg:ml-5">
        <TextInput
          type={'text'}
          label={'Name'}
          data={userInfo.name}
          setData={setName}
        />
        <div className="flex flex-col my-3 request-form-animation">
          <label className="font-bold text-primary text-[14px]">Email</label>
          <input
            type="text"
            placeholder={'Okay'}
            value={userInfo.email}
            required
            disabled
            className="bg-input py-4 cursor-not-allowed custom-round px-4 my-3 font-[500] text-[14px] focus:border-brand active:border-brand focus:border-[1px] active:border-[1px] outline-none"
          ></input>
        </div>
        <div className="flex flex-col my-3 request-form-animation">
          <label className="font-bold text-primary text-[14px]">Username</label>
          <input
            type="text"
            placeholder={'Okay'}
            value={userInfo.username}
            required
            disabled
            className="bg-input py-4 cursor-not-allowed custom-round px-4 my-3 font-[500] text-[14px] focus:border-brand active:border-brand focus:border-[1px] active:border-[1px] outline-none"
          ></input>
        </div>
        <TextInput
          type={'text'}
          label={'Location'}
          data={userInfo.name}
          setData={setName}
        />
        <TextInput
          type={'password'}
          label={'Password'}
          data={password}
          setData={setpPassword}
        />
        <div className="flex flex-col my-3 request-form-animation">
          <label className="font-bold text-primary text-[14px]">Bio</label>
          <textarea
            type="text"
            placeholder={'Okay'}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
            className="bg-input py-4  custom-round px-4 my-3 font-[500] text-[14px] focus:border-brand active:border-brand focus:border-[1px] active:border-[1px] outline-none"
          ></textarea>
        </div>
        <Button text={'Update Profile'} />
      </div>
    </div>
  );
}

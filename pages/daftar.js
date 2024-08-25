import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";
import { getData } from '../utils/fetchData';
import parse from 'html-react-parser';

export default function Daftar(){

    const [fotoBrosur, setFotoBrosur] = useState([]);
    const [info, setInfo] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await getData(`api/v1/cms/pendaftaran`);
          setInfo(parse(res.data[0].info));
          setFotoBrosur(res.data[0].image.name);
        } catch (err) {}
      };
      fetchData();
    }, []);

    const openPopup = (image) => {
      setSelectedImage(image);
      setPopupVisible(true);
    };

    const closePopup = () => {
      setPopupVisible(false);
      setSelectedImage(null);
    };

    return (
      <div className="h-[900px]">
        <div className="h-[700px]">
          <Navbar />
          <div className="flex">
            <img 
              className="m-10 h-[600px] cursor-pointer rounded-lg border-2 border-black"
              src={info ? "images/brosur.jpeg" : `${process.env.NEXT_PUBLIC_API}/${fotoBrosur}`}
              alt="Brosur"
              onClick={() => openPopup(`${process.env.NEXT_PUBLIC_API}/${fotoBrosur}`)}
            />
            <div className="ml-5 mt-10">
              <p>{'Surat kelulusan SD' || info }</p>
            </div>
          </div>
        </div>
        <Footer />

        {popupVisible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={closePopup}
          >
            <div className="relative">
              <img src={info ? "images/brosur.jpeg" : `${process.env.NEXT_PUBLIC_API}/${fotoBrosur}`} 
              alt="Popup" className="max-w-[80%] max-h-[80%] m-auto" />
              <span
                className="absolute top-2 right-2 text-white text-3xl cursor-pointer"
                onClick={closePopup}
              >
                &times;
              </span>
            </div>
          </div>
        )}
      </div>
    );
}

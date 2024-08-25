import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/fetchData';

export default function Statistics() {
  const [kegiatan, setKegiatan] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData('api/v1/cms/galeri');
        console.log(res);
        setKegiatan(res.data);
      } catch (err) {
        console.error(err);
      }
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
    <div className="flex flex-col mx-20">
      <h1 className="mx-auto my-5 text-3xl text-black font-sans font-bold">
        Galeri Kegiatan
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {kegiatan.length === 0 ? (
          <>
            {['galeri1.jpeg', 'galeri2.jpeg', 'galeri3.jpeg', 'galeri4.jpeg', 'galeri5.jpeg', 'galeri6.jpeg'].map((img, index) => (
              <div key={index} className="w-full flex space-x-10 justify-around ml-10">
                <div>
                  <div
                    className="w-[300px] h-[190px] overflow-hidden rounded-lg border-2 border-white hover:drop-shadow-lg transition-shadow duration-400 hover:scale-125 cursor-pointer"
                    onClick={() => openPopup(`/images/${img}`)}
                  >
                    <img src={`/images/${img}`} alt={`Galeri ${index + 1}`} />
                  </div>
                  <p className="flex justify-center text-black font-sans hover:hidden">Kegiatan {index + 1}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          kegiatan.map((item, index) => (
            <div key={index}>
              <div
                className="w-[300px] h-[190px] overflow-hidden rounded-lg border-2 border-white hover:drop-shadow-lg transition-shadow duration-400 hover:scale-125 cursor-pointer"
                onClick={() => openPopup(`${process.env.NEXT_PUBLIC_API}/${item.image.name}`)}
              >
                <img src={`${process.env.NEXT_PUBLIC_API}/${item.image.name}`} alt={item.kegiatan} />
              </div>
              <p className="flex justify-center text-black font-sans hover:hidden">{item.kegiatan}</p>
            </div>
          ))
        )}
      </div>

      {popupVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div className="relative">
            <img src={selectedImage} alt="Popup" className="max-w-[80%] max-h-[80%] m-auto" />
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
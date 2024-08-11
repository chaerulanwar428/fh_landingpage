import React,{useState,useEffect} from 'react';
import { getData } from '../../utils/fetchData';

export default function Statistics() {
  const [kegiatan, setKegiatan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(
          `api/v1/cms/galeri`,
        );
        console.log(res)
        setKegiatan(res.data)
      } catch (err) {}
    };

    fetchData();
  }, []);


  return (
    <div className='flex flex-col mx-20'>
      <h1 className='mx-auto my-5 text-3xl text-black font-sans font-bold'>Galeri Kegiatan</h1>
      <div class="grid grid-cols-3 gap-5">
      <div className="w-full flex space-x-10 justify-around ml-10">
            <div>
            <div className='w-[300px] h-[190px] overflow-hidden rounded-lg border-2 border-white hover:drop-shadow-lg transition-shadow duration-400 hover:scale-125'>
            <img src="images/galeri1.jpeg"/>
            </div>
            <p className='flex justify-center text-black font-sans hover:hidden'>Halal bi halal</p>
          </div>
      </div>
      <div className="w-full flex space-x-10 justify-around ml-10">
            <div>
            <div className='w-[300px] h-[190px] overflow-hidden rounded-lg border-2 border-white hover:drop-shadow-lg transition-shadow duration-400 hover:scale-125'>
            <img src="images/galeri2.jpeg"/>
            </div>
            <p className='flex justify-center text-black font-sans hover:hidden'>Hajatan</p>
          </div>
      </div>
      <div className="w-full flex space-x-10 justify-around ml-10">
            <div>
            <div className='w-[300px] h-[190px] overflow-hidden rounded-lg border-2 border-white hover:drop-shadow-lg transition-shadow duration-400 hover:scale-125'>
            <img src="images/galeri3.jpeg"/>
            </div>
            <p className='flex justify-center text-black font-sans hover:hidden'>Hajatan</p>
          </div>
      </div>
      <div className="w-full flex space-x-10 justify-around ml-10">
            <div>
            <div className='w-[300px] h-[190px] overflow-hidden rounded-lg border-2 border-white hover:drop-shadow-lg transition-shadow duration-400 hover:scale-125'>
            <img src="images/galeri4.jpeg"/>
            </div>
            <p className='flex justify-center text-black font-sans hover:hidden'>Hajatan</p>
          </div>
      </div>
      <div className="w-full flex space-x-10 justify-around ml-10">
            <div>
            <div className='w-[300px] h-[190px] overflow-hidden rounded-lg border-2 border-white hover:drop-shadow-lg transition-shadow duration-400 hover:scale-125'>
            <img src="images/galeri5.jpeg"/>
            </div>
            <p className='flex justify-center text-black font-sans hover:hidden'>Hajatan</p>
          </div>
      </div>
      <div className="w-full flex space-x-10 justify-around ml-10">
            <div>
            <div className='w-[300px] h-[190px] overflow-hidden rounded-lg border-2 border-white hover:drop-shadow-lg transition-shadow duration-400 hover:scale-125'>
            <img src="images/galeri6.jpeg"/>
            </div>
            <p className='flex justify-center text-black font-sans hover:hidden'>Hajatan</p>
          </div>
      </div>
      </div>
    </div>
  );
}

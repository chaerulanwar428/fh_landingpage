import React,{useState,useEffect} from 'react';
import { getData } from '../../utils/fetchData';
import parse from 'html-react-parser';

export default function Brand() {

  const [fotoProfile, setFotoProfile] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(
          `api/v1/cms/profile`,
        );
        setProfile(parse(res.data[0].tentang))
        setFotoProfile(res.data[0].image.name)
      } catch (err) {}
    };

    fetchData();
  }, []);


  const dataprofile = ["Yayasan Fathatul Hidayah, yang terletak di Jl. Fatahillah Gg. Masjid Rt 12 / Rw 05, Perbutulan, Kec. Sumber, Kab. Cirebon, Provinsi Jawa Barat, didirikan pada tahun 2008 oleh Zaenal Abidin. Yayasan ini memulai perjalanannya dengan mendirikan TK IT Fathatul Hidayah, yang berkembang pesat berkat komitmen terhadap pendidikan berkualitas dan pendekatan holistik dalam pembelajaran. Melihat perkembangan yang signifikan dan kebutuhan akan pendidikan lanjutan, Zaenal Abidin memperluas yayasan dengan mendirikan SMP IT Fathatul Hidayah. Dengan menggunakan Kurikulum 2013 dan berakreditasi B, SMP IT Fathatul Hidayah terus berupaya memberikan pendidikan yang unggul dan berintegritas tinggi, sejalan dengan visi yayasan untuk mencetak generasi berakhlak mulia dan berdaya saing global.Komitmen Yayasan Fathatul Hidayah terhadap pendidikan terus mendorong peningkatan kualitas dan inovasi dalam metode pengajaran, memastikan setiap siswa mendapatkan pendidikan terbaik untuk masa depan yang gemilang."];

  const apiUrl = process.env.NEXT_PUBLIC_API;
  const defaultImageSrc = '/images/maskot.png';

  const imageSrc = fotoProfile == undefined ? `${apiUrl}/${fotoProfile}` : defaultImageSrc;

  return (
    <div className='px-[40px] h-[500px] mt-10' >
      <h1 className='pl-[200px] mb-5 text-2xl text-black font-sans font-bold'>Yayasan Fathatul hidayah</h1>
      <div className='flex justify-around'>
        <div className='w-[700px] p-3'>
          {profile == false  ? dataprofile : profile}
          </div>
          <div className='h-[300px] text-black font-sans border-2 border-[#3586ff] rounded-lg overflow-hidden'>
            <img 
            className='w-[300px]'
            src={imageSrc}
             />           
          </div>
        </div>
    </div>
  );
}
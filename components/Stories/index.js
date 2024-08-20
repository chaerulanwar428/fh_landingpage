import React,{useState,useEffect} from 'react';
import { getData } from '../../utils/fetchData';

export default function Stories() {

  const [prestasi, setPrestasi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(
          `api/v1/cms/prestasi`,
        );
        setPrestasi(res.data)
      } catch (err) {}
    };

    fetchData();
  }, []);




  return (
    <div className='flex flex-col'>
    <h1 className='mx-auto my-5 text-3xl text-black font-sans font-bold'>Testimoni Prestasi</h1>
    <div className='flex justify-around'>

    {prestasi == false  ? 
        <div className='w-full flex justify-around'>
              <div className='border-2 border-[#3586ff] rounded-lg w-[200px] h-[500px] flex flex-col p-2 overflow-hidden'>
              <div className='rounded-full w-[50px] mx-auto'>
              <img  className="rounded-full" src="images/testimoni.jpeg" />         
              </div>
              <div className='mx-auto'>
                <p className='text-black font-sans'>
                Ikhwal Nur Syamsi
                </p>
              </div>
              <div>
                <p className='text-black font-sans'>
                <q>
                Saya bersyukur bisa memenangkan Pentas PAI Se-kabupaten Cirebon dan terimakasih kepada guru fathatul hidayah yang telah membimbing
                sehingga saya bisa meraih prestasi ini.
                </q>
                </p>
              </div>
            </div> 
              <div className='border-2 border-[#3586ff] rounded-lg w-[200px] h-[500px] flex flex-col p-2 overflow-hidden'>
              <div className='rounded-full w-[50px] mx-auto'>
              <img  className="rounded-full" src="images/testimoni.jpeg" />        
              </div>
              <div className='mx-auto'>
                <p className='text-black font-sans'>
                Ikhwal Nur Syamsi
                </p>
              </div>
              <div>
                <p className='text-black font-sans'>
                <q>
                Saya bersyukur bisa memenangkan Pentas PAI Se-kabupaten Cirebon dan terimakasih kepada guru fathatul hidayah yang telah membimbing
                sehingga saya bisa meraih prestasi ini.
                </q>
                </p>
              </div>
            </div> 
              <div className='border-2 border-[#3586ff] rounded-lg w-[200px] h-[500px] flex flex-col p-2 overflow-hidden'>
              <div className='rounded-full w-[50px] mx-auto'>
              <img  className="rounded-full" src="images/testimoni.jpeg" />               
              </div>
              <div className='mx-auto'>
                <p className='text-black font-sans'>
                Ikhwal Nur Syamsi
                </p>
              </div>
              <div>
                <p className='text-black font-sans'>
                <q>
                Saya bersyukur bisa memenangkan Pentas PAI Se-kabupaten Cirebon dan terimakasih kepada guru fathatul hidayah yang telah membimbing
                sehingga saya bisa meraih prestasi ini.
                </q>
                </p>
              </div>
            </div> 
    </div>
    : 
    prestasi.map((item, index) => {
        return (
          <div key={index} className='border-2 border-[#3586ff] rounded-lg w-[200px] h-[500px] flex flex-col p-2 overflow-hidden'>
            <div className='rounded-full w-[50px] mx-auto'>
            <img className='rounded-full' src={`${process.env.NEXT_PUBLIC_API}/${item.image.name}`} />         
            </div>
            <div className='mx-auto'>
              <p className='text-black font-sans'>
                {item.name}
              </p>
            </div>
            <div>
              <p className='text-black font-sans'>
              <q>
              {item.testimoni}
              </q>
              </p>
            </div>
          </div>
       );
      })}
  
    </div>
    </div>
  );
}

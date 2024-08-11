import React,{useState,useEffect} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";
import { getData } from '../utils/fetchData';
import parse from 'html-react-parser';

export default function Daftar(){

    const [fotoBrosur, setFotoBrosur] = useState([]);
    const [info, setInfo] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await getData(
            `api/v1/cms/pendaftaran`,
          );
          setInfo(parse(res.data[0].info))
          setFotoBrosur(res.data[0].image.name)
        } catch (err) {}
      };
  
      fetchData();
    }, []);


    


    return(
    <div className="h-[900px]">
        <div className="h-[700px]" >
            <Navbar />

            {info == false ?
            <div className="flex">
            <img 
            className="h-[400px]"
            src="images/brosur.jpeg" />
            <div className="ml-5">
            <p>Surat kelulusan SD</p>
        </div>
        </div> 
            :
            <div className="flex">
                <img 
                className="h-[400px]"
                src={`${process.env.NEXT_PUBLIC_API}/${fotoBrosur}`} />
                <div className="ml-5">
                <p>{info}</p>
            </div>
            </div> 
            }      
        </div>
        <Footer />
    </div>
)}
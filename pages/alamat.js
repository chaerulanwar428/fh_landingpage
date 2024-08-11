import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

export default function Alamat(){

    return(
    <div className="h-[900px]">
        <div className="h-[700px]" >
            <Navbar />
            <div >
                <h1 className='flex justify-center text-2xl my-10'>Alamat Fathatul Hidayah</h1>
                <div className='flex justify-center'>      
                <iframe 
                width="500" height= "350" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7924.308869306508!2d108.48055378589189!3d-6.751012568488084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1f257e22b425%3A0x7e0c631a17ea0cb9!2sSMP%20IT%20Fathatul%20Hidayah!5e0!3m2!1sid!2sid!4v1718651630115!5m2!1sid!2sid"
                frameborder= "0" allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                web-share" allowfullscreen></iframe>.
                </div>      
                <p className='flex justify-center my-10'>Alamat : Jl.Fatahillah Gg. Masjid Rt 12 / Rw 05 Kel. Perbutulan Kec. Sumber Kab. Cirebon Kode Pos : 45613</p>
            </div>       
        </div>
        <Footer />
    </div>
)}
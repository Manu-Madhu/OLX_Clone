import React from "react";
import '../App'
import FooterSlide from "./FooterSlide";
import {GrFacebookOption,GrInstagram,GrTwitter} from "react-icons/gr";

const Footer = () => {
    const popular  =['Kolkata','Mumbai','Chennai','Punne'];
    const Trending  =['Bhubaneshwar','Hydrabad','Candigarh','nashik'];
    const About  =['About OLX Group','Carres','Contact Us','OLXPeople','Waah Jobs'];
    const Olx  =['Help','Sitemap','legal & Privacy information','Blogs','Vulnerability Program','OLX Autos Sell Car'];
   
  return (
    <>
    <div className="bg-gray-100">
    <div className="container mx-auto grid grid-cols-5 items-start justify-between bg-gray-100  p-3 md:px-[100px]">
        <FooterSlide popular={popular} heading='Popular Locations'/>
        <FooterSlide popular={Trending} heading='Trending Locations'/>
        <FooterSlide popular={About} heading='About Us'/>
        <FooterSlide popular={Olx} heading='OLX'/>
        <div>
            <div className="font-bold">Follow Us</div>
            <ul className="pt-3 text-gray-400 flex items-start gap-2">
                <li><GrFacebookOption  size={18}/></li>
                <li><GrInstagram  size={18}/></li>
                <li><GrTwitter  size={18}/></li>
            </ul>
            <div className="md:flex md:flex-row flex flex-col gap-3 bottom-0 md:mt-20">
                <img src={require('../Assets/apple.png')} alt="" className="w-20 rounded"/>
                <img src={require('../Assets/play.jpg')} alt="" className="w-20 rounded"/>
            </div>
        </div>
      </div>
    </div>
    <div className="Footer">
     <div className="container mx-auto flex justify-between text-xs p-3 text-white md:px-[100px]">
      <div className="text-white felx felx-col">
        <div>Other Countries</div>
        <div className="my-2">
            Indonesiac - Pakistan - South Africa
        </div>
      </div>
      <div>
        <span>All right reserverd @ 2006-2023 OLX</span>
      </div> 
     </div>
    </div>
    </>
  );
};

export default Footer;

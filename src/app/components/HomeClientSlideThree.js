import image3 from "../../../public/slide-3.jpg"

import Image from "next/image"


export default function SlideClientThree(){
    return (
        <>

<div className="grid-center">

<Image className="embla__slide__img" src={image3} alt="Your alt text"/>
               
               <div className="home-revolution-image col-8-13"></div>
               <div className="home-revolution-text col-1-8">
               <h1 className="purple">Headline</h1>
               <h4 className="">Text Lorem Ipsum </h4>
               <div href={"/solution"} className="btn-10">
                   <div className="text-2">Button CTA</div>
                   <div className="">
                       <span className="material-symbols-rounded">arrow_forward</span>
                   </div>
               </div>
               </div>                

           </div>

        </>
    );


};
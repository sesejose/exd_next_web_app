import Link from "next/link";
import Image from "next/image";
import whatsaap_purple from "../../../public/whatsaap_purple.svg"
import linkedin_purple from "../../../public/linkedin_purple.svg"

export default function AboutMeetOurTeam() {
    return (
      <>
      <div className="wide ptb-large">
  
          <div id="meet-our-team">
  
            <div className="grid-center">
                <div className="col-3-11 text-center"><h2>Meet our team</h2></div>
            </div>

            <div className="grid-blog">
                {/* <div className="col-12 peter-lasse-container ptb-medium"> */}

                {/* Jan  */}
                <div className="team-member">
                    <div className="fit-content m-auto">
                        <div className="flex-column-center">
                            <div className="profile-picture jan-pic"></div>
                            <div className="flex-column-center text-center pt">
                                <h4>Jan Brøndum</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Amet nisi curabitur fusce porta augue vestibulum neque ullamcorper.</p>
                                <div className="flex-row-center contact-icons">
                                    <Link href={"http://www.linkedin.com"} target="_blank" className="social">
                                        {/* <Image src={linkedin_purple} alt="linkedin"/> */}
                                        
                                    </Link>
                                    <Link href={"mailto:jb@exd.dk"} className="btn-secondary">
                                        <div>jb@exd.dk</div>
                                        <span className="material-symbols-rounded">mail</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* José */}
                <div className="team-member">
                    <div className="fit-content m-auto">
                        <div className="flex-column-center">
                            <div className="profile-picture jose-pic"></div>
                            <div className="flex-column-center text-center pt">
                                <h4>José Francisco Sesé</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Amet nisi curabitur fusce porta augue vestibulum neque ullamcorper.</p>
                                <div className="flex-row-center contact-icons">
                                    <Link href={"http://www.linkedin.com"} target="_blank" className="social">
                                        {/* <Image src={linkedin_purple} alt="linkedin"/> */}
                                        
                                    </Link>
                                    <Link href={"mailto:js@exd.dk"} className="btn-secondary">
                                        <div>js@exd.dk</div>
                                        <span className="material-symbols-rounded">mail</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Max */}
                <div className="team-member">
                    <div className="fit-content m-auto">
                        <div className="flex-column-center">
                            <div className="profile-picture max-pic"></div>
                            <div className="flex-column-center text-center pt">
                                <h4>Max Peter Lundstrøm</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Amet nisi curabitur fusce porta augue vestibulum neque ullamcorper.</p>
                                <div className="flex-row-center contact-icons">
                                    <Link href={"http://www.linkedin.com"} target="_blank" className="social">
                                        {/* <Image src={linkedin_purple} alt="linkedin"/> */}
                                        
                                    </Link>
                                    <Link href={"mailto:ml@exd.dk"} className="btn-secondary">
                                        <div>ml@exd.dk</div>
                                        <span className="material-symbols-rounded">mail</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Markus  */}
                <div className="team-member">
                    <div className="fit-content m-auto">
                        <div className="flex-column-center">
                            <div className="profile-picture markus-pic"></div>
                            <div className="flex-column-center text-center pt">
                                <h4>Markus Hoffman Lund</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Amet nisi curabitur fusce porta augue vestibulum neque ullamcorper.</p>
                                <div className="flex-row-center contact-icons">
                                    <Link href={"http://www.linkedin.com"} target="_blank" className="social">
                                        {/* <Image src={linkedin_purple} alt="linkedin"/> */}
                                        
                                    </Link>
                                    <Link href={"mailto:mhl@exd.dk"} className="btn-secondary">
                                        <div>mhl@exd.dk</div>
                                        <span className="material-symbols-rounded">mail</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lasse  */}
                <div className="team-member">
                    <div className="fit-content m-auto">
                        <div className="flex-column-center">
                            <div className="profile-picture lasse-pic"></div>
                            <div className="flex-column-center text-center pt">
                                <h4>Lasse Koch</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Amet nisi curabitur fusce porta augue vestibulum neque ullamcorper.</p>
                                <div className="flex-row-center contact-icons">
                                    <Link href={"http://www.linkedin.com"} target="_blank" className="social">
                                        {/* <Image src={linkedin_purple} alt="linkedin"/> */}
                                        
                                    </Link>
                                    <Link href={"mailto:pr@exd.dk"} className="btn-secondary">
                                        <div>pr@exd.dk</div>
                                        <span className="material-symbols-rounded">mail</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Peter */}
                <div className="team-member">
                    <div className="fit-content m-auto">
                        <div className="flex-column-center">
                            <div className="profile-picture peter-pic"></div>
                            <div className="flex-column-center text-center pt">
                                <h4>Peter Ravnholt</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Amet nisi curabitur fusce porta augue vestibulum neque ullamcorper.</p>
                                <div className="flex-row-center contact-icons">
                                    <Link href={"http://www.linkedin.com"} target="_blank" className="social">
                                        {/* <Image src={linkedin_purple} alt="linkedin"/> */}

                                    </Link>
                                    <Link href={"mailto:pr@exd.dk"} className="btn-secondary">
                                        <div>pr@exd.dk</div>
                                        <span className="material-symbols-rounded">mail</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
               

                {/* </div> */}
            </div>
        </div>
    </div>
</>
);

}
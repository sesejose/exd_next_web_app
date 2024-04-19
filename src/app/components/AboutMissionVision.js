import Link from "next/link";
// import Image from "next/image";
// import home_arrow_btn_hero from "../../../public/home_arrow_btn_hero.svg"

export default function AboutMissionVision() {
  return (
    <>
    <div className="wide zero">

        <div id="about-mission-vision">

            <div className="grid-center">
               
                {/* <div className="vision-container col-12"> */}
                    <div className="vision col-1-6">
                        <p className="">Vision</p>
                        <h2>We enable a great employee Experience</h2>
                    </div>
                    <div className="vision-explained col-7-13">
                        <p>At EXD Experience Design, we envision a paradigm shift in how technology influences the corporate landscape. While businesses traditionally focus on enhancing customer experience, our vision extends to harnessing the untapped potential technology brings to Employee Experience (EX). We believe that technology should empower, not hinder, the daily work experience. Happy employees are the cornerstone of organizational success, creating a ripple effect of high-quality service and satisfied customers.</p>
                    </div>
                {/* </div> */}

            </div>

            <div className="reverse grid-center">

                {/* <div className="mission-container col-12"> */}
                <div className="mission-explained col-1-6">
                        <p>At EXD Experience Design, we champion the unsung heroes of organizations—employees. Our mission is to elevate the Employee Experience through seamless collaboration among support functions. Using value streams and modern digital platforms, we craft efficient, mobile-centric solutions, driving tangible value for your workforce.</p>
                    </div>
                    <div className="mission col-7-13">
                        <p className="">Mission</p>
                        <h2>We remove employee friction with great Design and Mobility</h2>
                    </div>
                {/* </div> */}

            </div>

        </div>

    </div>
    </>
  );
}

import Link from "next/link";
// import Image from "next/image";


export default function FourmeIntro() {
    return (
        <>
        <div className="wide">
            {/* <div id="fourme-intro" className="flex-column-center">
                <div className="fourme-intro"></div>
                <p className="counter bold">4me Specialist view</p>
            </div> */}

            <section className="flex-column-center w-100">
                <div className="video-container">
                    <video id="fourme-intro" poster="/poster.jpg" controls preload="none" loop muted className="fourme-intro">
                        <source src="/fourme_self_service_desktop.mp4" type="video/mp4" />
                        <p>Your browser does not support the video tag.</p>
                    </video>
                </div>
                <p className="counter bold">4me Specialist & End-user view</p>
            </section>

        </div>
        </>
    );
}


// width="320" height="171" 
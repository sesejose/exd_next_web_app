
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

            <div className="flex-column-center">
                <video id="fourme-intro" width="320" height="240" controls preload="none" loop muted autoPlay className="fourme-intro">
                    <source src="/fourme_self_service_desktop.mp4" type="video/mp4" />
                    {/* <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    /> */}
                    <p>Your browser does not support the video tag.</p>
                </video>
                <p className="counter bold">4me Specialist & End-user view</p>
            </div>

        </div>
        </>
    );S
}

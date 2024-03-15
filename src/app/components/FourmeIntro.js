
import Link from "next/link";
// import Image from "next/image";


export default function FourmeIntro() {
    return (
        <>
        <div className="wide ptb-large">
            <div id="fourme-intro" className="grid-center">
                <div className="col-3-11 fourme-intro"></div>
            </div>
            <div className="grid-center">
                <Link href={'https://www.4me.com/videos/'} target="_blank" className="btn-secondary col-5-9">
                    Link to videos in 4me
                </Link>
            </div>
        </div>
        </>
    );
}

import { Link } from 'next-view-transitions'
// import Link from "next/link"

export default function SolutionReady() {
    return (
        <>

        <div className="wide">
            <div id="solution-ready">
                <div className="grid flex-column-center gap-2">
                    <div className="col-3-11">
                        <h4 className="ptb">At EXD Experience Design, we redefine workplace experiences with innovative solutions. Our Digital Platforms, OutSystems and 4me, are the pillars of this transformation. </h4>
                        <div className="text-1 ptb">Discover how OutSystem revolutionizes mobile UX, while 4me simplifies service management. Dive into the future of workplace efficiency.
                        <br></br>Ready to Elevate?</div>
                        <Link href={"/products"} className="btn-purple">
                            <div className="text-2">Learn more</div>
                            <div className="">
                                <span className="material-symbols-rounded">arrow_forward</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
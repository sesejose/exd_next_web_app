import { Link } from 'next-view-transitions'
// import Link from "next/link"

export default function SolutionReady() {
    return (
        <>

        <div className="wide">
            <div id="solution-ready">
                <div className="grid flex-column-center gap-2">
                    <div className="col-3-11">
                        <h4 className="ptb">At EXD Experience Design, we redefine workplace experiences with innovative solutions. Our Digital Platforms, 4me and Autom Mate, are the pillars of this transformation.</h4>
                        <div className="text-1 ptb">Explore the power of 4me in streamlining service management and discover how Autom Mate boosts productivity and efficiency. Step into the future of workplace optimization.
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
import { Link } from 'next-view-transitions'
// import Link from "next/link"

export default function FourmeRewards() {
    return (
        <>
        <div className="wide">

            <div id="fourme-rewards-title">
                
                    <div className="grid flex-column-center">
                        <div className="col-3-11 ptb-mobile-medium">
                            <h3 className="">Recognition and Rewards</h3>
                            <div className="text-1 ptb">Click image to read more</div>
                            <Link href={"/products"} className="btn-secondary m-auto">
                                <div className="text-2">See Recognitions</div>
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
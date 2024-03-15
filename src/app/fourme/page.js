'use client'

import FourmeHero from "../components/FourmeHero";
import FourmeMobile from "../components/FourmeMobile";
import FourmeSiam from "../components/FourmeSiam";
import FourmeAdvantages from "../components/FourmeAdvantages";
import FourmeAttributes from "../components/FourmeAttributes";
import FourmeOptimize from "../components/FourmeOptimize";
import FourmeRewards from "../components/FourmeRewards";
import FourmeIntro from "../components/FourmeIntro";

export default function FourMe() {
    return (
        <>
            <FourmeHero></FourmeHero>
            <FourmeIntro></FourmeIntro>
            <FourmeMobile></FourmeMobile>
            <FourmeSiam></FourmeSiam>
            <FourmeAdvantages></FourmeAdvantages>
            <FourmeAttributes></FourmeAttributes>
            <FourmeOptimize></FourmeOptimize>
            <FourmeRewards></FourmeRewards>
        </>
    )
}
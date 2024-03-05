
import ProductsBenefit from "../components/ProductsBenfit"
import ProductsHero from "../components/ProductsHero"
import ProductsIntro from "../components/ProductsIntro"
import ProductsParallax from "../components/ProductsParallax"

export default function Products() {
    return (
        <>
            <ProductsHero></ProductsHero>
            <ProductsIntro></ProductsIntro>
            <ProductsParallax></ProductsParallax>
            <ProductsBenefit></ProductsBenefit>
        </>
    )
}
import { useRetailers } from "./RetailerDataProvider.js"
import { Retailer } from "./Retailer.js"

const contentTarget = document.querySelector(".retailers")

const render = retailersToRender => {
    const retailers = useRetailers()

    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {
            // Find the related computer for the current retailer

            return Retailer(retailerObject)
        }
    ).join("")
}

export const RetailerList = () => {
    const retailers = useRetailers()

    render(retailers)
}
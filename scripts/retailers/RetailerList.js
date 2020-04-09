import { useRetailers } from "./RetailerDataProvider.js"
import { Retailer } from "./Retailer.js"
import { useDistributors } from "../distributors/DistributorDataProvider.js"

const contentTarget = document.querySelector(".retailerList")

const render = retailersToRender => {
    const retailers = useRetailers()
    const distributors = useDistributors()
    
    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {
            // Find the related distributor for the current retailer
            const foundDistributor = distributors.find( distributor => distributor.id === retailerObject.distributorId )

            return Retailer(retailerObject, foundDistributor)
        }
    ).join("")
}

export const RetailerList = () => {
    const retailers = useRetailers()

    render(retailers)
}
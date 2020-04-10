import { useRetailers } from "./RetailerDataProvider.js"
import { Retailer } from "./Retailer.js"
import { useDistributors } from "../distributors/DistributorDataProvider.js"
import { useFlowers } from "../flowers/FlowerDataProvider.js"
import { useNurseries } from "../nurseries/NurseryProvider.js"
import { useFlowerNurseries } from "../nurseries/FlowerNurseryProvider.js"
import { useDistributorNurseries } from "../nurseries/DistributorNurseryProvider.js"

const contentTarget = document.querySelector(".retailerList")

const render = retailersToRender => {
    const distributors = useDistributors()
    const nurseries = useNurseries()
    const nurseryFlowers = useFlowerNurseries()
    const nurseryDistributors = useDistributorNurseries()
    const flowers = useFlowers()

    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {
            // Find the related distributor for the current retailer
            const foundDistributor = distributors.find(distributor => distributor.id === retailerObject.distributorId)

            // Get all nursery relationships for the current distributor
            const thisNurseryDistributorRelationships = nurseryDistributors.filter(
                disNurseRel => {
                    return foundDistributor.id === disNurseRel.distributorId
                }
            )

            // For each relationship, convert to corresponding nursery object
            const theMatchingNurseries = thisNurseryDistributorRelationships.map(
                rel => {
                    const nursery = nurseries.find(nurse => rel.nurseryId === nurse.id)
                    return nursery
                }
            )

            const foundFlowers = theMatchingNurseries.map(
                foundNursery => {

                    const nurseryFlowerRelationships = nurseryFlowers.filter(
                        nurseryFlower => {
                            return foundNursery.id === nurseryFlower.nurseryId

                        }
                    )
                    const flowersFromThisNursery = nurseryFlowerRelationships.map (nurseryFlower => flowers.find (flower => nurseryFlower.flowerId === flower.id))
                    return flowersFromThisNursery
                }
            ).flat()

            return Retailer(retailerObject, foundDistributor, theMatchingNurseries, foundFlowers)
        }
    ).join("")
}

export const RetailerList = () => {
    const retailers = useRetailers()

    render(retailers)
}
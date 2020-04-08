import { useFlowers } from "./FlowerDataProvider.js"
import { Flower } from "./Flower.js"

const contentTarget = document.querySelector(".flowers")

const render = flowersToRender => {
    const flowers = useFlowers()

    contentTarget.innerHTML = flowersToRender.map(
        (flowerObject) => {
            // Find the related computer for the current flower

            return Flower(flowerObject)
        }
    ).join("")
}

export const FlowerList = () => {
    const flowers = useFlowers()

    render(flowers)
}
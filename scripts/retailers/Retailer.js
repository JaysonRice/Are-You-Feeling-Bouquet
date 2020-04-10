export const Retailer = (retailerObject, distributorObject, nurseryArray, nurseryFlowerArray) => {
    return `
        <section class="retailer">
            <header class="retailer__name retailer__card__text">
                <h2>${retailerObject.name}</h2>
                <p>Located at: ${retailerObject.address}</p>
                <p>${retailerObject.city}, ${retailerObject.state}</p>
            </header>
            <section retailer__distributor retailer__card__text>
            <h3>Distributor: ${distributorObject.name}</h3>
            <div class="retailer__distributor__nurseries retailer__card__text">
            <h4>Nurseries:</h4>
                <ul>
                        ${
                            nurseryArray.map(nursery => `<li>${nursery.name}</li>`).join("")
                        }
                </ul>
            </div>
            <div class="retailer__distributor__nursery__flowers retailer__card__text">
            <h4>Available Flowers</h4>
                <ul class= "flower__list">
                        ${
                            nurseryFlowerArray.map(flower => `<li>${flower.species} - ${flower.color}</li>`).join("")
                        }
                </ul>
            </div>
        </section>
    </section>
    `
}
export const Retailer = (retailerObject, distributorObject, nurseryArray) => {
    return `
        <section class="retailer">
            <header class="retailer__name retailer__card__text">
                <h2>${retailerObject.name}</h2>
                <p>Located at: ${retailerObject.address}</p>
                <p>${retailerObject.city}, ${retailerObject.state}</p>
            </header>
            <section retailer__distributor retailer__card__text>
            <h3>Distributor: ${distributorObject.name}</h3>
            <div class="distributor__nurseries retailer__card__text">
                <ul>
                <h4>Nurseries:</h4>
                    ${
                        nurseryArray.map(nursery => `<li>${nursery.name}</li>`).join("")
                    }
                </ul>
            </section>
    </section>
    `
}
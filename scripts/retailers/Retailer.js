export const Retailer = (retailerObject, distributorObject) => {
    return `
        <section class="retailer">
            <header class="retailer__name">
                <h2>${retailerObject.name}</h2>
                <p>Located at: ${retailerObject.address}</p>
                <p>${retailerObject.city}, ${retailerObject.state}</p>
            </header>
            <section retailer__distributor>
            <h3>Distributor: ${distributorObject.name}</h3>
            </section>
    </section>
    `
}
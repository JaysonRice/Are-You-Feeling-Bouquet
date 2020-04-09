export const Retailer = (retailerObject) => {
    return `
        <section class="retailer">
            <header class="retailer__name">
                <h2>${retailerObject.name}</h2>
                <p>Located at: ${retailerObject.address}</p>
                <p>${retailerObject.city}, ${retailerObject.state}</p>
            </header>
    </section>
    `
}
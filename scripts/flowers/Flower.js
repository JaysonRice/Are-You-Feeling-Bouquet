export const Flower = (flowerObject) => {
    return `
        <section class="employee">
            <header class="flower__species">
                <h2>${flowerObject.species}</h2>
                <p>Color: ${flowerObject.color}</p>
            </header>
    </section>
    `
}
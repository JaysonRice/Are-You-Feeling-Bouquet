let flowerNurseries = []

export const useFlowerNurseries = () => flowerNurseries.slice()

export const getFlowerNurseries = () => fetch("http://localhost:8088/flowerNurseries")
    .then(res => res.json())
    .then(data => flowerNurseries = data)
let distributorNurseries = []

export const useDistributorNurseries = () => distributorNurseries.slice()

export const getDistributorNurseries = () => fetch("http://localhost:8088/distributorNurseries")
    .then(res => res.json())
    .then(data => distributorNurseries = data)
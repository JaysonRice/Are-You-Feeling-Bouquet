import { getFlowers } from "./flowers/FlowerDataProvider.js";
import { FlowerList } from "./flowers/FlowerList.js";
import { getRetailers } from "./retailers/RetailerDataProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";
import { getDistributors } from "./distributors/DistributorDataProvider.js";
import { getNurseries } from "./nurseries/NurseryProvider.js";
import { getDistributorNurseries } from "./nurseries/DistributorNurseryProvider.js";

getFlowers()
    .then(FlowerList)

getRetailers()
    .then(getDistributors)
    .then(getNurseries)
    .then(getDistributorNurseries)
    .then(RetailerList)
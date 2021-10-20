
import { SkuSpecifications, SkuSpecificationsType} from "../typings";

function getSpecNames(skuSpecifications: SkuSpecifications[], Name:string): SkuSpecificationsType[]{

    let skuSpecificationsType:SkuSpecificationsType[]  = new Array(0)

    const specTemp = skuSpecifications.filter((spec) => {
        return spec.field.name == Name;
    })[0]
    if (specTemp != undefined) {
        skuSpecificationsType = specTemp.values
    }

    return skuSpecificationsType
}

export default getSpecNames
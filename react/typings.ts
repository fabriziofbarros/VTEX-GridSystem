export interface SkuSpecifications {
  field: SkuSpecificationsType
  values: SkuSpecificationsType[]
}

export interface SkuSpecificationsType {
  name: string
  values: SKUSpecificationValue[]
}

export interface SKUSpecificationValue {
  name: string
}

export interface Items {
  itemId: string
}

export interface ProductData {
  itemId: string,
  Qty: number
}
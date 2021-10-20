import React, { useContext } from "react";
import { ProductContext } from 'vtex.product-context'
import { SkuSpecifications, SkuSpecificationsType, ProductData } from "../typings";
import { pathOr } from "ramda";
import getSpecNames from "../utils/getSpecNames"
import InputQtd from './InputQtd'
import { Item } from "vtex.product-context/react/ProductTypes";
import { InputProps } from 'inputProps'
import { FormattedCurrency } from 'vtex.format-currency'
import { useCssHandles } from 'vtex.css-handles'

interface Props extends Omit<InputProps, 'onChange' | 'value' | 'prefix'> {
  onChange?: (data: ProductData) => void
  lineAttributeName: string //colors
  emptyStock: string
}

const CSS_HANDLES = [
  'AttributeLine',
  'ProductName',
  'Price',
  'Input'
]

const LinhaProduto = React.forwardRef<HTMLInputElement, Props>(
  function LinhaProduto({ onChange = () => { }, lineAttributeName, emptyStock }: Props, ref) {
    const handles = useCssHandles(CSS_HANDLES)

    const valuesFromContext = useContext(ProductContext);

    const skuSpecifications: SkuSpecifications[] = pathOr([], ['product', 'skuSpecifications'], valuesFromContext);

    const colors: SkuSpecificationsType[] = getSpecNames(skuSpecifications, lineAttributeName);

    const productName: string = pathOr('', ['product', 'productName'], valuesFromContext);

    const sellingPrice: number = pathOr(0, ['product', 'priceRange', 'sellingPrice', 'highPrice'], valuesFromContext);

    const skus: Item[] = pathOr([], ['product', 'items'], valuesFromContext);

    const handleChangeQty = (data: ProductData) => {
      onChange(data);
    };

    const price = FormattedCurrency({ value: sellingPrice })

    return (
      <tbody>
        {colors.map((data) => (
          <tr>
            <td className={`${handles.AttributeLine} w-10 bb pv4`}>{data.name}</td>
            <td className={`${handles.ProductName} w-30 bb pv4`}>{productName}</td>
            <td className={`${handles.Price} w-10 bb pv4 ph4`}>{price}</td>
            {skus.map((sku, index) => (
              <InputQtd
                emptyStock={emptyStock}
                className={`${handles.Input} bb pv4`}
                ref={ref}
                itemId={sku.itemId}
                position={index}
                color={data.name}
                onChange={handleChangeQty}>
              </InputQtd>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
)
export default LinhaProduto;

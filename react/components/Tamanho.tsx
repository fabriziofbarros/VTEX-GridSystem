import React, { useContext } from "react";
import { ProductContext } from 'vtex.product-context'
import { SkuSpecifications, SkuSpecificationsType } from "../typings";
import { pathOr } from "ramda";
import getSpecNames from "../utils/getSpecNames"
import { InputProps } from 'inputProps'
import { useCssHandles } from 'vtex.css-handles'

interface Props extends Omit<InputProps, 'onChange' | 'value' | 'prefix'> {
  columnAttribute: string //shoesSize
}

const CSS_HANDLES = [
  'AttributeHeaderRow',
  'AttributeHeaderLabel'
]

const Tamanho = React.forwardRef<HTMLInputElement, Props>(
  function Tamanho({ columnAttribute }) {
    const handles = useCssHandles(CSS_HANDLES)

    const valuesFromContext = useContext(ProductContext)

    const skuSpecifications: SkuSpecifications[] = pathOr([], ['product', 'skuSpecifications'], valuesFromContext)

    const tamanhos: SkuSpecificationsType[] = getSpecNames(skuSpecifications, columnAttribute)

    return (
      <tr className={`${handles.AttributeHeaderRow}`}>
        <th className={`${handles.AttributeHeaderLabel} bb b pv4`}></th>
        <th className={`${handles.AttributeHeaderLabel} bb b pv4`}></th>
        <th className={`${handles.AttributeHeaderLabel} bb b pv4`}></th>
        {tamanhos.map((data) => (
          <th className={`${handles.AttributeHeaderLabel} bb b pv4`}>{data.name}</th>
        ))}
      </tr>
    );
  }
)
export default Tamanho;

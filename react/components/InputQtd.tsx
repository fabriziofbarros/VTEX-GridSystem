import React, { useContext } from "react";
import { ProductContext } from 'vtex.product-context'
import { path, pathOr } from "ramda";
import { Item } from "vtex.product-context/react/ProductTypes";
import { Input } from 'vtex.styleguide'
import { ProductData } from "../typings";
import { InputProps } from 'inputProps'
import { useCssHandles } from 'vtex.css-handles'

interface Props extends Omit<InputProps, 'onChange' | 'value' | 'prefix'> {
  itemId: string,
  position: number,
  emptyStock: string,
  color: string,
  onChange?: (data: ProductData) => void
}

const CSS_HANDLES = [
  'AttributeStockNull',
  'AttributeStock',
  'AttributeStockInput'
]

const InputQtd = React.forwardRef<HTMLInputElement, Props>(
  function InputQtd({ onChange = () => { }, ...props }: Props, ref) {
    const handles = useCssHandles(CSS_HANDLES)

    let skuItem: Item

    let stock: number | undefined = 0

    const valuesFromContext = useContext(ProductContext)

    const skus: Item[] = pathOr([], ['product', 'items'], valuesFromContext)

    const sku: Item[] = skus.filter(i => i.itemId === props.itemId)

    if (sku.length > 0) {
      skuItem = sku.filter(s => s.variations[1].values.filter(v => v === props.color).length)[0]

      if (skuItem != null && skuItem.itemId.length > 0)
        stock = path(['product', 'items', props.position, 'sellers', 0, 'commertialOffer', 'AvailableQuantity'], valuesFromContext)
    }

    const handleChangeQty: React.ChangeEventHandler<HTMLInputElement> = evt => {
      onChange({
        itemId: evt.target.id,
        Qty: Number(evt.target.value)
      })
    }

    if (stock === 0)
      return <td className={`${handles.AttributeStockNull} tc bb pv4`}>{props.emptyStock}</td>
    else
      return (
        <td className={`${handles.AttributeStockNull} tc bb pv4`}>
          <Input
            className={`${handles.AttributeStockInput}`}
            {...props}
            ref={ref}
            type="number"
            onChange={handleChangeQty}
            id={props.itemId}
            name={props.itemId}>
          </Input>
        </td>
      )
  }
)
export default InputQtd;

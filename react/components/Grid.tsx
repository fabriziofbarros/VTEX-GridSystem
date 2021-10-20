import Tamanho from "./Tamanho";
import LinhaProduto from "./LinhaProduto";
import React, { MouseEventHandler, useContext } from "react";
import { ProductData } from "../typings";
import { FormattedMessage } from 'react-intl'
import { ProductContext } from 'vtex.product-context'
import { Button } from 'vtex.styleguide'
import { InputProps } from 'inputProps'
import { path } from "ramda";
import { useCssHandles } from 'vtex.css-handles'

interface Props extends Omit<InputProps, 'onclick' | 'value' | 'prefix'> {
  onclick?: (data: ProductData) => void,
  addToCart: string
  lineAttributeName: string
  columnAttribute: string
  emptyStock: string
}

const CSS_HANDLES = [
  'TableContainer',
  'TableBuyButton'
]

const Grid = React.forwardRef<MouseEventHandler<HTMLButtonElement>, Props>(
  function Grid({ addToCart, lineAttributeName, columnAttribute, emptyStock }) {
    const handles = useCssHandles(CSS_HANDLES)

    const valuesFromContext = useContext(ProductContext)

    const seller = path(['selectedItem', 'sellers', 0, 'sellerId'], valuesFromContext)

    const addToCartText = addToCart || <FormattedMessage id="button.title" />

    const checkoutURL = '/checkout/cart/add?'

    const [buttonState, setButtonState] = React.useState(true)

    const [Qty, setQty] = React.useState([])

    const handleChangeQty = (data: ProductData) => {
      setQty({
        ...Qty,
        [data.itemId]: [data.Qty]
      });
      if (data.Qty > 0)
        setButtonState(false)
    }

    const urlBuilder = () => {
      let url = checkoutURL
      let contador = 0
      Object.entries(Qty).map((key) => {
        contador = contador + 1
        if (contador >= 2)
          url = url + `&`
        url = url + `sku=${key[0]}&qty=${key[1]}&seller=${seller}`
      });
      window.location.assign(`${url}`)
    }

    return (
      <header className="App-header">
        <table className={`${handles.TableContainer} w-100 bg-base border-collapse`} cellSpacing="0">
          <Tamanho
            columnAttribute={columnAttribute}
          >
          </Tamanho>
          <LinhaProduto
            onChange={handleChangeQty}
            lineAttributeName={lineAttributeName}
            emptyStock={emptyStock}
          >
          </LinhaProduto>
        </table>
        <table className={`${handles.TableBuyButton} w-100 bg-base border-collapse pv3`}>
          <tr>
            <td>
              <Button
                variation="primary"
                block
                onClick={urlBuilder}
                disabled={buttonState}
              >
                {addToCartText}
              </Button>
            </td>
          </tr>
        </table>
      </header>
    )
  }
)
export default Grid;

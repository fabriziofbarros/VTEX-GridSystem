import Grid from './components/Grid';
import React from 'react'
import { MouseEventHandler } from 'react';
import { InputProps } from 'inputProps'

interface GridSystemProps extends Omit<InputProps, 'onChange' | 'value' | 'prefix'> {
  lineAttributeName: string
  columnAttribute: string
  emptyStock?: string
}

const GridSystem = React.forwardRef<MouseEventHandler<HTMLButtonElement>, GridSystemProps>(
  function GridSystem({ lineAttributeName, columnAttribute, emptyStock }: GridSystemProps) {

    const emptyStockValue: string = emptyStock ? emptyStock : "-"

    return (
      <div className="App">
        <Grid
          lineAttributeName={lineAttributeName}
          columnAttribute={columnAttribute}
          emptyStock={emptyStockValue}
        >
        </Grid>
      </div>
    );
  }
)


export default GridSystem;

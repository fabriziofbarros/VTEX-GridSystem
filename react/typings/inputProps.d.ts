declare module 'inputProps' {
    import { ComponentType } from 'react'
  
    export const Input: ComponentType<InputProps>
  
    interface InputProps {
      [key: string]: any
    }
  }
  
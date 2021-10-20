# GridSystem

This system allows shoppers to quickly and agilely buy products that are normally purchased by combining their attributes. We can examples are a shopper who needs to buy T-shirts of various sizes and colors in bulk.

![Media Placeholder](C:\Users\fabri\OneDrive\Imagens\Capturas de tela\Grid.png)

## Configuration

In this section, you first must **add the primary instructions** that will allow users to use the app's blocks in their store, such as:

1. Adding the "{your_account}.gridsystem": "0.x" app as a theme dependency in the `manifest.json` file;

```
"dependencies": {
+   "{your_account}.gridsystem": "0.x"
}
```

2. In the product template use "GridSystem" in order to rebuild the Product Details Page now including the GridSystem blocks:

```
 {
  "store.product": {
    "children": [
+      "GridSystem",
      ...
    ]
  },

  "GridSystem" {
     props:{
       "lineAttributeName": "Colors",
       "columnAttribute": "Shoes Size",
       "emptyStock": "-"
     }
  },
 }
```

| Block name | Description                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GridSystem | ![image](https://user-images.githubusercontent.com/9255820/137956653-c028c12b-804d-460d-bc96-9bd128293d2c.png) Block that enables you to build the GridSystem. It also supports three props: lineAttributeName, columnAttribute and emptyStock |

| Prop Name         | Type   | Description                                                                                                                                                         |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lineAttributeName | String | ![image](https://user-images.githubusercontent.com/9255820/137959981-6f8eed23-f2d1-4f14-92e0-597ba7fc2403.png) This prop is responsible for searching the shoe size |
| columnAttribute   | String | ![image](https://user-images.githubusercontent.com/9255820/137960036-9db385de-9cba-4e5f-a180-a33d2baa881c.png) This prop is responsible for searching the color     |
| emptyStock        | String | This prop is responsible for naming the input that the stock is empty                                                                                               |

## Customization

The first thing that should be present in this section is the sentence below, showing users the recipe pertaining to CSS customization in apps:

| CSS Handles            |
| ---------------------- |
| 'TableContainer'       |
| 'TableBuyButton'       |
| 'AttributeHeaderRow'   |
| 'AttributeHeaderLabel' |
| 'AttributeLine'        |
| 'ProductName'          |
| 'Price'                |
| 'Input'                |
| 'AttributeStockNull'   |
| 'AttributeStock'       |
| 'AttributeStockInput'  |

## Contributors ✨

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

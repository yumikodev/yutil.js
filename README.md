<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/aplos"><img src="./docs/cloverly.png" width="546" alt="cloverly" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/cloverly"><img src="https://img.shields.io/npm/v/cloverly.svg" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/cloverly"><img src="https://img.shields.io/npm/dm/cloverly.svg" alt="npm downloads" /></a>
  </p>
</div>

[![npm](https://nodei.co/npm/cloverly.png)](https://www.npmjs.com/package/cloverly)

## Sobre

**Cloverly** es un paquete de [Node.js](https://nodejs.org) creado para el uso de funciones de JavaScript sencillas pero muy utiles para el desarrollo.
<br>
<br>

## Instalación

```sh-session
npm install cloverly
```

<br>

# Ejemplos de uso:

## ID Generador v1:

- El numero en los paréntesis es NECESARIO, define la cantidad de digitos MAXIMOS que tendra el id (La **v1** solo retorna numeros) y si no se define un valor, por defecto tendra **18**

```js
const { v1 } = require("cloverly").Id;
console.log(v1(9));
/**
 * Return:
 * ~$ 205209958
 */
```

## ID Generador v2:

- Lo mismo que la **v1** solo que este incluye letras

```js
const { v1 } = require("cloverly").Id;
console.log(v1(9));
/**
 * Return:
 * ~$ PZPsKeR5K
 */
```

## Convertir **Bytes** a **_KB, MB, GB, TB_**:

- Como dice, convierte **bytes** a **_KB, MB, GB, TB, etc_**

```js
const { Size } = require("cloverly");
console.log(Size(23925278));
/**
 * Return:
 * ~$ 22.82 MB
 */
```

- Tambien funciona con variables:

```js
const { Size } = require("cloverly");
let bytes = 45789848;
console.log(Size(bytes));
/**
 * Return:
 * ~$ 43.67 MB
 */
```

## Formato de fecha (En Hora):

- Convierte los datos de fecha en Hora (PM/AM)

```js
const format = require("cloverly").Format.v1;
console.log("Hora:", format(new Date()));
/**
 * Return:
 * ~$ Hora: 4:33 PM
 */
```

## Formato de fecha (Dia, Mes, Año):

- Convierte los datos de fecha en datos locales (Dia, Mes, Año)

```js
const format = require("cloverly").Format.v2;
console.log("Fecha:", format(new Date()));
/**
 * Return:
 * ~$ Fecha: 29/3/2022
 */
```

## Convertir a porcentajes:

- Convierte los datos especificados en porcentajes (%)
- Puedes especificar la porción y el total

```js
const percent = require("cloverly").Percent;
/**
 * Ejemplo de uso:
 * percent(portion, total);
 */

console.log(percent(15670, 100000));
/**
 * Return:
 * ~$ 15.67%
 */
```

## License
MIT © [Yasu Yumiko](https://yumiko0828.ml)

## Enlaces

- [GitHub](https://github.com/Yumiko0828/Cloverly)
- [npm](https://www.npmjs.com/package/cloverly)

## This is all :)

Espero te sea util este paquete :D
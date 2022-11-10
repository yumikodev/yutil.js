# Yutil.js

**Yutil.js** es un paquete de [Node.js](https://nodejs.org) escrito de TypeScript y creado con funciones de JavaScript que he llegado a usar mucho y posiblemente tambien te ayuden en tus proyectos.

Lo hice lo mas facil posible de usar para que no tengas dificultades al usarlo :D

[![npm](https://nodei.co/npm/yutil.js.png)](http://badge.fury.io/js/yutil.js)

<br>

## Tabla de contenido:

- [Instalación](#instalación)
- [Importación](#importación)
- [Uso](#uso)
  - [UUID](#uuid)
    - [#v1()](#uuid-v1)
    - [#v2()](#uuid-v2)
  - [#size()](#abreviar-bytes-a-kb-mb-gb-tb)
  - [#mstime()](#obtener-el-tiempo-equivalente-de-los-milisegundos)
  - [#format()](#objeto-de-fecha-a-formato-de-fecha)
  - [#percent()](#convertir-a-porcentajes)
  - [Cifrado de datos](#cifrado-de-datos)
    - [#encrypt()](#cifrado)
    - [#decrypt()](#decifrado)
- [Licencia](#license)

## Instalación

```sh-session
npm install yutil.js
```

<br>

## Importación:

CommonJs

```js
const yutil = require("yutil.js");
```

ESModule

```js
import * as yutil from "yutil.js";
```

## Uso:

### UUID

Genera una ID con un número de carácteres aleatorios.

| Parámetro | Descripción                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| `length`  | Define la máxima cantidad de dígitos que tendra el string (por defecto es 18). |

#### UUID v1:

```js
yutil.uuid.v1(9);
/**
 * Return:
 * ~$ 205209958
 */
```

#### UUID v2:

- Este incluye letras en el string

```js
yutil.uuid.v2(9);
/**
 * Return:
 * ~$ PZPsKeR5K
 */
```

### Abreviar **Bytes** a **KB, MB, GB, TB**:

| Parámetro | Descripción                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `bytes`   | Los bytes que deseas abreviar.                                                                                               |
| `fixed`   | el número de dígitos que aparecerán después del punto decimal, por defecto es 2 pero lo puedes remover estableciendolo en 0. |

Con numero decimal:

```js
yutil.size(23925278);
/**
 * Return:
 * ~$ 22.82 MB
 */
```

Sin numero decimal:

```js
yutil.size(45789848, 0);
/**
 * Return:
 * ~$ 44 MB
 */
```

### Obtener el tiempo equivalente de los milisegundos:

Devuelve un objeto con los todos los equivalentes diponibles

| Parámetro | Descripción      |
| --------- | ---------------- |
| `ms`      | Los milisegundos |

Los equivalentes que podemos obtener:

- `years`: años
- `months`: meses
- `weeks`: semanas
- `days`: dias
- `hours`: horas
- `minutes`: minutos
- `seconds`: segundos

Ejemplo:

```js
const { days, hours, minutes, seconds } = yutil.mstime(103957205811);

console.log(
  `Hace ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`
);
/**
 * Return:
 * ~$ Hace 2 días, 3 horas, 30 minutos y 5 segundos
 */
```

### Objeto de fecha a formato de fecha:

En Yutil.js **v1.0.0** y **v1.0.1** eran funciones separadas, ahora son uno solo pero retorna un objeto con las variables `date` y `hour`.

| Parámetro | Descripción                                               |
| --------- | --------------------------------------------------------- |
| `date`    | El objeto de fecha (ejemplo: `2022-06-08T23:55:13.558Z`). |

Obtener la hora:

```js
yutil.format("2022-06-08T23:55:13.558Z").hour;
/**
 * Return:
 * ~$ Hora: 7:06 PM
 */
```

Obtener la fecha:

```js
yutil.format("2022-06-08T23:55:13.558Z").date;
/**
 * Return:
 * ~$ Fecha: 8/6/2022
 */
```

### Convertir a porcentajes:

| Parámetro | Descripción                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `portion` | La porción del porcentaje total.                                                                                             |
| `total`   | El total del porcentaje.                                                                                                     |
| `fixed`   | El número de dígitos que aparecerán después del punto decimal, por defecto es 2 pero lo puedes remover estableciendolo en 0. |

```js
// Uso:
yutil.percent(portion, total, fixed);
```

Ejemplo:

```js
yutil.percent(15670, 100000);
/**
 * Return:
 * ~$ 15.67%
 */
```

### Cifrado de datos:

En la versión `1.0.5` se agregaron las funciones para el cifrado y decifrado de datos con la libreria `crypto` de [Node.js](https://nodejs.org).

- #### Estructura del string cifrado:

> **Nota**: Las partes de separan por un punto (`.`)

Las partes de una cadena cifrada generada por `Yutil.js` son las siguientes.

Aunque un tercero tenga acceso a la cadena cifrada, sin la llave secreta no podra decifrar la cadena.

```js
// Cadena cifrada
"72b483a19ad355fcb8f962ceead20001.6d31b0c40aa8bdf9183ce892b1602a69";

// Estructura
[
  // 1 ----> IV (Vector de Inicialización).
  "72b483a19ad355fcb8f962ceead20001",
  // 2 ----> Payload (Datos encriptados)
  "6d31b0c40aa8bdf9183ce892b1602a69",
];
```

#### Cifrado:

| Parámetros | Descripción                                         |
| ---------- | --------------------------------------------------- |
| `text`     | El texto a cifrar.                                  |
| `secret`   | La llave secreta que se usará para cifrar el texto. |

```js
const secret = "mysecretkey";

yutil
  .encrypt("Hello World!", secret)
  .then((encrypted) => {
    console.log(`Cifrado: ${encrypted}`);

    /**
     * Return:
     * ~$ Cifrado: c5e923ed57b23d8d4f29a2988e38beaf.3fea0492d53e5968b0cdd047555cde1a
     */
  })
  .catch((err) => console.error(err));
```

#### Decifrado:

| Parámetros  | Descripción                                                     |
| ----------- | --------------------------------------------------------------- |
| `encrypted` | La cadena de texto cifrada generada por [#encrypt()](#cifrado). |
| `secret`    | La llave secreta usada para cifrar el texto.                    |

```js
const encrypted =
  "c5e923ed57b23d8d4f29a2988e38beaf.3fea0492d53e5968b0cdd047555cde1a";
const secret = "mysecretkey";

yutil
  .decrypt(encrypted, secret)
  .then((data) => {
    console.log(`Decifrado: ${data}`);

    /**
     * Return:
     * ~$ Decifrado: Hello World!
     */
  })
  .catch((err) => console.error(err));
```

## License

MIT © [Yasu Yumiko](https://yumiko0828.ml)

## Enlaces

- [GitHub](https://github.com/Yumiko0828/yutil.js)
- [npm](https://www.npmjs.com/package/yutil.js)

## Eso es todo =)

Espero te sea util este paquete :D

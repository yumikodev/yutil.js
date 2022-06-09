# Yutils

[![npm](https://nodei.co/npm/yutil.js.png)](https://www.npmjs.com/package/yutil.js)

## Sobre

**Yutil** es un paquete de [Node.js](https://nodejs.org) creado con funciones de JavaScript que he llegado a usar mucho y posiblemente tambien te ayuden en tus proyectos.

Lo hice lo mas facil posible de usar para que no tengas problemas :D

<br>

## Instalación

```sh-session
npm install yutil.js
```

<br>

## Empezar a usar:
```js
const yutil = require("yutil.js");
```

## Ejemplos de uso:

### UUID v1:

Parámetro:

- `length`: define la máxima cantidad de dígitos que tendra el string (por defecto es 18)

```js
yutil.uuid.v1(9);
/**
 * Return:
 * ~$ 205209958
 */
```

### UUID v2:

- Este incluye letras en el string

```js
yutil.uuid.v2(9);
/**
 * Return:
 * ~$ PZPsKeR5K
 */
```

### Abreviar **Bytes** a **KB, MB, GB, TB**:

Parámetros:

- `bytes`: los bytes que deseas abreviar.
- `fixed`: el número de dígitos que aparecerán después del punto decimal, por defecto es 2 pero lo puedes remover estableciendolo en 0.

Con fixed:

```js
yutil.size(23925278);
/**
 * Return:
 * ~$ 22.82 MB
 */
```

Sin fixed:

```js
yutil.size(45789848, 0);
/**
 * Return:
 * ~$ 44 MB
 */
```

### Objeto de fecha a formato de hora:

Parámetros:

- `date`: el objeto de fecha (ejemplo: `2022-06-08T23:55:13.558Z`)

```js
yutil.format.hour("2022-06-08T23:55:13.558Z");
/**
 * Return:
 * ~$ Hora: 7:06 PM
 */
```

### Objeto de fecha a formato de fecha:

- Convierte el objeto de fecha en formato de fecha (Dia / Mes / Año)

```js
yutil.format.date("2022-06-08T23:55:13.558Z");
/**
 * Return:
 * ~$ Fecha: 8/6/2022
 */
```

### Convertir a porcentajes:

Parámetros:

- `portion`: la porción del porcentaje total
- `total` el total del porcentaje
- `fixed`: el número de dígitos que aparecerán después del punto decimal, por defecto es 2 pero lo puedes remover estableciendolo en 0.

```js
/**
 * Uso:
 */
yutil.percent(portion, total, fixed);
```
```js
yutil.percent(15670, 100000);
/**
 * Return:
 * ~$ 15.67%
 */
```

## License

MIT © [Yasu Yumiko](https://yumiko0828.ml)

## Enlaces

- [GitHub](https://github.com/Yumiko0828/Yutil)
- [npm](https://www.npmjs.com/package/Yutil)

## Eso es todo =)

Espero te sea util este paquete :D

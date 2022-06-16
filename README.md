# Yutil.js

**Yutil.js** es un paquete de [Node.js](https://nodejs.org) escrito de TypeScript y creado con funciones de JavaScript que he llegado a usar mucho y posiblemente tambien te ayuden en tus proyectos.

Lo hice lo mas facil posible de usar para que no tengas dificultades al usarlo :D

[![npm](https://nodei.co/npm/yutil.js.png)](http://badge.fury.io/js/yutil.js)

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

Parámetros:

- `ms`: los milisegundos

Los equivalentes que podemos obtener:

- `years`: años
- `months`: meses
- `weeks`: semanas
- `days`: dias
- `hours`: horas
- `minutes`: minutos
- `seconds`: segundos

Ejemplo simple:

```js
const { days, hours, minutes, seconds } = yutil.mstime(103957205811);

console.log(`Hace ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`);
/**
 * Return:
 * ~$ Hace 2 días, 3 horas, 30 minutos y 5 segundos
 */
```

### Objeto de fecha a formato de fecha:

En Yutil.js **v1.0.0** y **v1.0.1** eran funciones separadas, ahora son uno solo pero retorna un objeto con las variables `date` y `hour`.

Parámetros:

- `date`: el objeto de fecha (ejemplo: `2022-06-08T23:55:13.558Z`)

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

Parámetros:

- `portion`: la porción del porcentaje total
- `total` el total del porcentaje
- `fixed`: el número de dígitos que aparecerán después del punto decimal, por defecto es 2 pero lo puedes remover estableciendolo en 0.

```js
// Uso:
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

- [GitHub](https://github.com/Yumiko0828/yutil.js)
- [npm](https://www.npmjs.com/package/yutil.js)

## Eso es todo =)

Espero te sea util este paquete :D

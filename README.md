# Desafío para Software Engineers

Nombre postulante: Murilo Moura Maia
<br />
Link a la app en producción: https://kimche-challenge-murilo.herokuapp.com/

## Pregunta Abierta

### Pregunta:
"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

### Respuesta:
1) Hacer una migración, si posible, para un BDD No relacional del tipo columnar (para que sea más eficiente y enfocado en grandes cantidades de datos, como Cassandra).
2) Si no es posible, verificar si todos los datos necesitan ser leídos en la tabla de manera secuencial, pues sería posible crear sub tablas para acceder por medio de views;
3) Si no se puede cambiar el BDD ni cambiar la tabla, verificar si hay datos repetidos en la tabla, pues lo ideal sería hacer una normalización de datos;


## Proyecto hecho con:

**Frontend**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 


**Tests**

![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

**Container**

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

<hr />

> Tu puedes iniciar el proyecto en tu consola a partir del `Yarn` y del `Docker`, vea las instrucciones abajo
## Como Iniciar el Proyecto ⚠️

<details>
<summary>*** Como iniciar el proyecto ***</summary>

## Yarn

En el directorio raiz, puedes ejecutar el siguiente comando para iniciar el proyecto:

```bash
yarn start
```
Esto ejecutará la aplicación, que estará accesible en `localhost:3000`.
## Docker compose

En el directorio raiz, puedes ejecutar el siguiente comando para iniciar el proyecto:

```bash
yarn compose:up
```
Esto ejecutará la aplicación, que estará accesible en `localhost:8080`.

Para dar baja en el container, ejecute:

```bash
yarn compose:down
```

</details>

<br />

## Estructura de Proyecto
<details> 
  <summary>Ver estructura</summary>

Estructura a partir del directorio `src`:

  ```bash
├── api
│   └── client.js
├── App.css
├── App.js
├── App.test.js
├── assets
│   └── images
│       ├── blizzard.png
│       └── points.png
├── components
│   ├── Atoms
│   │   ├── Button.js
│   │   ├── Input.js
│   │   ├── Line.js
│   │   ├── Paragraph.js
│   │   └── Title.js
│   ├── Containers
│   │   ├── Container.Background.js
│   │   ├── Container.Box.Country.js
│   │   ├── Container.media.js
│   │   ├── Container.Result.js
│   │   ├── Flex.js
│   │   └── Grid.js
│   └── Organisms
│       ├── Filters.js
│       ├── Footer.js
│       ├── Header.js
│       ├── Loading
│       │   ├── Loading.Display.js
│       │   ├── Loading.js
│       │   └── Loading.Point.js
│       └── ResultField
│           ├── BoxGroup.js
│           ├── SearchResult.js
│           └── UniqueBox.js
├── Hooks
│   ├── useCountry
│   │   └── index.js
│   └── usePagination
│       └── usePagination.js
├── index.css
├── index.js
├── logo.svg
├── Pages
│   └── Home.js
├── redux
│   ├── slices
│   │   ├── country.slice.js
│   │   ├── filter.slice.js
│   │   └── filter.slice.test.js
│   └── store
│       └── index.js
├── services
│   └── countryService.js
├── serviceWorker.js
├── setupTests.js
├── Style
│   └── themeStyle.js
  ```

</details>

<br />

<img src="https://github.com/muriloommaia/kimche-challenge/blob/main/imgs/new.kimche.gif?raw=true" alt="home.gif" width="800"/>


## Instrucciones

<details>
<summary>Instrucciones</summary>
Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

</details>

## Consideraciones

<details>
<summary>Consideraciones</summary>

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

</details>

## Hints

<details>
<summary>Hints</summary>

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)

</details>


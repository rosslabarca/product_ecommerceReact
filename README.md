# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  
## Table of Contents
1. [Información General]
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#collaboration)
5. [FAQs](#faqs)
### General Info
***
Actividad de la clase #3 y de la clase #7 de curso básico de React (Argentina Programa, dictado de UTN), la cual solicita:

Crear una aplicación con react cli llamada "myapp".
Desarrollar el maquetado de una página que detalle de un producto para un sitio de
ecommerce, se deberán visualizar los siguientes datos:
● Nombre
● Descripción
● Precio
● SKU
● Cantidad disponible
Realizar un maquetado con los datos, desarrollado con componentes.
Agregar al mismo un botón "Comprar".
Al hacer clic en dicho botón se deberá mostrar debajo del mismo un mensaje al usuario que
diga:
"Gracias por su compra".
Resolverlo utilizando manejo de estados.

### Screenshot

![image](https://github.com/rosslabarca/product_ecommerceReact/assets/100976050/c9265101-03a1-489a-8057-75afa405f999)


## Technologies
***
Lista de tecnologías descargadas y usadas:

NODEjs (https://nodejs.org/en) Version 20.3
Simple React Snippets (https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) Version 1.2.7
ES7+ React/Redux/React-Native snippets (https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) Version 	4.4.3
Vite (https://vitejs.dev/guide/)  configuración en la terminal Go Comand $ npm create vite@latest
Netlify https://app.netlify.com/sites/productecommercereact/configuration/general

## Installation
***
Breve comentario: cada una de las tecnologías fueron instalada de manera fácil desde sus respectivas páginas raíz, descargando la última versión firme (LTS), 

En el caso de Nodejs le dí a instalar, y luego siguiente...siguiente y finish.
Los snippets fueron a través de VSC en la parte de extensiones.
Con respecto a Vite, fue por medio de la terminal de VSC, mediante los comando de configuaración traidos de sus páginas.

## Steps
***
1. Instalación de las tecnologías usadas.
2. Agregar los meta datos, Google Fonts, Favicon, scripts en el index.html.
3. Crear en la carpeta public la carpeta assets y luego la de imagenes, agregar todos los archivos visuales en ella.
4. Darle los estilos generales en el index.css.
5. Crear una carpeta para agregar el componente princial renderizado a app.jsx, llamado ProductDetail.jsx, de igual manera con el ProductDetail.css
6. Crear 2 carpetas para agregar los componentes secundarios (respectivamente) renderizado a main.jsx, llamados Header.jsx, y Banner.jsx, de igual manera con los .css
7. Subir los archivos a GitHub.
8. Netlify para hacer el deployed, a través de la opción de linkear los archivos de GitHub, el resultado fue: 
https://productecommercereact.netlify.app/

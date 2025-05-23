declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Para archivos SCSS/CSS globales (que no son CSS Modules)
declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: any;
  export default content;
}
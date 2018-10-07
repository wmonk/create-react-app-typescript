declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module '*.module.css' {
  const exports: { [exportName: string]: string };
  export = exports;
}
declare module '*.module.scss' {
  const exports: { [exportName: string]: string };
  export = exports;
}
declare module '*.module.sass' {
  const exports: { [exportName: string]: string };
  export = exports;
}
declare module '*.css'
declare module '*.scss'
declare module '*.sass'

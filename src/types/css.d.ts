declare module '*.css' {
  interface CSS {
    [className: string]: string
  }
  const css: CSS
  export = css
}

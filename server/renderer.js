const styles = `<link rel="stylesheet" type="text/css" href="styles.css" />`;

export default function renderPage(html) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Indio</title>
      <meta name="viewport" content="width=device-width" />
      ${process.env.NODE_ENV !== 'development' ? styles : ''}
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
}

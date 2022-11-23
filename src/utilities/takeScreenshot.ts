// Save the canvas as a *.png
export const takeScreenshot = () => {
  const link = document.createElement('a')
  link.setAttribute('download', 'canvas.png')
  link.setAttribute(
    'href',
    document
      .querySelector('canvas')
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream'),
  )
  link.click()
}

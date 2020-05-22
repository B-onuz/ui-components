import Color from 'color'

export default (props) => {
  const color = props.theme.colors[props.color]
  const objColor = new Color(color)
  const bgColor = objColor.saturate(0.8).fade(0.95).toString()
  console.log(color)
  return `
        color: ${color};
        background-color: ${bgColor};
    `
}

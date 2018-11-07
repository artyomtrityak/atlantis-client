import "../styles/index.scss";
import MenuSvg from "../assets/svg/menu.svg";

const rendered: string = `
<svg viewBox="${MenuSvg.viewBox}">
  <use xlink:href="#${MenuSvg.id}" />
</svg>`;

console.log(rendered);
console.log("hello");

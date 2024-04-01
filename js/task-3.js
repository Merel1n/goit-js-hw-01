`use script`;
function getElementWidth(content, padding, border) {
    const Content = Number.parseFloat(content);
    const Padding = Number.parseFloat(padding);
    const Border = Number.parseFloat(border);
    return Border + Padding + Content + Padding + Border; 
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

module.exports = function toReadable (number) {
    const aArr = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const bArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const getA= (n) => aArr[Number(n)];
    const getB = (n) => bArr[Number(n)];
    if (number === 0) return 'zero';
    const numStr = number.toString();
    const n1 = numStr[0];
    const n2 = numStr[1];
    const n3 = numStr[2];
    if (numStr.length === 1) return `${getA(number).trim()}`;
    if (numStr.length === 2 && n1 === '1') return `${getA(number).trim()}`;
    if (numStr.length === 2 && n2 === '0') return `${getB(n1).trim()}`;
    if (numStr.length === 2 && n1 > '1') return `${getB(n1)} ${getA(n2).trim()}`;
    let str = '';
    str += n1 != 0 ? getA(n1) + 'hundred ' : '';
    if (n2 === '1') {
        str += str != '' ? getA(n2+n3) : '';
    } else {
        str += n2 != 0 && str != '' ? getB(n2) + ' ' : '';
        str += n3 != 0 ? getA(n3) : '';
      }
    return str.trim(); 
}
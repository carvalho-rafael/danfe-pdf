exports.formatarDataEHora = (value) => {
    console.log(value);
    let data = new Date(Date.parse(value))
    console.log(typeof data);
    let dataFormatada = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
    return dataFormatada
};

exports.formatarHora = (value) => {
    console.log(value);
    let data = new Date(Date.parse(value))
    console.log(typeof data);
    let dataFormatada = `${data.getHours()}:${data.getMinutes()}`;
    return dataFormatada
};

exports.formatarData = (value) => {
    console.log(value);
    let data = new Date(Date.parse(value))
    console.log(typeof data);
    let dataFormatada = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    return dataFormatada
};

exports.formatarDinheiro = (f) => {
    return Number.parseFloat(Number.parseFloat(f).toFixed(2)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

exports.formatarDinheiroSemSifra = (f) => {
    return Number.parseFloat(f).toFixed(2);
}

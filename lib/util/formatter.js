export const formatarDataEHora = (value) => {
    console.log(value);
    let data = new Date(Date.parse(value))
    console.log(typeof data);
    let dataFormatada = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
    return dataFormatada
};

export const formatarHora = (value) => {
    console.log(value);
    let data = new Date(Date.parse(value))
    console.log(typeof data);
    let dataFormatada = `${data.getHours()}:${data.getMinutes()}`;
    return dataFormatada
};

export const formatarData = (value) => {
    console.log(value);
    let data = new Date(Date.parse(value))
    console.log(typeof data);
    let dataFormatada = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    return dataFormatada
};

export const formatarDinheiro = (f) => {
    return Number.parseFloat(Number.parseFloat(f).toFixed(2)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

export const formatarDinheiroSemSifra = (f) => {
    return Number.parseFloat(f).toFixed(2);
}

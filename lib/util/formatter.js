const padDateTimeUnit = (value) => String(value).padStart(2, '0')

exports.formatarDataEHora = (value) => {
    console.log(value);
    let data = new Date(Date.parse(value))
    console.log(typeof data);
    let dataFormatada = `${padDateTimeUnit(data.getDate())}/${padDateTimeUnit(data.getMonth() + 1)}/${data.getFullYear()} ${padDateTimeUnit(data.getHours())}:${padDateTimeUnit(data.getMinutes())}`;
    return dataFormatada
};

exports.formatarHora = (value) => {
    console.log(value);
    let data = new Date(Date.parse(value))
    console.log(typeof data);
    let dataFormatada = `${padDateTimeUnit(data.getHours())}:${padDateTimeUnit(data.getMinutes())}`;
    return dataFormatada
};

exports.formatarData = (value) => {
    console.log(value);
    let data = new Date(Date.parse(value))
    console.log(typeof data);
    let dataFormatada = `${padDateTimeUnit(data.getDate())}/${padDateTimeUnit(data.getMonth() + 1)}/${data.getFullYear()}`;
    return dataFormatada
};

exports.formatarDinheiro = (f) => {
    return Number.parseFloat(Number.parseFloat(f).toFixed(2)).toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

exports.formatarDinheiroSemSifra = (f) => {
    return Number.parseFloat(Number.parseFloat(f).toFixed(2)).toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

exports.formatarVolume = (f) => {
    return Number.parseFloat(Number.parseFloat(f).toFixed(2)).toLocaleString('pt-br', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    });
}

exports.cnpjMask = (value) => {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };
  
  
exports.phoneMask = (v) => {
    let newValue = v;
    if (!newValue) return '';
    newValue = newValue.replace(/[^\d]/g, ''); // Remove tudo o que não é dígito
    newValue = newValue.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
    newValue = newValue.replace(/(\d)(\d{4})$/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos
    return newValue;
  }
  
  exports.zipCodeMask = (v) => {
    let newValue = v;
    if (!newValue) return '';
    newValue = newValue.replace(/[^\d]/g, ''); // Remove tudo o que não é dígito
    newValue = newValue.replace(/^(\d{5})(\d)/g, '$1-$2'); // Coloca parênteses em volta dos dois primeiros dígitos
    return newValue;
  }
  
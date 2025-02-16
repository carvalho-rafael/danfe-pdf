'use strict';

const { formatarDinheiroSemSifra } = require('./util/formatter')

var gammautils = require('gammautils'),
    insert = gammautils.string.insert

var Item = (function() {
    function Item() {

    }

    Item.prototype.getCodigo = function() {
        return this._codigo || '';
    };

    Item.prototype.comCodigo = function(_codigo) {
        this._codigo = _codigo;
        return this;
    };

    Item.prototype.getDescricao = function() {
        return this._descricao || '';
    };

    Item.prototype.comDescricao = function(_descricao) {
        this._descricao = _descricao;
        return this;
    };

    Item.prototype.getInformacoesAdicionais = function() {
        return this._informacoesAdicionais;
    };

    Item.prototype.comInformacoesAdicionais = function(_informacoesAdicionais) {
        this._informacoesAdicionais = _informacoesAdicionais;
        return this;
    };

    Item.prototype.getNcmSh = function() {
        return this._ncmSh || '';
    };

    Item.prototype.comNcmSh = function(_ncmSh) {
        _ncmSh = _ncmSh;

        this._ncmSh = _ncmSh;
        return this;
    };

    Item.prototype.getOCst = function() {
        return this._oCst || '';
    };

    Item.prototype.comOCst = function(_oCst) {
        this._oCst = _oCst;
        return this;
    };

    Item.prototype.getCfop = function() {
        return this._cfop || '';
    };

    Item.prototype.comCfop = function(_cfop) {
        _cfop = _cfop;

        this._cfop = _cfop;
        return this;
    };

    Item.prototype.getUnidade = function() {
        return this._unidade || '';
    };

    Item.prototype.comUnidade = function(_unidade) {
        this._unidade = _unidade;
        return this;
    };

    Item.prototype.getQuantidade = function() {
        return this._quantidade || 0;
    };

    Item.prototype.getQuantidadeFormatada = function() {
        return Math.round(this.getQuantidade());
    };

    Item.prototype.comQuantidade = function(_quantidade) {
        if(_quantidade < 0) {
            throw new Error('Quantidade não pode ser inferior a zero');
        }

        this._quantidade = _quantidade;
        return this;
    };

    Item.prototype.getValorUnitario = function() {
        return this._valorUnitario || 0;
    };

    Item.prototype.getValorUnitarioFormatado = function() {
        return formatarDinheiroSemSifra(this.getValorUnitario());
    };

    Item.prototype.comValorUnitario = function(_valorUnitario) {
        if(_valorUnitario < 0) {
            throw new Error('Valor unitário não pode ser inferior a zero');
        }

        this._valorUnitario = _valorUnitario;
        return this;
    };

    Item.prototype.getValorTotal = function() {
        return this._valorTotal || 0;
    };

    Item.prototype.getValorTotalFormatado = function() {
        return formatarDinheiroSemSifra(this.getValorTotal());
    };

    Item.prototype.comValorTotal = function(_valorTotal) {
        if(_valorTotal < 0) {
            throw new Error('Valor total não pode ser inferior a zero');
        }

        this._valorTotal = _valorTotal;
        return this;
    };

    Item.prototype.getBaseDeCalculoDoIcms = function() {
        //Embora os valores daqui para baixo sejam numéricos
        //eu deixei retornando string vazio por padrão
        return this._baseDeCalculoDoIcms || '';
    };

    Item.prototype.getBaseDeCalculoDoIcmsFormatada = function() {
        if(!this.getBaseDeCalculoDoIcms()) {
            return '';
        }

        return formatarDinheiroSemSifra(this.getBaseDeCalculoDoIcms());
    };

    Item.prototype.comBaseDeCalculoDoIcms = function(_baseDeCalculoDoIcms) {
        if(_baseDeCalculoDoIcms < 0) {
            throw new Error('Base de cálculo do icms não pode ser inferior a zero');
        }

        this._baseDeCalculoDoIcms = _baseDeCalculoDoIcms;
        return this;
    };

    Item.prototype.getValorDoIcms = function() {
        return this._valorDoIcms || '';
    };

    Item.prototype.getValorDoIcmsFormatado = function() {
        if(!this.getValorDoIcms()) {
            return '';
        }

        return formatarDinheiroSemSifra(this.getValorDoIcms());
    };

    Item.prototype.comValorDoIcms = function(_valorDoIcms) {
        if(_valorDoIcms < 0) {
            throw new Error('Valor do icms não pode ser inferior a zero');
        }

        this._valorDoIcms = _valorDoIcms;
        return this;
    };

    Item.prototype.getValorDoIpi = function() {
        return this._valorDoIpi || '';
    };

    Item.prototype.getValorDoIpiFormatado = function() {
        if(!this.getValorDoIpi()) {
            return '';
        }

        return formatarDinheiroSemSifra(this.getValorDoIpi());
    };

    Item.prototype.comValorDoIpi = function(_valorDoIpi) {
        if(_valorDoIpi < 0) {
            throw new Error('Valor do ipi não pode ser inferior a zero');
        }

        this._valorDoIpi = _valorDoIpi;
        return this;
    };

    Item.prototype.getAliquotaDoIcms = function() {
        return this._aliquotaDoIcms || '';
    };

    function formatarAliquota(aliquota) {
        return formatarDinheiroSemSifra(aliquota);
    }

    Item.prototype.getAliquotaDoIcmsFormatada = function() {
        if(this.getAliquotaDoIcms() !== '') {
            return formatarAliquota(this.getAliquotaDoIcms());
        }

        return '';
    };

    Item.prototype.comAliquotaDoIcms = function(_aliquotaDoIcms) {
        this._aliquotaDoIcms = _aliquotaDoIcms;
        return this;
    };

    Item.prototype.getAliquotaDoIpi = function() {
        return this._aliquotaDoIpi || '';
    };

    Item.prototype.getAliquotaDoIpiFormatada = function() {
        if(this.getAliquotaDoIpi() !== '') {
            return formatarAliquota(this.getAliquotaDoIpi());
        }

        return '';
    };

    Item.prototype.comAliquotaDoIpi = function(_aliquotaDoIpi) {
        this._aliquotaDoIpi = _aliquotaDoIpi;
        return this;
    };

    Item.prototype.getInformacoesAdicionais = function() {
        return this._informacoesAdicionais;
    };

    Item.prototype.comInformacoesAdicionais = function(_informacoesAdicionais) {
        this._informacoesAdicionais = _informacoesAdicionais;
        return this;
    };

    return Item;
})();

module.exports = Item;

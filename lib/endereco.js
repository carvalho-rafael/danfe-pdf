'use strict';

const { zipCodeMask } = require("./util/formatter");

var Endereco = (function() {
    function Endereco() {

    }

    Endereco.prototype.getLogradouro = function() {
        return this._logradouro || '';
    };

    Endereco.prototype.comLogradouro = function(_logradouro) {
        this._logradouro = _logradouro;
        return this;
    };

    Endereco.prototype.getNumero = function() {
        return this._numero || '';
    };

    Endereco.prototype.comNumero = function(_numero) {
        this._numero = _numero;
        return this;
    };

    Endereco.prototype.getComplemento = function() {
        return this._complemento || '';
    };

    Endereco.prototype.comComplemento = function(_complemento) {
        this._complemento = _complemento;
        return this;
    };

    Endereco.prototype.getBairro = function() {
        return this._bairro || '';
    };

    Endereco.prototype.comBairro = function(_bairro) {
        this._bairro = _bairro;
        return this;
    };

    Endereco.prototype.getCidade = function() {
        return this._cidade || '';
    };

    Endereco.prototype.comCidade = function(_cidade) {
        this._cidade = _cidade;
        return this;
    };

    Endereco.prototype.getCep = function() {
        return this._cep || '';
    };

    Endereco.prototype.getCepFormatado = function() {
        return zipCodeMask(this.getCep());
    };

    Endereco.prototype.comCep = function(_cep) {
        this._cep = _cep;
        return this;
    };

    Endereco.prototype.getMunicipio = function() {
        return this._municipio || '';
    };

    Endereco.prototype.comMunicipio = function(_municipio) {
        this._municipio = _municipio;
        return this;
    };

    Endereco.prototype.getUf = function() {
        return this._uf || '';
    };

    Endereco.prototype.comUf = function(_uf) {
        if(!_uf) {
            return this;
        }

        this._uf = _uf.toUpperCase();
        return this;
    };

    Endereco.prototype.getPrimeiraLinha = function() {
        return [
            this.getLogradouro(),
            this.getNumero(),
            this.getComplemento()
        ].filter(function(dados) {
            return dados;
        }).join(' ');
    };

    Endereco.prototype.getSegundaLinha = function() {
        var resultado = '';

        if(this.getBairro()) {
            resultado += this.getBairro();
        }

        if(this.getBairro() && this.getCidade()) {
            resultado += ', ';
        }

        if(this.getCidade()) {
            resultado += this.getCidade();
        }

        if(resultado && this.getUf()) {
            resultado += '/';
        }

        if(this.getUf()) {
            resultado += this.getUf();
        }

        if(resultado && this.getCep()) {
            resultado += ' — ';
        }

        if(this.getCep()) {
            resultado += this.getCepFormatado();
        }

        return resultado;
    };

    return Endereco;
})();

module.exports = Endereco;

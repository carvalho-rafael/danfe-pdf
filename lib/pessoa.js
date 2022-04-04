'use strict';

var gammautils = require('gammautils'),
    eEmail = gammautils.validation.isValidEmail,
    ie = require('inscricaoestadual'),

    Endereco = require('./endereco');

var Pessoa = (function() {
    function Pessoa() {
        this.comEndereco(new Endereco());
    }

    Pessoa.prototype.getNome = function() {
        return this._nome || '';
    };

    Pessoa.prototype.comNome = function(_nome) {
        this._nome = _nome;
        return this;
    };

    Pessoa.prototype.getRegistroNacional = function() {
        return this._registroNacional || '';
    };

    Pessoa.prototype.getRegistroNacionalFormatado = function() {
        return this.getRegistroNacional();
    };

    Pessoa.prototype.comRegistroNacional = function(_registroNacional) {
        this._registroNacional = _registroNacional;
        return this;
    };

    Pessoa.prototype.getEndereco = function() {
        return this._endereco;
    };

    Pessoa.prototype.comEndereco = function(_endereco) {
        this._endereco = _endereco;
        return this;
    };

    Pessoa.prototype.getInscricaoEstadual = function() {
        return this._inscricaoEstadual || '';
    };

    Pessoa.prototype.comInscricaoEstadual = function(_inscricaoEstadual) {
        if(!ie(_inscricaoEstadual)) {
            throw new Error('Inscrição estadual insválida');
        }

        this._inscricaoEstadual = _inscricaoEstadual;
        return this;
    };

    Pessoa.prototype.getTelefone = function() {
        return this._telefone || '';
    };

    Pessoa.prototype.getTelefoneFormatado = function() {
        return this.getTelefone();
    };

    Pessoa.prototype.comTelefone = function(_telefone) {
        this._telefone = _telefone;
        return this;
    };

    Pessoa.prototype.getEmail = function() {
        return this._email || '';
    };

    Pessoa.prototype.comEmail = function(_email) {
        if(!eEmail(_email)) {
            throw new Error('Não é um email válido');
        }

        this._email = _email;
        return this;
    };

    return Pessoa;
})();

module.exports = Pessoa;

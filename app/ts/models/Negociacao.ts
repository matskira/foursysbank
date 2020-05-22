class Negociacao {

    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
        ) { }//Ao colocarmos o '_' significa que é um atributo privado

    get data() { //Padrão de getter no ES2015
        return this._data;
    }

    get quantidade() { //Padrão de getter no ES2015
        return this._quantidade;
    }

    get valor() { //Padrão de getter no ES2015
        return this._valor;
    }

    get volume() { //Padrão de getter no ES2015
        return this._quantidade * this._valor;
    }
}
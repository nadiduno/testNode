const Conta = require('../main');

describe('Testando o objeto conta', () => {
    it('Should init whith correct parameters', () =>{
        const conta = new Conta ('1234','123','0');
        expect (conta.agencia).toEqual('1234');
    })
})
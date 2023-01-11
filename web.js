let Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

const balance = async (account) => {
  const ammount = await web3.eth.getBalance(account);
  return ammount;
};
const transferAmount = async (credit, debit) => {
  const transfer = await web3.eth.sendTransaction({
    from: credit,
    to: debit,
    value: web3.utils.toWei('1', 'ether'),
  });
  console.log('Credit', await balance(credit));
  console.log('Dedit', await balance(debit));
};

transferAmount(
  '0x9F9C5748f23E75633A91422bf52C7906F3823B5e',
  '0x3a85a799414509D49BEDB05413bC0d32B38E48a4'
);

var solc = require('solc');
const Web3 = require('web3');
const fs = require('fs');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

const fileInput = fs.readFileSync('contract.sol').toString();
// const fileInputs = fs.readFile('contract.sol').toString();
// console.log(fileInputs);

var input = {
  language: 'Solidity',
  sources: {
    'contract.sol': {
      content: fileInput,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

// New syntax (supported from 0.5.12, mandatory from 0.6.0)
var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);
const ABI = output.contracts['contract.sol']['MyContract'].abi;
const bytecode =
  output.contracts['contract.sol']['MyContract'].evm.bytecode.object;

const contract = new web3.eth.Contract(ABI);
let defaultAccounts;

web3.eth.getAccounts().then((acc) => {
  defaultAccounts = acc[0];

  contract
    .deploy({ data: bytecode })
    .send({ from: defaultAccounts, gas: 1500000 })
    .on('recipt', (recipt) => {
      console.log(recipt);
    });
});

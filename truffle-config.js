require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note muscle collect hunt dry flock gather'; 
let testAccounts = [
"0x9fdb9a3dcaeae4bbaf8c01a9ad2e0dc7d1c1a880f74940f79a600ab5d7665014",
"0x2548170103dedc0fa5b1d4e789e9510217aef46c2b3c1441b04c52969adffd63",
"0xf860c67fcc7a99c7d44e20bf56303d9cc49aeb4828a03d6498dd32c46235f59a",
"0x1fce2486a0e47a554f83a17b659215fba8e8462a9ec1d370fd80d4a134b9544a",
"0x1033cca2cca2dac7a906e2d2c39cbaa41098ce26f1ddf363ae79340005cde2a4",
"0xc52a03fdcadb0f8234035eb04e0fc704138e3143fd17bd684d0d80800847d68d",
"0x308a4b102b1e6513f959d6f83d3eb77ab9bdafc4aca14adaa9c50b11f2174719",
"0x1dd4fcd326de5d048d42b37f61ad0f431c7c6a3632f9c751db6634476b556e03",
"0x7721b4f78f52a967bdfb3fe11f8fdabddef3c1066c93138b77354373b0f847ff",
"0x5bd7a3cc81ae27741594a23866805864f38424e3dbbb6f3056ea769905ec6e86"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

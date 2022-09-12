require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index regret random come guess clog slot gift'; 
let testAccounts = [
"0xbfc6b5cf98f5ac76c8a748557bf28db93bb108a799ea7aac811976a157b05711",
"0x39c1616bf6f07c9da8be8aee243efef041472ca4144aa63bc410bdd61d14a5b6",
"0x550827bf79957fb937cf03157508bacced20ae26dd76324154405386176be0d3",
"0x51148a055996721f61bc1543085941ac689ad0aca8cd9625b53d6c7299197b9e",
"0xdb75255db0f409124613b7248873b9edafaad34879913a086f45c286a7dd9198",
"0x3935f32e7c45e5b315ee3341a811f7c5116b40a6e3d2eef9861cab3e49cce0d5",
"0x9893005971f6ba1526c318927cc00614e4c990f3e75d762216c25688fc233680",
"0x6c910426d85579de197b3e2037b3164caf663040a8156815d92a3a852ceffa22",
"0xfebb3a7a6aeb887b62208d56c3b72712dcf5f795f231da594ac90bb278e2e9cc",
"0x93e94df3f366da6ca7ca0ae3b6ad0c5776c8dc6a7bd48912147ca1b86878d451"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



const sdk = require('@defillama/sdk');
const MINT_CROWD_TOKEN_CONTRACT = '0x483dd3425278C1f79F377f1034d9d2CaE55648B6';
const MINT_CROWD_BOND_CONTRACT  ='0xBeDf619c69f5C1655E58463B85A4EE67629dE409';

async function tvl(_, _1, _2, { api }) {
const balances = {};
 
const collateralBalance = await api.call({
 abi: 'erc20:balanceOf',
 target: MINT_CROWD_TOKEN_CONTRACT,
 params: [MINT_CROWD_BOND_CONTRACT],  
 });  
  
 await sdk.util.sumSingleBalance(balances, MINT_TOKEN_CONTRACT, collateralBalance, api.chain) 
  return balances; 
  }
module.exports = {
  timetravel: true,
  misrepresentedTokens: false,
  methodology: 'counts the number of MINT tokens in the Club Bonding contract.',
  start: 1000235,
  bsc: {
     tvl,
    }
  };

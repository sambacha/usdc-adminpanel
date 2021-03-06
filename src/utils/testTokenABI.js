export const abi = [
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'account', type: 'address' }],
    name: 'isMinter',
    outputs: [{ name: '', type: 'bool' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'pauser',
    outputs: [{ name: '', type: 'address' }],
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', type: 'bool'}],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'masterMinter',
    outputs: [{ name: '', type: 'address' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'blacklister',
    outputs: [{ name: '', type: 'address' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'account', type: 'address' }],
    name: 'isContract',
    outputs: [{ name: '', type: 'bool' }],
    type: 'function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'isBlacklisted',
    outputs: [{ name: '', type: 'bool' }],
    type: 'function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'blacklist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'unBlacklist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name:'_to', type: 'address'}, {name:'_amount', type:'uint256'}],
    name: 'mint',
    outputs: [{ name:'', type: 'bool' }],
    stateMutability: 'nonpayable',
    type:'function',
  },
  {
    inputs: [{ name:'_amount', type :'uint256' }],
    name: 'burn',
    outputs:[],
    stateMutability:'nonpayable',
    type:'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [{ name:'', type: 'bool' }],
    stateMutability: 'nonpayable',
    type:'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [{ name:'', type: 'bool' }],
    stateMutability: 'nonpayable',
    type:'function',
  },
  {
    inputs: [{ name:'_minter', type: 'address'}, {name:'_amount', type:'uint256'}],
    name: 'configureMinter',
    outputs: [{ name:'', type: 'bool' }],
    stateMutability: 'nonpayable',
    type:'function',
  },
  {
    inputs: [{ name:'_minter', type: 'address'}],
    name: 'removeMinter',
    outputs: [{ name:'', type: 'bool' }],
    stateMutability: 'nonpayable',
    type:'function',
  },
  {
    inputs: [{ name:'_minter', type: 'address'}],
    name: 'minterAllowance',
    outputs: [{ name:'allowance', type: 'uint256' }],
    type:'function',
  },
  {
    inputs: [{ name:'_master_minter', type: 'address'}],
    name: 'updateMasterMinter',
    outputs: [{ name:'', type: 'bool' }],
    stateMutability: 'nonpayable',
    type:'function',
  },
  {
    inputs: [{ name:'_pauser', type: 'address'}],
    name: 'updatePauser',
    outputs: [{ name:'', type: 'bool' }],
    stateMutability: 'nonpayable',
    type:'function',
  },
  {
    inputs: [{ name:'_blacklister', type: 'address'}],
    name: 'updateBlacklister',
    outputs: [{ name:'', type: 'bool' }],
    stateMutability: 'nonpayable',
    type:'function',
  },
];
  

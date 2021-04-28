// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';

contract Turia is ERC20 {
    constructor() ERC20 ('Turia', 'TUR') {
        _mint(msg.sender, 1000000 * 10 ** 18);
    }
}

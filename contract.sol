// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 < 0.9.0;

contract MyContract {
    string public myString0 = "Hello World";
    
    uint256 public myUint;
    
    function setMyUint(uint  _myUint) public {
        myUint = _myUint;
    }
     bool public myBool;
    
    function setMyBool(bool  _myBool) public {
        myBool = _myBool;
    }
    uint8 public myUint8;
    
    function incrementUinit() public {
        myUint8++;
    }
    function decrementUinit() public {
        myUint8--;
    }
    address public myAddress;
    
    function setAddress(address _address) public {
        myAddress = _address;
    }
    
    function getBalanceOfAddress() public view returns(uint){
        return myAddress.balance;
    }
    
    string public myString;
    
    function setMyString(string memory _myString) public {
        myString = _myString;
    }
    
}
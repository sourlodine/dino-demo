# TACT Compilation Report
Contract: BettingContract
BOC Size: 1407 bytes

# Types
Total Types: 14

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## ChangeOwner
TLB: `change_owner#819dbe99 queryId:uint64 newOwner:address = ChangeOwner`
Signature: `ChangeOwner{queryId:uint64,newOwner:address}`

## ChangeOwnerOk
TLB: `change_owner_ok#327b2b4a queryId:uint64 newOwner:address = ChangeOwnerOk`
Signature: `ChangeOwnerOk{queryId:uint64,newOwner:address}`

## NewBet
TLB: `new_bet#f5383c68 chosenTeam:^string hackatonPosition:uint16 buildLink:^string = NewBet`
Signature: `NewBet{chosenTeam:^string,hackatonPosition:uint16,buildLink:^string}`

## NewBetResponse
TLB: `new_bet_response#c6eb0016 seqno:uint32 = NewBetResponse`
Signature: `NewBetResponse{seqno:uint32}`

## CloseBet
TLB: `close_bet#ff04702a seqno:uint32 win:bool = CloseBet`
Signature: `CloseBet{seqno:uint32,win:bool}`

## InternalSetBet
TLB: `internal_set_bet#61cdc0c4 chosenTeam:^string hackatonPosition:uint16 buildLink:^string owner:address = InternalSetBet`
Signature: `InternalSetBet{chosenTeam:^string,hackatonPosition:uint16,buildLink:^string,owner:address}`

## InternalCloseBet
TLB: `internal_close_bet#dccb7261 excess:address = InternalCloseBet`
Signature: `InternalCloseBet{excess:address}`

## BetDetails
TLB: `_ chosenTeam:^string hackatonPosition:uint16 buildLink:^string = BetDetails`
Signature: `BetDetails{chosenTeam:^string,hackatonPosition:uint16,buildLink:^string}`

# Get Methods
Total Get Methods: 3

## betsCounter

## betAdress
Argument: seqno

## owner

# Error Codes
2: Stack underflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
9826: bet already created
23695: only parent contract can close bets
58487: bet with this seqno does not exist
59861: only parent contract can create bets
import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type NewBet = {
    $$type: 'NewBet';
    chosenTeam: string;
    hackatonPosition: bigint;
    buildLink: string;
}

export function storeNewBet(src: NewBet) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4114103400, 32);
        b_0.storeStringRefTail(src.chosenTeam);
        b_0.storeUint(src.hackatonPosition, 16);
        b_0.storeStringRefTail(src.buildLink);
    };
}

export function loadNewBet(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4114103400) { throw Error('Invalid prefix'); }
    let _chosenTeam = sc_0.loadStringRefTail();
    let _hackatonPosition = sc_0.loadUintBig(16);
    let _buildLink = sc_0.loadStringRefTail();
    return { $$type: 'NewBet' as const, chosenTeam: _chosenTeam, hackatonPosition: _hackatonPosition, buildLink: _buildLink };
}

function loadTupleNewBet(source: TupleReader) {
    let _chosenTeam = source.readString();
    let _hackatonPosition = source.readBigNumber();
    let _buildLink = source.readString();
    return { $$type: 'NewBet' as const, chosenTeam: _chosenTeam, hackatonPosition: _hackatonPosition, buildLink: _buildLink };
}

function storeTupleNewBet(source: NewBet) {
    let builder = new TupleBuilder();
    builder.writeString(source.chosenTeam);
    builder.writeNumber(source.hackatonPosition);
    builder.writeString(source.buildLink);
    return builder.build();
}

function dictValueParserNewBet(): DictionaryValue<NewBet> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeNewBet(src)).endCell());
        },
        parse: (src) => {
            return loadNewBet(src.loadRef().beginParse());
        }
    }
}

export type NewBetResponse = {
    $$type: 'NewBetResponse';
    seqno: bigint;
}

export function storeNewBetResponse(src: NewBetResponse) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3337289750, 32);
        b_0.storeUint(src.seqno, 32);
    };
}

export function loadNewBetResponse(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3337289750) { throw Error('Invalid prefix'); }
    let _seqno = sc_0.loadUintBig(32);
    return { $$type: 'NewBetResponse' as const, seqno: _seqno };
}

function loadTupleNewBetResponse(source: TupleReader) {
    let _seqno = source.readBigNumber();
    return { $$type: 'NewBetResponse' as const, seqno: _seqno };
}

function storeTupleNewBetResponse(source: NewBetResponse) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.seqno);
    return builder.build();
}

function dictValueParserNewBetResponse(): DictionaryValue<NewBetResponse> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeNewBetResponse(src)).endCell());
        },
        parse: (src) => {
            return loadNewBetResponse(src.loadRef().beginParse());
        }
    }
}

export type CloseBet = {
    $$type: 'CloseBet';
    seqno: bigint;
    win: boolean;
}

export function storeCloseBet(src: CloseBet) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4278480938, 32);
        b_0.storeUint(src.seqno, 32);
        b_0.storeBit(src.win);
    };
}

export function loadCloseBet(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4278480938) { throw Error('Invalid prefix'); }
    let _seqno = sc_0.loadUintBig(32);
    let _win = sc_0.loadBit();
    return { $$type: 'CloseBet' as const, seqno: _seqno, win: _win };
}

function loadTupleCloseBet(source: TupleReader) {
    let _seqno = source.readBigNumber();
    let _win = source.readBoolean();
    return { $$type: 'CloseBet' as const, seqno: _seqno, win: _win };
}

function storeTupleCloseBet(source: CloseBet) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.seqno);
    builder.writeBoolean(source.win);
    return builder.build();
}

function dictValueParserCloseBet(): DictionaryValue<CloseBet> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCloseBet(src)).endCell());
        },
        parse: (src) => {
            return loadCloseBet(src.loadRef().beginParse());
        }
    }
}

export type InternalSetBet = {
    $$type: 'InternalSetBet';
    chosenTeam: string;
    hackatonPosition: bigint;
    buildLink: string;
    owner: Address;
}

export function storeInternalSetBet(src: InternalSetBet) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1640874180, 32);
        b_0.storeStringRefTail(src.chosenTeam);
        b_0.storeUint(src.hackatonPosition, 16);
        b_0.storeStringRefTail(src.buildLink);
        b_0.storeAddress(src.owner);
    };
}

export function loadInternalSetBet(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1640874180) { throw Error('Invalid prefix'); }
    let _chosenTeam = sc_0.loadStringRefTail();
    let _hackatonPosition = sc_0.loadUintBig(16);
    let _buildLink = sc_0.loadStringRefTail();
    let _owner = sc_0.loadAddress();
    return { $$type: 'InternalSetBet' as const, chosenTeam: _chosenTeam, hackatonPosition: _hackatonPosition, buildLink: _buildLink, owner: _owner };
}

function loadTupleInternalSetBet(source: TupleReader) {
    let _chosenTeam = source.readString();
    let _hackatonPosition = source.readBigNumber();
    let _buildLink = source.readString();
    let _owner = source.readAddress();
    return { $$type: 'InternalSetBet' as const, chosenTeam: _chosenTeam, hackatonPosition: _hackatonPosition, buildLink: _buildLink, owner: _owner };
}

function storeTupleInternalSetBet(source: InternalSetBet) {
    let builder = new TupleBuilder();
    builder.writeString(source.chosenTeam);
    builder.writeNumber(source.hackatonPosition);
    builder.writeString(source.buildLink);
    builder.writeAddress(source.owner);
    return builder.build();
}

function dictValueParserInternalSetBet(): DictionaryValue<InternalSetBet> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInternalSetBet(src)).endCell());
        },
        parse: (src) => {
            return loadInternalSetBet(src.loadRef().beginParse());
        }
    }
}

export type InternalCloseBet = {
    $$type: 'InternalCloseBet';
    excess: Address;
}

export function storeInternalCloseBet(src: InternalCloseBet) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3704320609, 32);
        b_0.storeAddress(src.excess);
    };
}

export function loadInternalCloseBet(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3704320609) { throw Error('Invalid prefix'); }
    let _excess = sc_0.loadAddress();
    return { $$type: 'InternalCloseBet' as const, excess: _excess };
}

function loadTupleInternalCloseBet(source: TupleReader) {
    let _excess = source.readAddress();
    return { $$type: 'InternalCloseBet' as const, excess: _excess };
}

function storeTupleInternalCloseBet(source: InternalCloseBet) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.excess);
    return builder.build();
}

function dictValueParserInternalCloseBet(): DictionaryValue<InternalCloseBet> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInternalCloseBet(src)).endCell());
        },
        parse: (src) => {
            return loadInternalCloseBet(src.loadRef().beginParse());
        }
    }
}

export type BetDetails = {
    $$type: 'BetDetails';
    chosenTeam: string;
    hackatonPosition: bigint;
    buildLink: string;
}

export function storeBetDetails(src: BetDetails) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.chosenTeam);
        b_0.storeUint(src.hackatonPosition, 16);
        b_0.storeStringRefTail(src.buildLink);
    };
}

export function loadBetDetails(slice: Slice) {
    let sc_0 = slice;
    let _chosenTeam = sc_0.loadStringRefTail();
    let _hackatonPosition = sc_0.loadUintBig(16);
    let _buildLink = sc_0.loadStringRefTail();
    return { $$type: 'BetDetails' as const, chosenTeam: _chosenTeam, hackatonPosition: _hackatonPosition, buildLink: _buildLink };
}

function loadTupleBetDetails(source: TupleReader) {
    let _chosenTeam = source.readString();
    let _hackatonPosition = source.readBigNumber();
    let _buildLink = source.readString();
    return { $$type: 'BetDetails' as const, chosenTeam: _chosenTeam, hackatonPosition: _hackatonPosition, buildLink: _buildLink };
}

function storeTupleBetDetails(source: BetDetails) {
    let builder = new TupleBuilder();
    builder.writeString(source.chosenTeam);
    builder.writeNumber(source.hackatonPosition);
    builder.writeString(source.buildLink);
    return builder.build();
}

function dictValueParserBetDetails(): DictionaryValue<BetDetails> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBetDetails(src)).endCell());
        },
        parse: (src) => {
            return loadBetDetails(src.loadRef().beginParse());
        }
    }
}

 type Bet_init_args = {
    $$type: 'Bet_init_args';
    parent: Address;
    seqno: bigint;
    owner: Address;
}

function initBet_init_args(src: Bet_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.parent);
        b_0.storeInt(src.seqno, 257);
        b_0.storeAddress(src.owner);
    };
}

async function Bet_init(parent: Address, seqno: bigint, owner: Address) {
    const __code = Cell.fromBase64('te6ccgECFwEABC4AART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFts88uCCDwQFAgEgCgsB9gGSMH/gcCHXScIflTAg1wsf3iCCEGHNwMS6jlYw0x8BghBhzcDEuvLggdQB0AHTD9QB0AH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIFEMwbBQ1NTU1ggDp1fhCUoDHBfL0gSZiAbPy9BJ/f+AgghDcy3JhugYAxsj4QwHMfwHKAFVgUHYg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYUy//IUAPPFslYzMhYzxbJAczLD1gg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbKAMntVAL2jsUw0x8BghDcy3JhuvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxgVyP+EJSkMcF8vRwgEJ/VSBtbW3bPH/gghCUapi2uo6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwCAcBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgEgDA0CASATFAIRubids82zxsc4Dw4CEbhR3bPNs8bHGA8QAAZUdCMB1O1E0NQB+GPSAAGOUvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0//UAdAB1AHQAdMP+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHSAFVgbBfg+CjXCwqDCbry4IkRAAIhAZb6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAYEBAdcA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiEMwA9FY2zwSABCLCHCLCEATcAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFIFRYAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtZVM3Nnc3R0FaZHQyZkM0RWVoYlJ5WWhaak1UVmQ4VFhSMUZHS1hSbzNvMjWCA=');
    const __system = Cell.fromBase64('te6cckECGQEABDgAAQHAAQEFoXIDAgEU/wD0pBP0vPLICwMCAWIECwN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRbbPPLgghAFCgH2AZIwf+BwIddJwh+VMCDXCx/eIIIQYc3AxLqOVjDTHwGCEGHNwMS68uCB1AHQAdMP1AHQAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgUQzBsFDU1NTWCAOnV+EJSgMcF8vSBJmIBs/L0En9/4CCCENzLcmG6BgL2jsUw0x8BghDcy3JhuvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxgVyP+EJSkMcF8vRwgEJ/VSBtbW3bPH/gghCUapi2uo6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwCAcBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAJAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAMbI+EMBzH8BygBVYFB2INdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WFMv/yFADzxbJWMzIWM8WyQHMyw9YINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WygDJ7VQCASAMFAIBIA0PAhG5uJ2zzbPGxzgQDgAGVHQjAhG4Ud2zzbPGxxgQEwHU7UTQ1AH4Y9IAAY5S+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHT/9QB0AHUAdAB0w/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdIAVWBsF+D4KNcLCoMJuvLgiREBlvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBgQEB1wD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIQzAD0VjbPBIAEIsIcIsIQBNwAAIhAgEgFRYAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAIBSBcYABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbWVTNzZ3N0dBWmR0MmZDNEVlaGJSeVloWmpNVFZkOFRYUjFGR0tYUm8zbzI1ggxh944g==');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initBet_init_args({ $$type: 'Bet_init_args', parent, seqno, owner })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Bet_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    9826: { message: `bet already created` },
    23695: { message: `only parent contract can close bets` },
    58487: { message: `bet with this seqno does not exist` },
    59861: { message: `only parent contract can create bets` },
}

const Bet_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"NewBet","header":4114103400,"fields":[{"name":"chosenTeam","type":{"kind":"simple","type":"string","optional":false}},{"name":"hackatonPosition","type":{"kind":"simple","type":"uint","optional":false,"format":16}},{"name":"buildLink","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"NewBetResponse","header":3337289750,"fields":[{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
    {"name":"CloseBet","header":4278480938,"fields":[{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"win","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"InternalSetBet","header":1640874180,"fields":[{"name":"chosenTeam","type":{"kind":"simple","type":"string","optional":false}},{"name":"hackatonPosition","type":{"kind":"simple","type":"uint","optional":false,"format":16}},{"name":"buildLink","type":{"kind":"simple","type":"string","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"InternalCloseBet","header":3704320609,"fields":[{"name":"excess","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"BetDetails","header":null,"fields":[{"name":"chosenTeam","type":{"kind":"simple","type":"string","optional":false}},{"name":"hackatonPosition","type":{"kind":"simple","type":"uint","optional":false,"format":16}},{"name":"buildLink","type":{"kind":"simple","type":"string","optional":false}}]},
]

const Bet_getters: ABIGetter[] = [
    {"name":"betDetails","arguments":[],"returnType":{"kind":"simple","type":"BetDetails","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const Bet_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"InternalSetBet"}},
    {"receiver":"internal","message":{"kind":"typed","type":"InternalCloseBet"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Bet implements Contract {
    
    static async init(parent: Address, seqno: bigint, owner: Address) {
        return await Bet_init(parent, seqno, owner);
    }
    
    static async fromInit(parent: Address, seqno: bigint, owner: Address) {
        const init = await Bet_init(parent, seqno, owner);
        const address = contractAddress(0, init);
        return new Bet(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Bet(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Bet_types,
        getters: Bet_getters,
        receivers: Bet_receivers,
        errors: Bet_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: InternalSetBet | InternalCloseBet | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalSetBet') {
            body = beginCell().store(storeInternalSetBet(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalCloseBet') {
            body = beginCell().store(storeInternalCloseBet(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getBetDetails(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('betDetails', builder.build())).stack;
        const result = loadTupleBetDetails(source);
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}
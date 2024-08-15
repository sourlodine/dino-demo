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

 type BettingContract_init_args = {
    $$type: 'BettingContract_init_args';
    id: bigint;
}

function initBettingContract_init_args(src: BettingContract_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.id, 257);
    };
}

async function BettingContract_init(id: bigint) {
    const __code = Cell.fromBase64('te6ccgECHgEABXMAART/APSkE/S88sgLAQIBYgIDAuDQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts88uCCyPhDAcx/AcoAVSBQI8sPASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFssfye1UGgQCASAODwPSAZIwf+BwIddJwh+VMCDXCx/eIIIQ9Tg8aLqOnjDTHwGCEPU4PGi68uCB1AHQAdMP1AHQQzBsE9s8f+AgghD/BHAquo6YMNMfAYIQ/wRwKrry4IHTH9IAWWwS2zx/4IIQlGqYtrrjAjBwBQYHAqgDpPhD+Cj4QlIw2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Ij4QhA2RXAdCAO4MFUg2zyCAOR3U0G78vT4Q/go+EJBMBbbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI+EIJHQoBTtMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8fwsCzshVMIIQYc3AxFAFyx/IUATPFslQA8zLD8hYzxbJAcwBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyRA0ghAL68IAWnJQYn8GRVXbPCDIAYIQxusAFljLH8sfyfhCAX9t2zwMCwAS+EJSIMcF8uCEAWzIAYIQ3MtyYVjLHwEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJcIBCfwQDbW3bPFgMATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPAwByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADQCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBWBARAgEgFBUCEbSju2ebZ42GMBoSAhG3mxtnm2eNhjAaEwACIQACIADdu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIJwQM51aecV+dJQsB1hbiZHsoAgFIFhcCASAYGQB1sm7jQ1aXBmczovL1FtY0xFWHo5QWZYZUEzeVVoV0g2dFBtVzhRYzlzYTF2elJVSk13N3V4dmdIWFCCAAEa1fdqJoaQAAwAIVrvjtniqBbZ42GMAaGwGU7UTQ1AH4Y9IAAY4o0w/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMfVSBsE+D4KNcLCoMJuvLgiYEBAdcAAQHR2zwcAZb4Q/go+EJBMNs8cFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgdAAb4QnAA6APQ9AQwbQGCALkBAYAQ9A9vofLghwGCALkBIgKAEPQXyAHI9ADJAcxwAcoAVSAEWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhKBAQHPAAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJ');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initBettingContract_init_args({ $$type: 'BettingContract_init_args', id })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const BettingContract_errors: { [key: number]: { message: string } } = {
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

const BettingContract_types: ABIType[] = [
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

const BettingContract_getters: ABIGetter[] = [
    {"name":"betsCounter","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"betAdress","arguments":[{"name":"seqno","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const BettingContract_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"NewBet"}},
    {"receiver":"internal","message":{"kind":"typed","type":"CloseBet"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class BettingContract implements Contract {
    
    static async init(id: bigint) {
        return await BettingContract_init(id);
    }
    
    static async fromInit(id: bigint) {
        const init = await BettingContract_init(id);
        const address = contractAddress(0, init);
        return new BettingContract(address, init);
    }
    
    static fromAddress(address: Address) {
        return new BettingContract(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  BettingContract_types,
        getters: BettingContract_getters,
        receivers: BettingContract_receivers,
        errors: BettingContract_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: NewBet | CloseBet | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'NewBet') {
            body = beginCell().store(storeNewBet(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CloseBet') {
            body = beginCell().store(storeCloseBet(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getBetsCounter(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('betsCounter', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getBetAdress(provider: ContractProvider, seqno: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(seqno);
        let source = (await provider.get('betAdress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}
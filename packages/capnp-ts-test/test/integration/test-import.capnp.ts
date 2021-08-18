/* tslint:disable */

/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */

import * as capnp from "capnp-ts";
import { ObjectSize as __O, Struct as __S } from 'capnp-ts';
import { TestAllTypes } from "./test.capnp.js";
export const _capnpFileId = "f36d7b330303c66e";
export class TestImport extends __S {
    static readonly _capnp = { displayName: "TestImport", id: "bc55b08b672b5d97", size: new __O(0, 1) };
    adoptField(value: capnp.Orphan<TestAllTypes>): void { __S.adopt(value, __S.getPointer(0, this)); }
    disownField(): capnp.Orphan<TestAllTypes> { return __S.disown(this.getField()); }
    getField(): TestAllTypes { return __S.getStruct(0, TestAllTypes, this); }
    hasField(): boolean { return !__S.isNull(__S.getPointer(0, this)); }
    initField(): TestAllTypes { return __S.initStructAt(0, TestAllTypes, this); }
    setField(value: TestAllTypes): void { __S.copyFrom(value, __S.getPointer(0, this)); }
    toString(): string { return "TestImport_" + super.toString(); }
}
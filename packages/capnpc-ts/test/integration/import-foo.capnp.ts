/* tslint:disable */

/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */

import * as capnp from "capnp-ts";
import { ObjectSize as __O, Struct as __S } from 'capnp-ts';
import { Baz } from './import-bar.capnp';
export const _capnpFileId = "fc552bdafbb0b889";
export class Foo extends __S {
    static readonly _capnp = { displayName: "Foo", id: "f92e265d07c50136", size: new __O(0, 1) };
    adoptBaz(value: capnp.Orphan<Baz>): void { __S.adopt(value, __S.getPointer(0, this)); }
    disownBaz(): capnp.Orphan<Baz> { return __S.disown(this.getBaz()); }
    getBaz(): Baz { return __S.getStruct(0, Baz, this); }
    hasBaz(): boolean { return !__S.isNull(__S.getPointer(0, this)); }
    initBaz(): Baz { return __S.initStructAt(0, Baz, this); }
    setBaz(value: Baz): void { __S.copyFrom(value, __S.getPointer(0, this)); }
    toString(): string { return "Foo_" + super.toString(); }
}

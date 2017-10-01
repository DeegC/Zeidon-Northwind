import { Domain } from "../zeidon"

// Should some day be generated from the zeidon.xdm.

export const Northwind_DomainList = {
    "Boolean": {
        name: "Boolean",
        class: "com.quinsoft.zeidon.domains.BooleanDomain"
    } as Domain,
    "Date": {
        name: "Date",
        class: "com.quinsoft.zeidon.domains.DateDomain"
    } as Domain,
    "DateTime": {
        name: "DateTime",
        class: "com.quinsoft.zeidon.domains.DateTimeDomain"
    } as Domain,
    "GeneratedKey": {
        name: "GeneratedKey",
        class: "com.quinsoft.zeidon.domains.GeneratedKeyDomain",
        maxLength: 64
    } as Domain,
    "Integer": {
        name: "Integer",
        class: "com.quinsoft.zeidon.domains.IntegerDomain",
    } as Domain,
    "Double": {
        name: "Integer",
        class: "com.quinsoft.zeidon.domains.DoubleDomain",
    } as Domain,
    "Blob": {
        name: "Integer",
        class: "com.quinsoft.zeidon.domains.BlobDomain",
    } as Domain,
    "Text": {
        name: "Text",
        class: "com.quinsoft.zeidon.domains.StringDomain",
        maxLength: 10000,
    } as Domain,
}

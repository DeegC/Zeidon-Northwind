
/*
  Generated from LOD ZPLOCKO

*/

import * as zeidon from '../zeidon';
import { Northwind_DomainList } from './Northwind-DomainList';
import { Northwind_DomainFunctions } from './Northwind-DomainFunctions';



// ZPLOCKO LOD.
export class ZPLOCKO extends zeidon.ObjectInstance {
    protected rootEntityName(): string { return "ZPLOCKO" };

    public getApplicationName(): String { return "Northwind" };

    getPrototype(entityName: string): any {
        return ZPLOCKOEntityPrototypes[entityName];
    }

    public getLodDef() {
        return ZPLOCKO_LodDef;
    };

    public getDomain( name: string ): zeidon.Domain {
        return Northwind_DomainList[name];
    };

    public getDomainFunctions( domain: zeidon.Domain ): zeidon.DomainFunctions {
        let f = Northwind_DomainFunctions[ domain.class ];
        if ( f )
            return new f( domain );

        return undefined;
    }

    get ZeidonLock(): zeidon.EntityArray<ZPLOCKO_ZeidonLock> {
        return this.roots as zeidon.EntityArray<ZPLOCKO_ZeidonLock>;
    }

    get ZeidonLock$(): ZPLOCKO_ZeidonLock {
        return this.roots.selected() as ZPLOCKO_ZeidonLock;
    }

    // Returns the current entity instance if it exists, otherwise returns an instance
    // that will returned 'undefined' for any property values.  This is the
    // equivalent to the "elvis operator"
    get ZeidonLock$$(): ZPLOCKO_ZeidonLock {
        return (this.roots.selected() as ZPLOCKO_ZeidonLock) || zeidon.SAFE_INSTANCE;
    }

    public static activate( qual?: any ): Promise<ZPLOCKO> {
        return zeidon.ObjectInstance.activateOi( new ZPLOCKO(), qual );
    }
}


export class ZPLOCKO_ZeidonLock extends zeidon.EntityInstance {
    public get entityName(): string { return "ZeidonLock" };

    get LOD_Name(): string { return this.getAttribute("LOD_Name") };
    set LOD_Name(value: string) { this.setAttribute("LOD_Name", value) };

    get KeyValue(): string { return this.getAttribute("KeyValue") };
    set KeyValue(value: string) { this.setAttribute("KeyValue", value) };

    get UserName(): string { return this.getAttribute("UserName") };
    set UserName(value: string) { this.setAttribute("UserName", value) };

    get AllowRead(): boolean { return this.getAttribute("AllowRead") };
    set AllowRead(value: boolean) { this.setAttribute("AllowRead", value) };

    get Timestamp(): Date { return this.getAttribute("Timestamp") };
    set Timestamp(value: Date) { this.setAttribute("Timestamp", value) };

    get ID(): number { return this.getAttribute("ID") };
    set ID(value: number) { this.setAttribute("ID", value) };
}

const ZPLOCKOEntityPrototypes = {
    ZeidonLock: ZPLOCKO_ZeidonLock.prototype, 
}

export const ZPLOCKO_LodDef = {
    name: "ZPLOCKO",
    entities: {
        ZeidonLock: {
            name:        "ZeidonLock",
            erToken:     "110000709",
            create:      true,
            cardMax:     0,
            hasInit:     false,
            creatable:   true,
            includable:  false,
            deletable:   true,
            excludable:  false,
            updatable:   true,
            parentDelete: true,
            childEntities: {
            },
            attributes: {
                LOD_Name: {
                    name:         "LOD_Name",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                KeyValue: {
                    name:         "KeyValue",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                UserName: {
                    name:         "UserName",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                AllowRead: {
                    name:         "AllowRead",
                    hidden:       false,
                    required:     false,
                    domainName:   "Boolean",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Timestamp: {
                    name:         "Timestamp",
                    hidden:       false,
                    required:     true,
                    domainName:   "DateTime",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ID: {
                    name:         "ID",
                    hidden:       false,
                    required:     false,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
            }
        },

    }
}

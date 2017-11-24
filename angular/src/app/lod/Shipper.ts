
/*
  Generated from LOD Shipper

*/

import * as zeidon from '../zeidon';
import { Northwind_DomainList } from './Northwind-DomainList';
import { Northwind_DomainFunctions } from './Northwind-DomainFunctions';



// Shipper LOD.
export class Shipper extends zeidon.ObjectInstance {
    protected rootEntityName(): string { return "Shipper" };

    public getApplicationName(): String { return "Northwind" };

    getPrototype(entityName: string): any {
        return ShipperEntityPrototypes[entityName];
    }

    public getLodDef() {
        return Shipper_LodDef;
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

    get Shipper(): zeidon.EntityArray<Shipper_Shipper> {
        return this.roots as zeidon.EntityArray<Shipper_Shipper>;
    }

    get Shipper$(): Shipper_Shipper {
        return this.roots.selected() as Shipper_Shipper;
    }

    // Returns the current entity instance if it exists, otherwise returns an instance
    // that will returned 'undefined' for any property values.  This is the
    // equivalent to the "elvis operator"
    get Shipper$$(): Shipper_Shipper {
        return (this.roots.selected() as Shipper_Shipper) || zeidon.SAFE_INSTANCE;
    }

    public static activate( qual?: any ): Promise<Shipper> {
        return zeidon.ObjectInstance.activateOi( new Shipper(), qual );
    }
}


export class Shipper_Shipper extends zeidon.EntityInstance {
    public get entityName(): string { return "Shipper" };

    get ShipperId(): string { return this.getAttribute("ShipperId") };
    set ShipperId(value: string) { this.setAttribute("ShipperId", value) };

    get CompanyName(): string { return this.getAttribute("CompanyName") };
    set CompanyName(value: string) { this.setAttribute("CompanyName", value) };

    get Phone(): string { return this.getAttribute("Phone") };
    set Phone(value: string) { this.setAttribute("Phone", value) };
}

const ShipperEntityPrototypes = {
    Shipper: Shipper_Shipper.prototype, 
}

export const Shipper_LodDef = {
    name: "Shipper",
    entities: {
        Shipper: {
            name:        "Shipper",
            erToken:     "110000337",
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
                ShipperId: {
                    name:         "ShipperId",
                    hidden:       false,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                CompanyName: {
                    name:         "CompanyName",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Phone: {
                    name:         "Phone",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
            }
        },

    }
}


/*
  Generated from LOD Region

*/

import * as zeidon from '../zeidon';
import { Observable } from 'rxjs';
import { Northwind_DomainList } from './Northwind-DomainList';
import { Northwind_DomainFunctions } from './Northwind-DomainFunctions';



// Region LOD.
export class Region extends zeidon.ObjectInstance {
    protected rootEntityName(): string { return "Region" };

    public getApplicationName(): String { return "Northwind" };

    getPrototype(entityName: string): any {
        return RegionEntityPrototypes[entityName];
    }

    public getLodDef() {
        return Region_LodDef;
    };

    public getDomain( name: string ): zeidon.Domain { 
        return Northwind_DomainList[name];
    };

    public getDomainFunctions( name: string ): any { 
        return Northwind_DomainFunctions[name];
    }


    get Region(): zeidon.EntityArray<Region_Region> {
        return this.roots as zeidon.EntityArray<Region_Region>;
    }

    get Region$(): Region_Region {
        return this.roots.selected() as Region_Region;
    }

    public static activate( qual?: any ): Observable<Region> {
        return zeidon.ObjectInstance.activateOi( new Region(), qual );
    }
}


export class Region_Region extends zeidon.EntityInstance {
    public get entityName(): string { return "Region" };

    get RegionId(): string { return this.getAttribute("RegionId") };
    set RegionId(value: string) { this.setAttribute("RegionId", value) };

    get RegionDescription(): string { return this.getAttribute("RegionDescription") };
    set RegionDescription(value: string) { this.setAttribute("RegionDescription", value) };

    get Territory(): zeidon.EntityArray<Region_Territory> {
        return this.getChildEntityArray("Territory") as zeidon.EntityArray<Region_Territory>;
    }

    get Territory$(): Region_Territory {
        return this.getChildEntityArray("Territory").selected() as Region_Territory;
    }
}

export class Region_Territory extends zeidon.EntityInstance {
    public get entityName(): string { return "Territory" };

    get TerritoryId(): string { return this.getAttribute("TerritoryId") };
    set TerritoryId(value: string) { this.setAttribute("TerritoryId", value) };

    get TerritoryDescription(): string { return this.getAttribute("TerritoryDescription") };
    set TerritoryDescription(value: string) { this.setAttribute("TerritoryDescription", value) };
}

const RegionEntityPrototypes = {
    Region: Region_Region.prototype, 
    Territory: Region_Territory.prototype, 
}

export const Region_LodDef = {
    name: "Region",
    entities: {
        Region: {
            name:        "Region",
            erToken:     "110000389",
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
                Territory: {},
            },
            attributes: {
                RegionId: {
                    name:         "RegionId",
                    hidden:       false,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                RegionDescription: {
                    name:         "RegionDescription",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
            }
        },

        Territory: {
            name:        "Territory",
            erToken:     "110000394",
            isErRelLink: true,
            relToken:    "110000430",
            create:      true,
            cardMax:     999999,
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
                TerritoryId: {
                    name:         "TerritoryId",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                TerritoryDescription: {
                    name:         "TerritoryDescription",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                REGIONID: {
                    name:         "REGIONID",
                    hidden:       true,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   true,
                },
            }
        },

    }
}

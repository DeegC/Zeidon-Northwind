import * as domains from "../zeidon-domains"
import { DomainFunctions } from "../zeidon"

export const Northwind_DomainFunctions = {
    "com.quinsoft.zeidon.domains.BooleanDomain":
        function ( domain ): DomainFunctions { return new domains.BooleanDomainFunctions( domain ) },
    "com.quinsoft.zeidon.domains.DateDomain":
        function ( domain ): DomainFunctions { return new domains.DateDomainFunctions( domain ) },
    "com.quinsoft.zeidon.domains.DateTimeDomain":
        function ( domain ): DomainFunctions { return new domains.DateTimeDomainFunctions( domain ) },
    "com.quinsoft.zeidon.domains.IntegerDomain":
        function ( domain ): DomainFunctions { return new domains.IntegerDomainFunctions( domain ) },
    "com.quinsoft.zeidon.domains.StringDomain":
        function ( domain ): DomainFunctions { return new domains.StringDomainFunctions( domain ) },
    "com.quinsoft.zeidon.domains.DoubleDomain":
        function ( domain ): DomainFunctions { return new domains.DoubleDomainFunctions( domain ) },
    "com.quinsoft.zeidon.domains.StaticTableDomain":
        function ( domain ): DomainFunctions { return new domains.StaticTableDomainFunctions( domain ) },
}

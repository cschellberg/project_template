import { Injector } from '@sailplane/injector';

export class EnvConfig{
    
    backendTableName():string|undefined{
        return "backend-data-dev";
    }
}

Injector.register(EnvConfig);
export default class {

    constructor(){

        this.services = {};
        this.factories = {};

        this.cache = {};
    }

    set(name, object){

        this.cache[name] = object;
        this.registerProperty(name);
    }

    service(name, constructor){

        this.services[name] = constructor;
        this.registerProperty(name);
    }

    factory(name, factory){

        this.factories[name] = factory;
        this.registerProperty(name);
    }

    get(name){

        if(this.cache[name]){
            return this.cache[name];
        }

        var instance = null;

        if(this.factories[name]){

            const factory = this.factories[name];
            instance = factory();
        }
        else if(this.services[name]){

            const constructor = this.services[name];
            instance = new constructor();
        }

        if(instance !== null){
            this.cache[name] = instance;
        }

        return instance;
    }

    registerProperty(name){

        Object.defineProperty(this, name, {
            get: function () {
                return this.get(name);
            }
        });
    }
}
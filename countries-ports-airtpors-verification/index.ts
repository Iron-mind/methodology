
import {COUNTRIES, Country} from './constants/countries.const';
//traer los airports de un archivo json con typescript
import AIRPORTS from './constants/airports.json';
import {SEA_PORTS} from './constants/ports.const';

type Port = 
       {
            name: string;
            city: string;
            country: string;
            alias: never[];
            regions: never[];
            coordinates: number[];
            province: string;
            timezone: string;
            unlocs: string[];
            code: string;
        };


function checkCountryInPortsInfo(countries:Country[], ports:{[key:string]:Port}) {
    let counter:number = 0;
    let countriesWithPorts= new Set();
    let countriesWithoutPorts: Country[]=[];
    let portWithCountry = new Set();
    let portWithoutCountry = new Set();
    countries.forEach(country => {
           Object.entries(ports).forEach((port:[ac:string ,port:Port])=> {
               if (port[1].country === country.name) {
                   counter++;
                   countriesWithPorts.add(country.name);
                     portWithCountry.add(port[1].name);
                   //console.log(port[1].country, country.name);
               }
           })
        })
    countriesWithoutPorts = countries.filter(country => !countriesWithPorts.has(country.name));
   
    console.log(`Countries without ports: ${countriesWithoutPorts.length}`, countriesWithoutPorts);
    counter = countriesWithPorts.size;
    return {counter, exist:counter>0};
}


function checkCountryInAirportsInfo(countries:Country[], airports:any[]) {
    let counter:number = 0;
    let countriesWithPorts= new Set();
    let countriesWithoutPorts: Country[]=[];
    let portWithCountry = new Set();
    let portWithoutCountry = new Set();
    countries.forEach(country => {
           airports.forEach((port:{country:string}|any)=> {
               if (port.country === country.name) {
                   counter++;
                   countriesWithPorts.add(country.name);
                     portWithCountry.add(port.name);
                   //console.log(port[1].country, country.name);
               }
           })
        })
    countriesWithoutPorts = countries.filter(country => !countriesWithPorts.has(country.name));
   
    console.log(`Countries without airports: ${countriesWithoutPorts.length}`, countriesWithoutPorts);
    counter = countriesWithPorts.size;
    return {counter, exist:counter>0};
}
console.log(checkCountryInPortsInfo(COUNTRIES, SEA_PORTS as any));
//console.log(checkCountryInAirportsInfo(COUNTRIES, AIRPORTS as any[]));
import * as React from "react";

class GasCarData {
    Register: string;
    Distance: number;
    Refuel: number;
    Price: number;
}

class ElectricCarData {
    Register: string;
    Distance: number;
    Refuel: number;
    Price: number;
}

get Register() { return this.data.Register; }
get Distance() { return this.data.Distance; }
get Refuel() { return this.data.Refuel; }
get Price() { return this.data.Price; }


set Register(value: anty) {
    this.data.Register = value;
}
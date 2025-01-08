class Weapon {
    id: string;
    sidcPlatform: string;
    natoName?: string;

    constructor(id: string, sidcPlatform: string, natoName?: string) {
    this.id = id;
    this.sidcPlatform = sidcPlatform || "MFF-";
    this.natoName = natoName;
    }
}

class Missile extends Weapon {
    constructor(id: string, sidcPlatform?: string, natoName?: string) {
    super(id, sidcPlatform || "MFF-", natoName);
    }
}

export const missiles: Record<string, Missile> = {
    "AIM-120C": new Missile("AIM-120C"),
    "AIM-120B": new Missile("AIM-120B"),
    "AIM-54A-Mk47": new Missile("AIM-54A-Mk47"),
    "AIM-54A-Mk60": new Missile("AIM-54A-Mk60"),
    "AIM-54C-Mk47": new Missile("AIM-54C-Mk47"),
    "AIM-54C-Mk60": new Missile("AIM-54C-Mk60"),
    "AIM-7F": new Missile("AIM-7F"),
    "AIM-7MH": new Missile("AIM-7MH"),
    "AIM-9L": new Missile("AIM-9L"),
    "BGM-109C Tomahawk": new Missile("BGM-109C Tomahawk"),
    "MIM-104 Patriot": new Missile("MIM-104 Patriot"),
    "MIM-23B Hawk": new Missile("MIM-23B Hawk"),
    "MIM-23K Hawk": new Missile("MIM-23K Hawk"),
    "R-27ER (AA-10 Alamo C)": new Missile("R-27ER (AA-10 Alamo C)"),
    "R-33 (AA-9 Amos)": new Missile("R-33 (AA-9 Amos)"),
    "R-3R": new Missile("R-3R"),
    "R-60M": new Missile("R-60M"),
    "R-73 (AA-11 Archer)": new Missile("R-73 (AA-11 Archer)"),
    "R-77 (AA-12 Adder)": new Missile("R-77 (AA-12 Adder)"),
    "SM-2": new Missile("SM-2"),

//CBU-87
//CBU-97
//M-61A1
//M56A3 20mm HEI

};
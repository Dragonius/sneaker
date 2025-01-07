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
    "R-33 (AA-9 Amos)": new Missile("R-33 (AA-9 Amos)"),
    "R-77 (AA-12 Adder)": new Missile("R-77 (AA-12 Adder)"),
};
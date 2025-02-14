class Weapon {
    id: string;
    sidcPlatform: string;
    natoName?: string;

    constructor(id: string, sidcPlatform: string, natoName?: string) {
    this.id = id;
    this.sidcPlatform = sidcPlatform || "W-";
    this.natoName = natoName;
    }
}

class Missile extends Weapon {
    constructor(id: string, sidcPlatform?: string, natoName?: string) {
    super(id, sidcPlatform || "WM-", natoName);
    }
}

export const missiles: Record<string, Missile> = {
    "ADM-141A": new Missile("ADM_141A"),
    "AGM-114K": new Missile("AGM_114K"),
    "AGM-114L": new Missile("AGM_114L"),
    "AGM-88": new Missile("AGM_88"),
    "AIM-120B": new Missile("AIM_120B"),
    "AIM-120C": new Missile("AIM_120C"),
    "AIM-54A-Mk47": new Missile("AIM-54A-Mk47"),
    "AIM-54A-Mk60": new Missile("AIM-54A-Mk60"),
    "AIM-54C-Mk47": new Missile("AIM-54C-Mk47"),
    "AIM-54C-Mk60": new Missile("AIM-54C-Mk60"),
    "AIM-7F": new Missile("AIM-7F"),
    "AIM-7MH": new Missile("AIM-7MH"),
    "AIM-9L": new Missile("AIM-9L"),
    "AIM_9X": new Missile("AIM_9X"),
    "BGM-109C Tomahawk": new Missile("BGM-109C_Tomahawk"),
    "HAWK-RAKETA": new Missile("HAWK_RAKETA"),
    "MIM-104": new Missile("MIM_104"),
    "MIM-104 Patriot": new Missile("MIM-104_Patriot"),
    "MIM-23B Hawk": new Missile("MIM_23B_Hawk"),
    "MIM-23K Hawk": new Missile("MIM_23K_Hawk"),
    "P-27PE": new Missile("P_27PE"),
    "P-73": new Missile("P_73"),
    "R-27ER (AA-10 Alamo C)": new Missile("R_27ER_(AA_10_Alamo_C)"),
    "R-33 (AA-9 Amos)": new Missile("R_33_(AA_9_Amos)"),
    "R-3R": new Missile("R_3R"),
    "R-60M": new Missile("R_60M"),
    "R-73 (AA-11 Archer)": new Missile("R_73_(AA_11_Archer)"),
    "R-77 (AA-12 Adder)": new Missile("R_77_(AA_12_Adder)"),
    "SA48H6E2": new Missile("SA48H6E2"),
    "SA9M38M1": new Missile("SA9M38M1"),
    "SM-2": new Missile("SM_2"),
    "Vikhr-M": new Missile("Vikhr_M"),
    "X-58": new Missile("X_58"),
    "ROLAND-R": new Missile("ROLAND_R"),
};


//CBU-87
//CBU-97
//M-61A1
//M56A3 20mm HEI
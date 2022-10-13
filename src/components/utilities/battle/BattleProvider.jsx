import React, { createContext, useState } from 'react';

const BattleContext = createContext();

export function BattleProvider({ children }) {

    const [battle, setBattle] = useState({
        weaponId: null,
        shieldId: null,
        opponentId: null,
    })

    return (
        <BattleContext.Provider value={{ battle, setBattle }}>{children}</BattleContext.Provider>
    );
}

export default BattleContext;
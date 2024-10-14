import React, { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [cardData, setCardData] = useState([
        { id: 1, color: 'white', title: 'Card 1', description: 'Total Institutions.' },
        { id: 2, color: '#5BC2BC', title: 'Card 2', description: 'Active.' },
        { id: 3, color: '#E35B64', title: 'Card 3', description: 'Deactivated' },
    ]);

    return (
        <DashboardContext.Provider value={{ cardData, setCardData }}>
            {children}
        </DashboardContext.Provider>
    );
};

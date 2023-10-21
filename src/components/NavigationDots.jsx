import React from 'react';

const NavigationDots = ({ active }) => (
    <div className="app__navigation">
        {['home', 'about', 'information', 'work', 'skills', 'contact'].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: '#ADCCFF', border: '1px solid' } : {}}
            />
        ))}
    </div>
);

export default NavigationDots;

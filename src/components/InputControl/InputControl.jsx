import React from 'react'

const InputControl = ({ 
    getWeather, 
    getCurrentLocation, 
    clearData 
}) => {
    return (
        <>
            <div className='input'>
                <form className="input" onSubmit={getWeather}>
                    <input
                        id="location"
                        type="text"
                        placeholder="Location"
                        autoComplete="off"
                    />
                </form>
            </div>

            <div className="btn">
                <input type="submit" value="Search" onClick={getWeather} />
                <input type="button" value="Clear" onClick={clearData} />
                <button className="material-symbols-outlined" onClick={getCurrentLocation}>
                    location_on
                </button>
            </div>
        </>
    );
};

export default InputControl;
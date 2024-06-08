import React from 'react';

const ErrorMessage = ({ errorMsg }) => {

    return (
        <div className='output'>
            <p id="humidity">{errorMsg}</p>
        </div>
    );
}

export default ErrorMessage;
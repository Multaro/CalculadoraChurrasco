export const fetchBarbecue = async obj => {

    const response = await fetch(
        `https://calculadora-churrasco.herokuapp.com/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        }
    );

    const result = await response.json();

    return result;
};


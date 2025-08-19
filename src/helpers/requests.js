import axios from "axios";

const get = (url, params, headers = {}) => {
    return axios
        .get(url, {
            params,
            responseType: "json",
            headers,
        })
        .then((response) => response)
        .catch((error) => error)
        .finally(() => {});
};

export const requests = {
    get,
};

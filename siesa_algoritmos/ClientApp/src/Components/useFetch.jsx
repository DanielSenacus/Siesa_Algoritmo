import React, { useEffect, useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ url }) => {
    const [data, setLoading] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const getData = (url) => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(()?>{
        getData(url);
    },[url]);

    return { data, loading, error };
};

export default useFetch;

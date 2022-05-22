import React from 'react';
import './LoginRequiredRedirect.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginRequiredRedirect({ cookie, to, children }) {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(cookie);
    }, []);

    useEffect(() => {
        if (cookie === undefined) {
            navigate(to);
        }
    }, []);

    return <div>{children}</div>;
}

export default LoginRequiredRedirect;

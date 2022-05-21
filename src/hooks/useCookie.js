import { useEffect, useState } from 'react';

function useCookie(cookieName) {
    const [cookie, setCookie] = useState(undefined);

    useEffect(() => {
        const value = document.cookie
            .split('; ')
            .filter((cookie) => cookie.startsWith(`${cookieName}=`))[0];

        if (value !== undefined) {
            setCookie(value.split('=')[1]);
        }
    }, [cookieName]);

    useEffect(() => {
        if (cookie !== undefined) {
            document.cookie = `${cookieName}=${cookie}`;
        }
    }, [cookie]);

    return [cookie, setCookie];
}

export default useCookie;

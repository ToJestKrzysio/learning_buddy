import { useEffect, useState } from 'react';

function useCookie(cookieName) {
    const [cookie, setCookie] = useState(get_cookie);

    function get_cookie() {
        const value = document.cookie
            .split('; ')
            .filter((cookie) => cookie.startsWith(`${cookieName}=`))[0];
        if (value !== undefined) {
            return value.split('=')[1];
        }
        return undefined;
    }

    useEffect(() => {
        const cookie_ = get_cookie();
        if (cookie_ !== undefined) {
            setCookie(cookie_);
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

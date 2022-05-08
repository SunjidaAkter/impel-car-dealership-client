import axios from "axios";
import { useEffect, useState } from "react";

const useAccessToken = (user) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const token = async () => {
            const email = user?.user?.email;
            if (email) {
                await axios
                    .post("https://powerful-island-01636.herokuapp.com/signIn", { email })
                    .then((data) => {
                        localStorage.setItem("accessToken", data.data.accessToken);
                        setToken(data.data.accessToken);
                    });
            }
        };
        token();
    }, [user]);

    return [token];
};

export default useAccessToken;

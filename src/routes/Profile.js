import { authService, dbService } from "fBase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default ({ userObj, refreshUser }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogoutClick = () => {
        authService.signOut();
        history.push("/");
    };
    const getMyTweets = async () => {
        const tweets = await dbService
            .collection("tweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt")
            .get();
        console.log(tweets.docs.map((doc) => doc.data()));
    }
    useEffect(() => {
        getMyTweets();
    }, [])
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({
                displayName: newDisplayName,
            });
            refreshUser();
        }
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={newDisplayName}
                    type="text"
                    placeholder="Display Name" />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogoutClick}>log out</button>
        </>
    )
}
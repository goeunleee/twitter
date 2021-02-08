import { dbService, storageService } from "fBase";
import React, { useState } from "react";

const Tweet = ({ tweetObj, isOwner, attachmentUrl}) => {
    const [editing, setEditing] = useState(false);//edit 상태인지 아닌지
    const [newTweet, setNewTweet] = useState(tweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this tweet??")
        if (ok) {
            await dbService.doc(`tweets/${tweetObj.id}`).delete();
            await storageService.refFromURL(tweetObj.attachmentUrl).delete();
        }
    }
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(tweetObj, newTweet)
        await dbService.doc(`tweets/${tweetObj.id}`).update({
            text: newTweet,
        }); setEditing(false);
    }
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewTweet(value);
    }
    return (
        <div>
            {
                editing ? (
                    <>
                        {isOwner && (
                            <>
                                <form onSubmit={onSubmit}>
                                    <input onChange={onChange}
                                        type="text"
                                        placeholder="edit your tweet"
                                        value={newTweet.text}
                                        required />
                                    <input type="submit" value="Update Tweet" />
                                </form>
                                <button onClick={toggleEditing}>Cancel</button>
                            </>
                        )}
                    </>

                ) : (
                        <>
                            <h4> {tweetObj.text}</h4>
                            {tweetObj.attachmentUrl && (<img src={tweetObj.attachmentUrl} width="50px" height="50px"/>
                            )}
                            {isOwner && (
                                <>
                                    <button onClick={onDeleteClick}>Delete Tweet</button>
                                    <button onClick={toggleEditing}>Edit Tweet</button>
                                </>
                            )}
                        </>
                    )}
        </div>
    )
};
export default Tweet;
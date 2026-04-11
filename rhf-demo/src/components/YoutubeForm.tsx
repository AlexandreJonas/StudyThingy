import React from "react";

export const YoutubeForm = () => {
    return(
        <div>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"></input>

                <label htmlFor="emal">Email</label>
                <input type="email" id="emal" name="emal"></input>

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel"></input>

                <button>Submit</button>
            </form>
        </div>
    )
}
import React from 'react'

export default function SettingsList(props) {



    return (
        <div>
            <input type="button" value="Best first" />
            <input type="button" value="Best last" />
            <input type="button" value="Best " />
            <select value="sarasa">
                <option value="Movie">Movie</option>
                <option value="TV Show">TV Show</option>
                <option selected value="Movies & TV Shows">Movies & TV Shows</option>
            </select>

        </div>
    )
}

import clsx from 'clsx'
import React from 'react'

export interface IComment {
    data: {
        user: {
            userName: string;
        }
        content: string;
    }
}

export const Comment: React.FC<IComment> = ({ data: {
    user: {
        userName
    }
    , content
} }) => {
    return (
        <div style={{
            display: 'flex'
        }}>
            <b>{userName}</b>
            <div style={{ paddingLeft: "1rem" }}>{content}</div>
        </div >
    )
}

'use client'

import { MouseEventHandler } from "react";

interface Props {
    prop: any;
    funProp: Function;
}

export function MyComp ({ prop, funProp }: Props) {
    const clickHandler: MouseEventHandler = (e) => {
        return funProp((new Date()).toISOString());
    }
    return (
        <div className="h-full p-12 text-lg flex flex-col items-center bg-slate-300">
            <p>
                This is my component.
            </p>
            <p>
                {`Parent says: ${prop}`}
            </p>
            <div>
                <button
                    onClick={clickHandler}
                    className="bg-slate-500 p-3 text-white mt-6"
                >
                    Ping parent
                </button>
            </div>
        </div>
    )
}
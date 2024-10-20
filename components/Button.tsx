import Link from 'next/link'
import React from 'react'

function Button({ name, url, style }: { name: string, url: string, style?: string }) {
    return (
        <Link href={url} className={`bg-orange-500 px-4 py-2 rounded-md font-semibold text-xl transition-all filter hover:brightness-90 text-center ${style}`}>
            {name}
        </Link>
    )
}

export default Button
'use client'

import { useEffect } from 'react'

export default function Page() {
    let data = { name: '初期値' }

    useEffect(() => {
        console.log('これはブラウザでのみ実行されます');
        const change = { name: '変更' }
        data = change
    }, [])

    return <div>hello {data.name}!</div>
}

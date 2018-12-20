export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatPercent(num) {
    return parseInt((num * 100).toFixed(2)) + '%'
}


export function formatRawResult (rawResult) {
    let {score} = rawResult
    return {
        name: rawResult.name,
        gender: rawResult.extra && rawResult.extra.gender,
        src: rawResult.extra && rawResult.extra.src,
        match: score,
        explanation: rawResult.extra && rawResult.extra.meaning_expert,
    }
}
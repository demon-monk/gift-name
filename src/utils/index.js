export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatPercent(num) {
    return parseInt((num * 100).toFixed(2)) + '%'
}


export function formatRawResult (rawResult) {
    return {
        name: rawResult.name,
        gender: rawResult.extra.gender,
        src: rawResult.extra.src,
        match: rawResult.extra.match,
        explanation: rawResult.extra.meaning_export,
    }
}
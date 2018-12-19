export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatPercent(num) {
    return parseInt((num * 100).toFixed(2)) + '%'
}
//custom function for handling specifying title length
export function cuttingString(string, maxLength) {
    if (string.length > maxLength) {
        return string.substring(0, maxLength)
    }
    return string
}
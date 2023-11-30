function makeTitleCase(string) {
    if (string)
        return string.slice(0,1).toUpperCase() + string.slice(1,string.length).toLowerCase()
    else return ""
}

export default makeTitleCase

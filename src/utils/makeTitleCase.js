function makeTitleCase(string) {
    if (string){
        let res = ""
        string.split(" ").forEach(element => {
           res += " " + element.slice(0, 1).toUpperCase() + element.slice(1, string.length).toLowerCase()
        });

        return res.trim()
    }
    else return ""
}
export default makeTitleCase

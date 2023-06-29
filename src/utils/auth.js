export function setRole(data) {
    window.localStorage.setItem("@role",data)
}
export function getRole() {
    return window.localStorage.getItem("@role")
}
export function removeRole() {
    window.localStorage.removeItem('@role');
}
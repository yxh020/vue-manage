export function randomFileame(fileName) {
    return randomString(6) + "_" + new Date().getTime() + "." + fileName.split(".").pop();
}

// 随机生成文件名
export function randomString(len) {
    len = len || 32;
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz12345678', maxPos = chars.length, pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
const getImage = (fileUuid) => {
    console.log(fileUuid + 'filess')
    const re = 'http://139.224.199.211:8080/api/file/download?uuid=' + fileUuid
    console.log(re)

    return re;
}

export default getImage

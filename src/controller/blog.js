const getList = (author, keyword) => {
    //先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1571215399486,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1571215605113,
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1571215399486,
            author: 'zhangsan'
        }
    ]
}

module.exports = {
    getList,
    getDetail
}
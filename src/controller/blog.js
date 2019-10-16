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

const newBlog = (blogData = {}) => {
    //blogData 是一个博客对象，包含title content 属性
    return {
        id: 3    //表示新建博客，插入到数据表里的id
    }
}

const updateBlog = (id, blogData = {}) => {
    //blogData 是一个博客对象，包含title content 属性
    //id是更新博客的id
    console.log(id, blogData)
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}
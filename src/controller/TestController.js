const handleRender = (req, res) => {
    const myName = 'VENUS'
    return res.render('test.ejs', { myName })
}

const handleUsers = (req, res) => {
    return res.render('user.ejs')
}

module.exports = {
    handleRender, 
    handleUsers
}
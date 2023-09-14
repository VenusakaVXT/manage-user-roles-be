const handleRender = (req, res) => {
    const myName = 'VENUS'
    return res.render('test.ejs', { myName })
}

module.exports = handleRender
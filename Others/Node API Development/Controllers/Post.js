exports.getPost = (req,resp)=>
    {
        resp.json({posts:[
            {Title:"1st title"},
            {Title:"2st title"},
        ]})
    }
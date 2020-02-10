const {mysqldb} = require('../connection')

module.exports={
    // datausers:(req,res)=>{
    //     var sql='select * from users'
    //     mysqldb.query(sql,(err,result)=>{
    //         if(err) return res.status(500).send(err)
    //         return res.status(200).send(result)
    //     })
    // },
    // getuser:(req,res)=>{
    //     var sql=``
    // },
    // varif:(req,res)=>{
    //     var {id,status,email} = req.body
    //     var sql=`update users set statusver='${status}', email='${email}' where id=${id}`
    //     mysqldb.query(sql,(err,result)=>{
    //         if(err) return res.status(500).send(err)
    //         sql = `select * from users where id=${id}`
    //         mysqldb.query(sql,(err1,result1)=>{
    //             if(err1) return res.status(500).send(err1)
    //             return res.status(200).send(result1)
    //         })  
    //     })
    // },
    getmovies:(req,res)=>{
        var sql='select * from movies'
        mysqldb.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    },
    editmovie:(req,res)=>{
        var {id,nama,tahun,description} = req.body
        var sql=`update movies set nama='${nama}', tahun='${tahun}', description='${description}' where id=${id}`
        mysqldb.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            sql='select * from movies'
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                return res.status(200).send(result1)
            })
        })
    },
    delmovie:(req,res)=>{
        var {id} = req.params
        var sql=`delete from movies where id=${id}`
        mysqldb.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            sql='select * from movies'
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                return res.status(200).send(result1)
            })
        })
    },
    addmovie:(req,res)=>{
        var {nama,tahun,description} = req.body
        var moviebaru = {nama,tahun,description}
        var sql=`insert into movies set ?`
        mysqldb.query(sql,moviebaru,(err,result)=>{
            if(err) return res.status(500).send(err)
            sql='select * from movies'
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                return res.status(200).send(result1)
            })
        })
    },
    getcategories:(req,res)=>{
        var sql='select * from categories'
        mysqldb.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    },
    editcategories:(req,res)=>{
        var {id,nama} = req.body
        var sql=`update categories set nama='${nama}' where id=${id}`
        mysqldb.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            sql='select * from categories'
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                return res.status(200).send(result1)
            })
        })
    },
    delcategories:(req,res)=>{
        var {id} = req.params
        var sql=`delete from categories where id=${id}`
        mysqldb.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            sql='select * from categories'
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                return res.status(200).send(result1)
            })
        })
    },
    addcategories:(req,res)=>{
        var {nama} = req.body
        var moviebaru = {nama}
        var sql=`insert into categories set ?`
        mysqldb.query(sql,moviebaru,(err,result)=>{
            if(err) return res.status(500).send(err)
            sql='select * from categories'
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                return res.status(200).send(result1)
            })
        })
    },
    getmovcat:(req,res)=>{//di frontend bisa dipilih mau menampilkan colomn yg mana
        var sql='select m.nama as movie, c.nama as category from movcat mc join movies m on mc.idmovie=m.id join categories c on mc.idcategory=c.id;'
        var sql1='select mc.idmovie, m.nama as movie, mc.idcategory, c.nama as category from movcat mc join movies m on mc.idmovie=m.id join categories c on mc.idcategory=c.id'
        mysqldb.query(sql1,(err,result)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    },


    //-----------------------buat delete-------------------------------------------
    getmovid:(req,res)=>{
        var {nama} = req.query
        var sql=`select id from movies where nama='${nama}'`
        mysqldb.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    },
    getcatid:(req,res)=>{
        var {nama} = req.query
        var sql=`select id from categories where nama='${nama}'`
        mysqldb.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    },
    delmovcat:(req,res)=>{//id dapat dari dua endpoint diatas hehe
        var {idmovie,idcategory} = req.body
        var sql = `delete from movcat where idmovie=${idmovie} and idcategory=${idcategory}`
        mysqldb.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            sql='select m.nama as movie, c.nama as category from movcat mc join movies m on mc.idmovie=m.id join categories c on mc.idcategory=c.id;'
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                return res.status(200).send(result1)
            })
        })
    },


    //-----------------------buat add--------------------
    getmovlist:(req,res)=>{//untuk list film di add
        var sql = `select id, nama from movies`
        mysqldb.query(sql, (err,result)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    },
    getcatlist:(req,res)=>{//untuk list kategori di add
        var sql = `select id, nama from categories`
        mysqldb.query(sql, (err,result)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    },
    addmovcat:(req,res)=>{
        var {idmovie,idcategory} = req.body
        var movcatbaru = {idmovie,idcategory}
        var sql=`insert into movcat set ?`
        mysqldb.query(sql,movcatbaru,(err,result)=>{
            if(err) return res.status(500).send(err)
            sql='select mc.idmovie, m.nama as movie, mc.idcategory, c.nama as category from movcat mc join movies m on mc.idmovie=m.id join categories c on mc.idcategory=c.id'
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                return res.status(200).send(result1)
            })
        })
    },
}
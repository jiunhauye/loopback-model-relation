module.exports = function(Member) {
  Member.listprojects = function(cb){
    var Project = Member.app.models.Project;
    Project.find(function(err,projects){
      if(err) console.log(err);
      cb(null,projects);
    });
  };

  Member.silver = function(cb){
    //Member.models.
    var ds = Member.dataSource;
    var sql = 'select * from member where level=? and nickname=?';
    ds.connector.query(sql,['silver','Howard2'],function(err,members){
      console.log(members);
      if(err) console.log(err);
      cb(null,members);
    });
  };
  Member.remoteMethod('listprojects',{
    http:{verb:'get'},
    description: 'Get all project list',
    returns:{arg:'projects',type:['project'],root:true}
  });


  Member.remoteMethod('silver',{
    http:{verb:'get'},
    returns:{arg:'members',type:['member'],root:true}
  });
};

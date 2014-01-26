var ts = require('monotonic-timestamp');
var fix = require("level-fix-range");
var through = require("through");

var end = String.fromCharCode(255);
var begin = String.fromCharCode(0);

module.exports = function(db){
  
  db.hstream = function(key,opts){
  
    // streams unique keys and values optionally with keys in range

    var s = db.createReadStream(fix({start:key+begin,end:key+end,reverse:true,cache:true}));
    
    if(opts && opts.start && opts.end) {
      //
      
    }

    var found = {};
    var out = through(function(o){
      if(opts) {
        
      }  
      this.queue();
    })

  }

  db.hset = function(key,prop,value,cb){

  }

  db.hmset = function(key,obj,cb){

  }

  db.hdel = function(key,props,cb){
    // if not props im blowing out the whole hash.
    
  }

  db.hcleanup = function(){
    // going 
  }

  db.hgetall = function(key,cb){
    var out = {};
    db.hstream(key).on('data',function(o){
      //key, value
      out[o.key] = o.value;
    }).on('end',function(){
      cb(false,out);
    }).on('error',function(err){
      cb(err);
    });
  }
  
  return db;
}

module.exports._prop = _prop;
module.exports._key = _key;

function _prop(key){
  var o = {};
  var first = key.indexOf(end);
  o.hash = key.substr(0,first);
  var tsep = key.indexOf(end,first+1);
  o.t = key.substr(first+o.hash.length+1,tsep);
  o.prop = key.substr(tsep+1);
  return o;
}

function _key(hash,prop){
  return hash+end+ts()+end+prop
}


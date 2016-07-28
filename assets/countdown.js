//###################################################################
// Author: ricocheting.com
// Version: v3.0
// Date: 2014-09-05
// Description: displays the amount of time until the "dateFuture" entered below.

var CDown = function() {
  this.state=0;// if initialized
  this.counts=[];// array holding countdown date objects and id to print to {d:new Date(2013,11,18,18,54,36), id:"countbox1"}
  this.interval=null;// setInterval object
}

CDown.prototype = {
  init: function(){
    this.state=1;
    var self=this;
    this.interval=window.setInterval(function(){self.tick();}, 1000);
  },
  add: function(date,id){
    this.counts.push({d:date,id:id});
    this.tick();
    if(this.state==0) this.init();
  },
  expire: function(idxs){
    for(var x in idxs) {
      this.counts.splice(idxs[x], 1);
    }
    $("#installstart").removeClass("disabled");
    $("#countdown").hide();
  },
  format: function(r){
    var out="";
    if(r.d != 0){out += r.d +" "+((r.d==1)?"day":"days")+", ";}
    if(r.h != 0){out += r.h +" "+((r.h==1)?"hour":"hours")+", ";}
    out += r.m +" "+((r.m==1)?"min":"mins")+", ";
    out += r.s +" "+((r.s==1)?"sec":"secs")+", ";

    return out.substr(0,out.length-2);
  },
  math: function(work){
    var y=w=d=h=m=s=ms=0;

    ms=(""+((work%1000)+1000)).substr(1,3);
    work=Math.floor(work/1000);//kill the "milliseconds" so just secs

    y=Math.floor(work/31536000);//years (no leapyear support)
    w=Math.floor(work/604800);//weeks
    d=Math.floor(work/86400);//days
    work=work%86400;

    h=Math.floor(work/3600);//hours
    work=work%3600;

    m=Math.floor(work/60);//minutes
    work=work%60;

    s=Math.floor(work);//seconds

    return {y:y,w:w,d:d,h:h,m:m,s:s,ms:ms};
  },
  tick: function(){
    var now=(new Date()).getTime(),
      expired=[],cnt=0,amount=0;

    if(this.counts)
    for(var idx=0,n=this.counts.length; idx<n; ++idx){
      cnt=this.counts[idx];
      amount=cnt.d.getTime()-now;//calc milliseconds between dates

      // if time is already past
      if(amount<0){
        expired.push(idx);
      }
      // date is still good
      else{
        this.display(cnt, "Release will be in " + this.format(this.math(amount)) + ".");
        this.progress((1 - (amount / 86400000)) * 100);
      }
    }

    // deal with any expired
    if(expired.length>0) this.expire(expired);

    // if no active counts, stop updating
    if(this.counts.length==0) window.clearTimeout(this.interval);
    
  },
  display: function(cnt,msg){
    document.getElementById(cnt.id).innerHTML=msg;
  },
  progress: function(percent){
    $("#progress").width(percent + "%");
  }
};

$(document).ready(function(){
  var cdown = new CDown();

  $("#installstart").addClass("disabled");
  cdown.add(new Date(Date.UTC(2016, 6, 29, 9, 0, 0)), "countbox");
});
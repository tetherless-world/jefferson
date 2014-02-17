var TimeKnots={draw:function(e,t,n){var r={width:600,height:200,radius:10,lineWidth:4,color:"#999",background:"#FFF",dateFormat:"%Y/%m/%d %H:%M:%S",horizontalLayout:true,showLabels:false,labelFormat:"%Y/%m/%d %H:%M:%S",addNow:false,seriesColor:d3.scale.category20()};if(n!=undefined){for(var i in n){r[i]=n[i]}}if(r.addNow!=false){t.push({date:new Date,name:r.addNowLabel||"Today"})}var s=d3.select(e).append("div").style("opacity",0).style("position","absolute").style("font-family","Helvetica Neue").style("font-weight","300").style("background","rgba(0,0,0,0.5)").style("color","white").style("padding","5px 10px 5px 10px").style("-moz-border-radius","8px 8px").style("border-radius","8px 8px");var o=d3.select(e).append("svg").attr("width",r.width).attr("height",r.height);var u=t.map(function(e){return Date.parse(e.date)});var a=d3.max(u);var f=d3.min(u);var l=(d3.max(t.map(function(e){return e.radius}))||r.radius)*1.5+r.lineWidth;var c=r.horizontalLayout?(r.width-2*l)/(a-f):(r.height-2*l)/(a-f);var h=[];if(a==f){c=0;if(r.horizontalLayout){l=r.width/2}else{l=r.height/2}}o.append("line").attr("class","timeline-line").attr("x1",function(e){if(r.horizontalLayout){return l}return Math.floor(r.width/2)}).attr("x2",function(e){if(r.horizontalLayout){return r.width-l}return Math.floor(r.width/2)}).attr("y1",function(e){if(r.horizontalLayout){return Math.floor(r.height/2)}return l}).attr("y2",function(e){if(r.horizontalLayout){return Math.floor(r.height/2)}return r.height-l}).style("stroke",r.color).style("stroke-width",r.lineWidth);o.selectAll("circle").data(t).enter().append("circle").attr("class","timeline-event").attr("r",function(e){if(e.radius!=undefined){return e.radius}return r.radius}).style("stroke",function(e){if(e.color!=undefined){return e.color}if(e.series!=undefined){if(h.indexOf(e.series)<0){h.push(e.series)}console.log(e.series,h,h.indexOf(e.series));return r.seriesColor(h.indexOf(e.series))}return r.color}).style("stroke-width",function(e){if(e.lineWidth!=undefined){return e.lineWidth}return r.lineWidth}).style("fill",function(e){if(e.background!=undefined){return e.background}return r.background}).attr("cy",function(e){if(r.horizontalLayout){return Math.floor(r.height/2)}return Math.floor(c*((new Date(e.date)).getTime()-f)+l)}).attr("cx",function(e){if(r.horizontalLayout){var t=Math.floor(c*((new Date(e.date)).getTime()-f)+l);return t}return Math.floor(r.width/2)}).on("mouseover",function(e){var t=d3.time.format(r.dateFormat);var n=t(new Date(e.date));var i=n!=""?e.name+" <small>("+n+")</small>":e.name;d3.select(this).style("fill",function(e){if(e.color!=undefined){return e.color}return r.color}).transition().duration(100).attr("r",function(e){if(e.radius!=undefined){return Math.floor(e.radius*1.5)}return Math.floor(r.radius*1.5)});s.html("");if(e.img!=undefined){s.append("img").style("float","left").style("margin-right","4px").attr("src",e.img).attr("width","64px")}s.append("div").style("float","left").html(i);s.transition().duration(100).style("opacity",.9)}).on("mouseout",function(){d3.select(this).style("fill",function(e){if(e.background!=undefined){return e.background}return r.background}).transition().duration(100).attr("r",function(e){if(e.radius!=undefined){return e.radius}return r.radius});s.transition().duration(100).style("opacity",0)});if(r.showLabels!=false){var p=d3.time.format(r.labelFormat);var d=p(new Date(f));var v=p(new Date(a));o.append("text").text(d).style("font-size","70%").attr("x",function(e){if(r.horizontalLayout){return d3.max([0,l-this.getBBox().width/2])}return Math.floor(this.getBBox().width/2)}).attr("y",function(e){if(r.horizontalLayout){return Math.floor(r.height/2+(l+this.getBBox().height))}return l+this.getBBox().height/2});o.append("text").text(v).style("font-size","70%").attr("x",function(e){if(r.horizontalLayout){return r.width-d3.max([this.getBBox().width,l+this.getBBox().width/2])}return Math.floor(this.getBBox().width/2)}).attr("y",function(e){if(r.horizontalLayout){return Math.floor(r.height/2+(l+this.getBBox().height))}return r.height-l+this.getBBox().height/2})}o.on("mousemove",function(){tipPixels=parseInt(s.style("height").replace("px",""));return s.style("top",d3.event.pageY-tipPixels-l+"px").style("left",d3.event.pageX+20+"px")}).on("mouseout",function(){return s.style("opacity",0).style("top","0px").style("left","0px")})}}
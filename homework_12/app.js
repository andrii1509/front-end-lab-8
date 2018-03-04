var x = document.getElementById("root")
var tankList = tanks => {
	x.innerHTML = '';
  tanks.map(tnk => {
    let model,
        country,
        country_image,
        level,
        preview;
    if(typeof tnk === 'object'){
        model = tnk.model;
        country = tnk.country; 
        country_image = tnk.country_image;
        level = tnk.level;
        preview = tnk.preview;
    }
  
       var TankList = document.createElement("div");
       TankList.className = "t1";
       TankList.innerHTML = 
                                               
                    
                     `
                     <h4 class = "title"><a href ="#${model}"> ${model} </a>   </h4>
                     <p class = "p1">${country}</p>
                     <img class = "flag" src = "${country_image}"></img>
                     <p class = "p2"> ${level}</p>
                     <img class = "prev" src = "${preview}"></img>`
                     
    document.getElementById("root").appendChild(TankList);
  })  
	
}
// tankList(tanks);
let tankInfo = tnkInfo =>{
	console.log(tnkInfo);
	    x.innerHTML = `
	    						 <div>
									 
	    						 <h1 class="text">
	    						 <img class = 'flag2' src="${tnkInfo.country_image}"></img>${tnkInfo.model}(Level: ${tnkInfo.level})
	    						 </h1>
	    						 <h1>Preview</h1>	
    							 <img class = "prewIm"  src="${tnkInfo.preview}"></img>
									 </div>
									 <div>
									 <h2 class = "l2">Characteristics</h2>
									 <table class = "table1" >
											<tr><td class=sect1>damage</td><td>${tnkInfo.details.damage}</td></tr>
											<tr><td class=sect1>breoning</td><td>${tnkInfo.details.breoning}</td></tr>
											<tr><td class=sect1>attack speed</td><td>${tnkInfo.details.attack_speed}</td></tr>
											<tr><td class=sect1>time of trargeting</td><td>${tnkInfo.details.time_of_targeting}</td></tr>
											<tr><td class=sect1>ammunition</td><td>${tnkInfo.details.ammunition}</td></tr>
									 </table>
									 </div>
                  `
}
let clerTanksList = () => x.innerHTML = '';

let clearTanksInfo = () => x.innerHTML = '';

function findTankByModel(model) {
  	function model1(tnk) { 		
      if (tnk.model === model) {
      return true;
    	}
  	}
   return tanks.filter(model1)[0];

	};
window.addEventListener('hashchange', function(a){
	clerTanksList();                   
  clearTanksInfo();
  if (window.location.hash === ""){
  	tankList(tanks);
  }else{
  	var tankName = location.hash;
  	var name = tankName.split("#");
  	tankInfo(findTankByModel(name[1]));
  }

})

tankList(tanks);
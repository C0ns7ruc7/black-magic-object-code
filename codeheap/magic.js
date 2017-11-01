function MagicObject(){
	var intial_entorpy = Math.floor((Math.random() * 1000000) + 1);
	this.do = function(){
		console.log(intial_entorpy);
	}
}
Orb = new MagicObject;
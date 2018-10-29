var seinFeld = {

	name: [' Jerry', ' Seinfeld'],
	age: 61,
gender: 'male',
interests: ['comedy', 'being rich', 'coffee', 'being an elitist ass'],
bio: function() {
	alert(this.name[1] +  " is  a " + this.gender + " who likes " + this.interests[0] + ", " +this.interests[3] + " , " + this.interests[1] + ", and  " +this.interests[2] + " .");
},

greeting: function() {
		alert("Hi I am " + this.name[0] + this.name[1] + " and this is Comedians in cars getting coffee" );
}


};

seinFeld.farewell= function(){
	alert("Good bye from " + this.name[1]);

};

var myDataname = 'height';

var myDataValue = '1.75';

seinFeld['myDataname'] = ['myDataValue'];
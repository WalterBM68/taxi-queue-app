function TaxiQueue(countAllPassengers, countAllTaxis) {

	let passengerCount = 0;
	if(countAllPassengers){
		passengerCount = countAllPassengers;
	}

	let taxiCount = 0;
	if(countAllTaxis){
		taxiCount = countAllTaxis;
	}

	function joinQueue() {
        passengerCount++;
	}

	function leaveQueue() {
		if(passengerCount > 0)
		    passengerCount--;
	}

	function joinTaxiQueue() {
        taxiCount++;
	}

	function queueLength() {
		return passengerCount;
	}

	function taxiQueueLength() {
		return taxiCount;
	}

	function taxiDepart(){
       if(passengerCount >= 12){
		   if(taxiCount > 0){
			passengerCount-=12;
			taxiCount--;
		   }  
	   }	
	   taxiQueueLength();
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}
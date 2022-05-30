// Passengers
const joinQueueBtn = document.querySelector('.join_queue');
const leaveQueueBtn = document.querySelector('.leave_queue');
const countingPassengers = document.querySelector('.passenger_queue_count');
// Taxi
const taxiQueueCountBtn = document.querySelector('.join_taxi_queue');
const countingTaxis = document.querySelector('.taxi_queue_count');
// Departure
const departureOfATaxi = document.querySelector('.depart');

let toCountPassengers = localStorage.getItem('passengers') ? Number(localStorage.getItem('passengers')) : 0;
countingPassengers.innerHTML = toCountPassengers;

let toCountTaxis = localStorage.getItem('taxis') ? Number(localStorage.getItem('taxis')) : 0;
countingTaxis.innerHTML = toCountTaxis;

// create Factory Function instance
const taxiQueue = TaxiQueue(toCountPassengers, toCountTaxis);

// DOM events
joinQueueBtn.addEventListener('click', function(){
    taxiQueue.joinQueue();
    countingPassengers.innerHTML = taxiQueue.queueLength();

    localStorage.setItem('passengers', taxiQueue.queueLength());
});

leaveQueueBtn.addEventListener('click', function(){
    taxiQueue.leaveQueue();
    countingPassengers.innerHTML = taxiQueue.queueLength();

    localStorage.setItem('passengers', taxiQueue.queueLength());
});

taxiQueueCountBtn.addEventListener('click', function(){
    taxiQueue.joinTaxiQueue();
    countingTaxis.innerHTML = taxiQueue.taxiQueueLength();

    localStorage.setItem('taxis', taxiQueue.taxiQueueLength());
});

departureOfATaxi.addEventListener('click', function(){
   taxiQueue.taxiDepart();

   let newPassengerValue = taxiQueue.queueLength();
   localStorage.setItem('passengers', newPassengerValue);
   countingPassengers.innerHTML = taxiQueue.queueLength();

   let newTaxiValue = taxiQueue.taxiQueueLength();
   localStorage.setItem('taxis', newTaxiValue);
   countingTaxis.innerHTML = taxiQueue.taxiQueueLength();
});
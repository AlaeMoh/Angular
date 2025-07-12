export interface stationsData{
      stationID: string,
      stationName: string,
      stationCode: string
}

export interface stationName{
  stationName: string,
}

export interface Trains{
       trainId: number,
       trainNo: number, 
      trainName: string,
      departureStationName: string,
      arrivalStationName: string,
      arrivalTime: string,
      departureTime:string,
      totalSeats: number,
      departureDate: string,
      bookedSeats: number, 
}
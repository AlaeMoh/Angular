export interface stationsData{
      stationID: string,
      stationName: string,
      stationCode: string
}

export interface stationName{
  stationName: string,
}

export interface Trains{
      id:string,
       trainId: number,
       trainNo: string, 
      trainName: string,
      departureStationName: string,
      arrivalStationName: string,
      arrivalTime: string,
      departureTime:string,
      totalSeats: number,
      departureDate: string,
      bookedSeats: number, 
      price: number,

}

export interface cities{
      cityId: number,
      cityName: string
}

export interface airports{
      airportCode: string,
      airportId: number,
      airportName: string,
      cityId: number,
      cityName: string
}

export interface flights{
      id: string,
      flightNumber: string,
      arrivalTime: string,
      departureTime: string,
      price: number,
      totalSeats: number,
      arrivalAirportName: string,
      arrivalAirportCode: string,
      departureAirportName: string,
      departureAirportCode: string,
      vendorName: string,
      vendorLogoUrl: string,
      travelDate: string
}

export interface Flightusers{
      
      id: number,
      name: string,
      mobileNo: string,
      email: string,
      city: string,
      address: string,
      role: string,
      vendorId: number,
      password: string
    
}

export interface flightBookings {
      
      id: number,
      passportNumber:string,
      dob:string,
      nationality:string,
      count:string,
      name: string,
      mobileNo: string,
      email: string,
      city: string,
      address: string,
      role: string,
      vendorId: number,
      password: string,
      userId:string,
      flightNumber: string,
      arrivalTime: string,
      departureTime: string,
      price: number,
      totalSeats: number,
      arrivalAirportName: string,
      arrivalAirportCode: string,
      departureAirportName: string,
      departureAirportCode: string,
      vendorName: string,
      vendorLogoUrl: string,
      travelDate: string,
}

export interface trainBookings {
      id: number,
      count:string,
      name: string,
      mobileNo: string,
      email: string,
      city: string,
      address: string,
      role: string,
      vendorId: number,
      userId:string,
      trainNo: string,
      arrivalTime: string,
      departureTime: string,
      price: number,
      totalSeats: number,
      arrivalStationName: string,
      ddepartureStationName: string,
      departureDate: string,
}

export interface cars{
      id: string,
      brand: string,
      model: string,
      year: number,
      color: string,
      dailyRate: number,
      carImage: string,
      regNo: string,
      price :number
}

export interface carBooking{
       id: number,
      brand: string,
      model: string,
      year: number,
      color: string,
      dailyRate: number,
      carImage: string,
      regNo: string,
      price :number,
      pickupDate: string,
      dropoffDate:string,
      paymentMethod:string,
      Card:string,
      userID:string,
      name:string,
      email:string,
      address:string,
      city:string,
      mobileNo:string,

}
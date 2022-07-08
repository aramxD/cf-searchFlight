 const vuelos = [
    {
        "meta": {
            "count": 15,
            "links": {
                "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=TIJ&destinationLocationCode=CTG&departureDate=2022-11-23&returnDate=2022-12-23&adults=2&children=1&infants=1"
            }
        },
        "data": [
            {
                "type": "flight-offer",
                "id": "1",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT16H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "37",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T00:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T05:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "23",
                                "aircraft": {
                                    "code": "330"
                                },
                                "duration": "PT4H30M",
                                "id": "38",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T10:00:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T11:32:00"
                                },
                                "carrierCode": "AV",
                                "number": "9758",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H32M",
                                "id": "39",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2217.61",
                    "base": "1725.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2217.61"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "767.50",
                            "base": "620.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "767.50",
                            "base": "620.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "627.10",
                            "base": "485.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "37",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "38",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "39",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "2",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT21H58M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "40",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T06:00:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T11:30:00"
                                },
                                "carrierCode": "AV",
                                "number": "45",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H30M",
                                "id": "41",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T15:10:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T16:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "9798",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "42",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2217.61",
                    "base": "1725.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2217.61"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "767.50",
                            "base": "620.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "767.50",
                            "base": "620.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "627.10",
                            "base": "485.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "40",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "41",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "42",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "3",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT21H58M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "43",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T00:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T05:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "23",
                                "aircraft": {
                                    "code": "330"
                                },
                                "duration": "PT4H30M",
                                "id": "44",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T15:10:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T16:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "9798",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "45",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2217.61",
                    "base": "1725.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2217.61"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "767.50",
                            "base": "620.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "767.50",
                            "base": "620.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "627.10",
                            "base": "485.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "43",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "44",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "45",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "4",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT25H4M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "1",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T00:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T05:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "23",
                                "aircraft": {
                                    "code": "330"
                                },
                                "duration": "PT4H30M",
                                "id": "2",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T18:10:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T19:46:00"
                                },
                                "carrierCode": "AV",
                                "number": "9546",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H36M",
                                "id": "3",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2217.61",
                    "base": "1725.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2217.61"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "767.50",
                            "base": "620.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "3",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "767.50",
                            "base": "620.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "3",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "627.10",
                            "base": "485.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "3",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "3",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "5",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT24H28M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "19",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T00:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T05:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "23",
                                "aircraft": {
                                    "code": "330"
                                },
                                "duration": "PT4H30M",
                                "id": "20",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T17:40:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T19:10:00"
                                },
                                "carrierCode": "AV",
                                "number": "9752",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "21",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2217.61",
                    "base": "1725.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2217.61"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "767.50",
                            "base": "620.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "19",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "20",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "21",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "767.50",
                            "base": "620.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "19",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "20",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "21",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "627.10",
                            "base": "485.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "19",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "20",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "21",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "19",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "20",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "21",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BRK",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "6",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT14H28M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "10",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T00:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T05:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "23",
                                "aircraft": {
                                    "code": "330"
                                },
                                "duration": "PT4H30M",
                                "id": "11",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T07:40:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T09:10:00"
                                },
                                "carrierCode": "AV",
                                "number": "8556",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "12",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2220.73",
                    "base": "1728.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2220.73"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "10",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "11",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "10",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "11",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "628.14",
                            "base": "486.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "10",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "11",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "10",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "11",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "12",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "7",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT15H50M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "34",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T00:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T05:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "23",
                                "aircraft": {
                                    "code": "330"
                                },
                                "duration": "PT4H30M",
                                "id": "35",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T09:00:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T10:32:00"
                                },
                                "carrierCode": "AV",
                                "number": "9542",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H32M",
                                "id": "36",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2220.73",
                    "base": "1728.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2220.73"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "35",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "36",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "35",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "36",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "628.14",
                            "base": "486.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "35",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "36",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "34",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "35",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "36",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "8",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT19H23M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "4",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T00:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T05:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "23",
                                "aircraft": {
                                    "code": "330"
                                },
                                "duration": "PT4H30M",
                                "id": "5",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T12:35:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T14:05:00"
                                },
                                "carrierCode": "AV",
                                "number": "9788",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "6",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2220.73",
                    "base": "1728.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2220.73"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "4",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "5",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "6",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "4",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "5",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "6",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "628.14",
                            "base": "486.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "4",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "5",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "6",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "4",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "5",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "6",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "9",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT20H38M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJa",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "25",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T00:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T05:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "23",
                                "aircraft": {
                                    "code": "330"
                                },
                                "duration": "PT4H30M",
                                "id": "26",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T13:50:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T15:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "8558",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "27",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2220.73",
                    "base": "1728.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2220.73"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "25",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "26",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "25",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "26",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "628.14",
                            "base": "486.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "25",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "26",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "25",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "26",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "27",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "10",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT20H38M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "28",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T06:00:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T11:30:00"
                                },
                                "carrierCode": "AV",
                                "number": "45",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H30M",
                                "id": "29",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T13:50:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T15:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "8558",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "30",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2220.73",
                    "base": "1728.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2220.73"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "29",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "30",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "29",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "30",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "628.14",
                            "base": "486.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "29",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "30",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "28",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "29",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "30",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "11",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT23H28M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "13",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T00:20:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T05:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "23",
                                "aircraft": {
                                    "code": "330"
                                },
                                "duration": "PT4H30M",
                                "id": "14",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T16:40:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T18:10:00"
                                },
                                "carrierCode": "AV",
                                "number": "9550",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "15",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2220.73",
                    "base": "1728.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2220.73"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "14",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "14",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "628.14",
                            "base": "486.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "14",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "13",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "14",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "15",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "12",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT23H28M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "16",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T06:00:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T11:30:00"
                                },
                                "carrierCode": "AV",
                                "number": "45",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H30M",
                                "id": "17",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T16:40:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T18:10:00"
                                },
                                "carrierCode": "AV",
                                "number": "9550",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "18",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2220.73",
                    "base": "1728.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2220.73"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "17",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "18",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "17",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "18",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "628.14",
                            "base": "486.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "17",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "18",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "16",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "17",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "18",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "13",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT24H28M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "22",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T06:00:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T11:30:00"
                                },
                                "carrierCode": "AV",
                                "number": "45",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H30M",
                                "id": "23",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T17:40:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T19:10:00"
                                },
                                "carrierCode": "AV",
                                "number": "9752",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "24",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2220.73",
                    "base": "1728.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2220.73"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "22",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "23",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "24",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "22",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "23",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "24",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "628.14",
                            "base": "486.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "22",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "23",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "24",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "22",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "W"
                            },
                            {
                                "segmentId": "23",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "24",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "14",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT18H41M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T17:39:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T23:20:00"
                                },
                                "carrierCode": "AM",
                                "number": "111",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "31",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T06:00:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T11:30:00"
                                },
                                "carrierCode": "AV",
                                "number": "45",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H30M",
                                "id": "32",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-11-24T13:50:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-24T15:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "8558",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "33",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2220.73",
                    "base": "1728.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2220.73"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "31",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "32",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "768.54",
                            "base": "621.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "31",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "32",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "628.14",
                            "base": "486.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "31",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "N"
                            },
                            {
                                "segmentId": "32",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "55.51",
                            "base": "0.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "31",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "class": "N"
                            },
                            {
                                "segmentId": "32",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0KK9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "33",
                                "cabin": "ECONOMY",
                                "fareBasis": "WEOB0BRK",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "flight-offer",
                "id": "15",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2022-07-09",
                "numberOfBookableSeats": 7,
                "itineraries": [
                    {
                        "duration": "PT42H23M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "TIJ",
                                    "at": "2022-11-23T15:42:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-11-23T21:20:00"
                                },
                                "carrierCode": "AV",
                                "number": "2638",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H38M",
                                "id": "7",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-11-24T12:55:00"
                                },
                                "arrival": {
                                    "iataCode": "SJO",
                                    "terminal": "M",
                                    "at": "2022-11-24T15:45:00"
                                },
                                "carrierCode": "AV",
                                "number": "633",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT2H50M",
                                "id": "8",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "SJO",
                                    "terminal": "M",
                                    "at": "2022-11-25T10:15:00"
                                },
                                "arrival": {
                                    "iataCode": "CTG",
                                    "at": "2022-11-25T13:05:00"
                                },
                                "carrierCode": "AV",
                                "number": "649",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H50M",
                                "id": "9",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT14H31M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CTG",
                                    "at": "2022-12-23T05:10:00"
                                },
                                "arrival": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T06:40:00"
                                },
                                "carrierCode": "AV",
                                "number": "8571",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT1H30M",
                                "id": "46",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BOG",
                                    "terminal": "1",
                                    "at": "2022-12-23T08:00:00"
                                },
                                "arrival": {
                                    "iataCode": "MEX",
                                    "terminal": "1",
                                    "at": "2022-12-23T11:50:00"
                                },
                                "carrierCode": "AV",
                                "number": "72",
                                "aircraft": {
                                    "code": "320"
                                },
                                "duration": "PT4H50M",
                                "id": "47",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "MEX",
                                    "terminal": "2",
                                    "at": "2022-12-23T15:00:00"
                                },
                                "arrival": {
                                    "iataCode": "TIJ",
                                    "at": "2022-12-23T16:41:00"
                                },
                                "carrierCode": "AM",
                                "number": "110",
                                "aircraft": {
                                    "code": "7M8"
                                },
                                "operating": {
                                    "carrierCode": "AM"
                                },
                                "duration": "PT3H41M",
                                "id": "48",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "2409.70",
                    "base": "1706.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "2409.70"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                    "AV"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "811.13",
                            "base": "612.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "7",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0IP9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "8",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0IP9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "9",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BR9",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "2",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "811.13",
                            "base": "612.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "7",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0IP9",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "8",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0IP9",
                                "brandedFare": "XS",
                                "class": "W",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "9",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BR9",
                                "brandedFare": "XS",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N",
                                "includedCheckedBags": {
                                    "quantity": 0
                                }
                            }
                        ]
                    },
                    {
                        "travelerId": "3",
                        "fareOption": "STANDARD",
                        "travelerType": "CHILD",
                        "price": {
                            "currency": "EUR",
                            "total": "666.57",
                            "base": "473.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "7",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0IP9",
                                "class": "W"
                            },
                            {
                                "segmentId": "8",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0IP9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "9",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BR9",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    },
                    {
                        "travelerId": "4",
                        "fareOption": "STANDARD",
                        "travelerType": "HELD_INFANT",
                        "associatedAdultId": "1",
                        "price": {
                            "currency": "EUR",
                            "total": "120.87",
                            "base": "9.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "7",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0IP9",
                                "class": "W"
                            },
                            {
                                "segmentId": "8",
                                "cabin": "ECONOMY",
                                "fareBasis": "WZOB0IP9",
                                "brandedFare": "XS",
                                "class": "W"
                            },
                            {
                                "segmentId": "9",
                                "cabin": "ECONOMY",
                                "fareBasis": "SEOB0BR9",
                                "brandedFare": "XS",
                                "class": "S"
                            },
                            {
                                "segmentId": "46",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0BRK",
                                "brandedFare": "XS",
                                "class": "P"
                            },
                            {
                                "segmentId": "47",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "class": "P"
                            },
                            {
                                "segmentId": "48",
                                "cabin": "ECONOMY",
                                "fareBasis": "PEOB0IZB",
                                "brandedFare": "XS",
                                "class": "N"
                            }
                        ]
                    }
                ]
            }
        ],
        "dictionaries": {
            "locations": {
                "MEX": {
                    "cityCode": "MEX",
                    "countryCode": "MX"
                },
                "TIJ": {
                    "cityCode": "TIJ",
                    "countryCode": "MX"
                },
                "CTG": {
                    "cityCode": "CTG",
                    "countryCode": "CO"
                },
                "SJO": {
                    "cityCode": "SJO",
                    "countryCode": "CR"
                },
                "BOG": {
                    "cityCode": "BOG",
                    "countryCode": "CO"
                }
            },
            "aircraft": {
                "330": "AIRBUS INDUSTRIE A330",
                "320": "AIRBUS A320",
                "7M8": "BOEING 737 MAX 8"
            },
            "currencies": {
                "EUR": "EURO"
            },
            "carriers": {
                "AV": "AVIANCA",
                "AM": "AEROMEXICO"
            }
        }
    }
]

export default vuelos
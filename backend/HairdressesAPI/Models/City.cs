﻿using HairdressesAPI.DTOs;

namespace HairdressesAPI.Models
{
    public class City
    {
        public int Id { get; set; }
        public string CityName { get; set; }
        public string Country { get; set; }
        // public IEnumerable<AddressDTO>? Adress { get; init; }
    }
}

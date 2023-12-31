﻿using HairdressesAPI.DTOs;

namespace HairdressesAPI.Models
{
    public class Salon
    {
        public int Id { get; init; }
        public string Name { get; init; }
        public string Description { get; init; }
        public string Email { get; init; }
        public string PhoneNumber { get; init; }
        public Address? Address { get; init; }
        public PhotoInfo? Photo { get; set; }
        public IEnumerable<Worker>? Workers { get; set; }
    }
}

﻿using Microsoft.AspNetCore.Identity;

namespace HairdressesAPI.DTOs
{
    public class SalonDTO
    {
        public int Id { get; init; }
        public string Name { get; init; }
        public string Description { get; init; }
        public string Email { get; init; }
        public string PhoneNumber { get; init; }
        public int AddressId { get; init; }
        public AddressDTO? Address { get; init; }
        public IEnumerable<PhotoDTO>?  Photos { get; init; }
        public IEnumerable<WorkerDTO>? Workers { get; init; }
        public IEnumerable<ReviewDTO>? Reviews { get; init; }
        public ApplicationUserDTO? ApplicationUser { get; set; }
        public IEnumerable<VisitDTO>? Visits { get; set; }
    }
}

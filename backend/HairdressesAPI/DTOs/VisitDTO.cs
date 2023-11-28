﻿namespace HairdressesAPI.DTOs
{
    public class VisitDTO
    {
        public int Id { get; init; }
        public DateTime Date { get; init; }
        public bool IsActive { get; init; }
        public bool Notification { get; init; }
        public int ServiceId { get; init; }
        public int UserId { get; init; }
        public int SalonId { get; init; }
        public IEnumerable<SalonDTO> Salons { get; init; }
        public IEnumerable<UserDTO> Users { get; init; }
        public IEnumerable<ServiceDTO> Services { get; init; }
    }
}

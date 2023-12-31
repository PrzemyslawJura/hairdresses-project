﻿using HairdressesAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HairdressesAPI.Persistent.Configuration
{
    public class ServiceConfiguration : IEntityTypeConfiguration<ServiceDTO>
    {
        public void Configure(EntityTypeBuilder<ServiceDTO> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .HasMaxLength(100)
                .HasColumnType("varchar(100)");

            builder.Property(x => x.Price)
                .HasMaxLength(10)
                .HasColumnType("decimal(5, 2)");

            builder.Property(x => x.Time)
                .HasMaxLength(4);

            builder.HasMany(x => x.Visit)
                .WithMany(x => x.Services);

            builder.HasOne(x => x.Worker)
                .WithMany(x => x.Service)
                .HasForeignKey(x => x.WorkerId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        }
    }
}

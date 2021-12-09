using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace BussinessLayer
{
    public static class BussinessLayerExtensions
    {
        public static IServiceCollection AddBussinessLayer(this IServiceCollection services)
        {
            return services;
        }
    }
}
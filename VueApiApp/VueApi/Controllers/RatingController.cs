using Microsoft.AspNetCore.Mvc;

namespace VueApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RatingController : ControllerBase
    {
        private static readonly UserRating[] Ratings = new[]
        {
            new UserRating(){ UserName = "alex", Rating = 3 },
            new UserRating(){ UserName = "seb", Rating = 2 },
            new UserRating(){ UserName = "kate", Rating = 5 }
        };

        private readonly ILogger<RatingController> _logger;

        public RatingController(ILogger<RatingController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetRatings")]
        public IEnumerable<UserRating> Get()
        {
            return Ratings.ToArray();
        }
    }
}
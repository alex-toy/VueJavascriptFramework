using Microsoft.AspNetCore.Mvc;

namespace VueApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RatingController : Controller
    {
        private static readonly List<UserRating> Ratings = new List<UserRating>
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

        [HttpPost]
        public void Post(UserRating rating)
        {
            try
            {
                Ratings.Add(rating);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [HttpGet]
        public JsonResult Get()
        {
            Task.Delay(3000).Wait();
            try
            {
                //throw new Exception("an error occured");
                return Json(new { Ratings = Ratings.ToArray(), Message = "ok" });
            }
            catch (Exception ex)
            {
                return Json(new { ex.Message });
            }
        }
    }
}
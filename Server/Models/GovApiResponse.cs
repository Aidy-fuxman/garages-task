namespace Server.Models
{
    public class GovApiResponse
    {
        public GovApiResult result { get; set; }
    }

    public class GovApiResult
    {
        public List<GovApiRecord> records { get; set; }
    }
}
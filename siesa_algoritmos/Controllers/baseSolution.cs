using Microsoft.AspNetCore.Mvc;

namespace siesa_algoritmos.Controllers
{
   [Route("api/[controller]")]
[ApiController]
public class BaseKController : ControllerBase
{
    // Convierte un número a base k
    private List<int> ConvertirABaseK(int x, int k)
    {
        List<int> resultado = new List<int>();
        while (x > 0)
        {
            resultado.Add(x % k);
            x = x / k;
        }
        resultado.Reverse();
        return resultado;
    }

    // GET: api/BaseK/5?k=2
    [HttpGet("{x}")]
    public ActionResult<string> GetBaseK(int x , int k)
    {
        List<int> resultado = ConvertirABaseK(x, k);
        return string.Join("", resultado);
    }
}
   
}
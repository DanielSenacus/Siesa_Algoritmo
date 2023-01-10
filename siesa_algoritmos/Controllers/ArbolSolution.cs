using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
public class ArbolController : Controller
{
    [HttpGet("peso/{arbolId}")]
    public ActionResult<int> GetPeso(int arbolId)
    {
        // Obtener el árbol con id "arbolId"
        Arbol arbol = ObtenerArbol(arbolId);

        // Devolver el peso del árbol
        return Metodo.Peso(arbol);
    }

    [HttpGet("peso-promedio/{arbolId}")]
    public ActionResult<double> GetPesoPromedio(int arbolId)
    {
        // Obtener el árbol con id "arbolId"
        Arbol arbol = ObtenerArbol(arbolId);

        // Devolver el peso promedio del árbol
        return Metodo.PesoPromedio(arbol);
    }

    [HttpGet("altura/{arbolId}")]
    public ActionResult<int> GetAltura(int arbolId)
    {
        // Obtener el árbol con id "arbolId"
        Arbol arbol = ObtenerArbol(arbolId);

        // Devolver la altura del árbol
        return Metodo.Altura(arbol);
    }

    [HttpGet("data/{arbolId}")]
    public ActionResult<Arbol> GetArbol(int arbolId){

        Arbol arbol = ObtenerArbol(arbolId);

        return arbol;
    }

    private Arbol ObtenerArbol(int arbolId)
    {
        // Obtener el árbol con id "arbolId" de la base de datos o de cualquier otro lugar
        // En este ejemplo, simplemente se crea un árbol de prueba
        return new Arbol(1)
        {
            Subarboles = new List<Arbol>
            {
                new Arbol(2)
                {
                    Subarboles = new List<Arbol>
                    {
                        new Arbol(3),
                        new Arbol(4)
                    }
                },
                new Arbol(5)
            }
        };
    }
}
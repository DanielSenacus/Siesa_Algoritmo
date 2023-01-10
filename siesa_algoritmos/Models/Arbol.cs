using System.Collections.Generic;

public class Arbol
{
    public int Peso { get; set; }
    public List<Arbol> Subarboles { get; set; }

    public Arbol(int peso)
    {
        Peso = peso;
        Subarboles = new List<Arbol>();
    }
}

public class Metodo
{
    public static int Peso(Arbol arbol)
    {
        int peso = arbol.Peso;
        foreach (Arbol subarbol in arbol.Subarboles)
        {
            peso += Peso(subarbol);
        }
        return peso;
    }

    public static double PesoPromedio(Arbol arbol)
    {
        return (double)Peso(arbol) / NumeroDeNodos(arbol);
    }

    public static int NumeroDeNodos(Arbol arbol)
    {
        int numeroDeNodos = 1;
        foreach (Arbol subarbol in arbol.Subarboles)
        {
            numeroDeNodos += NumeroDeNodos(subarbol);
        }
        return numeroDeNodos;
    }

    public static int Altura(Arbol arbol)
    {
        int altura = 0;
        foreach (Arbol subarbol in arbol.Subarboles)
        {
            altura = Math.Max(altura, Altura(subarbol));
        }
        return altura + 1;
    }
}
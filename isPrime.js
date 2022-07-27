function isPrime(n)
{
    // Corner case
    if (n <= 1) return false;
 
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
    return true;
}
 
// Driver Program to test above function
isPrime(11)? console.log(" true" + "<br>"): console.log(" false" + "<br>");
isPrime(15)? console.log(" true" + "<br>"): console.log(" false" + "<br>");